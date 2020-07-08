//Components that get extracted from Resource Deposits.
var resources = ["CopperOre", "IronOre", "Coal", "Limestone", "CateriumOre"];
//Components processed by Smelters or Foundries.
var smeltables = ["CopperIngot", "IronIngot", "CateriumIngot", "SteelIngot"];
//Components that require Oil Extractor
var extractables = ["CrudeOil"];
//Components that require Refinery
var refinables = ["AluminaSolution", "AluminumScrap", "Fuel", "LiquidBiofuel", "PackagedFuel", "PackagedHeavyOilResidue","PackagedLiquidBiofuel", "PackagedOil", "PackagedTurbofuel", "PackagedWater", "PetroleumCoke", "Plastic", "Rubber", "SulfuricAcid", "UraniumPellet"];
//Component that are picked up by the player
var playerComponents = ["Biomass"];
//Container for generated code.
var container = document.getElementById("container");
var svgContainer; 

var lineColor = "#FF0000";

//The tiers of the generated production line.
var tiers = [];
//Ready for display?
var designingDone = false;
//What tier is currently being worked on.
var tierCounter = 0;
//Counter to prevent infinite loop.
var loopCounter = 0;	
//Maximum allowed loops
var maxLoops = 30;
//address delimiter
var delimiter = "x";

//Generate the production line.
function Optimize(){

    container.innerHTML = "";    
    tiers = [];
    designingDone = false;
    tierCounter = 0;
    loopCounter = 0;
    
    //Get the selection of the user.
    var selection = document.getElementById("selectionList").value;

    //Generate a design for the production line.
    DesignProductionLine(selection);

    //Display the design on the page.
    container.innerHTML = DisplayProductionLine();

    DrawLinesBetweenNodes();
}

//Calculate the components needed.	
function DesignProductionLine(componentName)
{
    //Setup the first tier.
    var firstTier = [];
    var componentInfo = componentData[componentName];

    //Check for byproducts
    var firstHasByProduct = componentInfo.createdComponents.length > 1;
				
    if(!firstHasByProduct){
        //Put the tier in the array
        firstTier.push(CreateSubTierObject(tierCounter, 1, 0, componentName, componentInfo.createdPerMinute[0], GetMachineType(componentInfo), 1));
        tiers.push(firstTier);	
    }
    else
    {
        //Put the tier in the array
        firstTier.push(CreateSubTierObject(tierCounter, 1, 0, componentName, componentInfo.createdPerMinute[0], GetMachineType(componentInfo), 1, true, componentInfo.createdComponents[1], componentInfo.createdPerMinute[1]));
        tiers.push(firstTier);	
    }    

    //Move on to the next tier.
    tierCounter++;
    
    while(!designingDone)
    {			
        //Get the latest tier.
        var latestTier = tiers[tiers.length - 1];
        //If all the latest objects are resources, stop here:
        var allResources = true;
        for(var a = 0; a < latestTier.length; a++)
        {
            if(latestTier[a].name != "Resource"){
                allResources = false;
                break;
            }
        }
        if(allResources){
            designingDone = true;
            break;
        }

        //Create a new array to store the next tier.
        var nextTier = [];
        
        //Go through all the sub-tiers of the latest tier:
        for(var i = 0; i < latestTier.length; i++)
        {
            //What component is the latest tier ?
            var subTierComponent = latestTier[i].name;
            //console.log("Subtier Product: " + subTierComponent);
            
            //Get the info of the object to create.
            var tierComponentInfo = componentData[subTierComponent];
            
            //What components are needed to create the objects ?
            var componentsRequired = tierComponentInfo.components;				

            //Loop through each component:
            for(var j = 0; j < componentsRequired.length; j++)
            {
                //Get object data.
                var componentName = componentsRequired[j];	
				if(componentName == "Resource"){
					//Create the new sub tier.
					var newSubTier = CreateSubTierObject(tierCounter, i, j, componentName, createdParts, GetMachineType(componentInfo), machinesNeeded);
					//Add it to this tier.
                    nextTier.push(newSubTier);		
                    continue;
				}
                //console.log("Ingredient " + j + ": " + componentName);			
                
                //Get the satisfactory data.
                var componentInfo = componentData[componentName];					
                
                //How many can be created per min ?
                var productionSpeed = componentInfo.createdPerMinute[0];
                //console.log("Production/min: " + productionSpeed);
                
                //How many are needed?
                var totalComponentsRequired = tierComponentInfo.usedPerMinute[j] * latestTier[i].machineCount;
                //console.log("Needed: " + totalComponentsRequired);
                
                //How many machines are needed to keep up with demand?
                var machinesNeeded = Math.ceil(totalComponentsRequired / productionSpeed);	
                //console.log("Machines needed to keep up: " + machinesNeeded);
                
                //How many parts will these machines create?
                var createdParts = machinesNeeded * componentInfo.createdPerMinute[0];
                //console.log("Minimum created parts: " + createdParts);
                //console.log("Tier: " + tierCounter);
                //console.log("Product: " + i);
                //console.log("Ingredient: " + j);
                //console.log("-----------------------");
				
				//Check for byproducts
                var hasByProduct = componentInfo.createdComponents.length > 1;
				
				if(!hasByProduct){
					//Create the new sub tier.
					var newSubTier = CreateSubTierObject(tierCounter, i, j, componentName, createdParts, GetMachineType(componentInfo), machinesNeeded);
					//Add it to this tier.
					nextTier.push(newSubTier);		
				}
				else
				{
					//Create the new sub tier.
					var newSubTier = CreateSubTierObject(tierCounter, i, j, componentName, createdParts, GetMachineType(componentInfo), machinesNeeded, true, componentInfo.createdComponents[1], machinesNeeded * componentInfo.createdPerMinute[1]);
					//Add it to this tier.
					nextTier.push(newSubTier);	
				}               					
            }
        }	

        //Add the created tier to the array.
        tiers.push(nextTier);
        
        //Make sure it doesn't loop forever.
        loopCounter++;				
        if(loopCounter > maxLoops){
            designingDone = true;
        }
        
        //Move on to the next tier.
        tierCounter++;
    }			
}

//Create a new SubTierObject
function CreateSubTierObject(_tierID, _productID, _ingredientID, _name, _amount, _machine, _machineCount, _hasByProduct = false, _byProductName = "", _byProductAmount = 0)
{
    var tier = {
        tierID: _tierID,
        productID: _productID,
        ingredientID: _ingredientID,
        name: _name,
        amount: _amount,
        machine: _machine,
        machineCount: _machineCount,
		hasByProduct: _hasByProduct,
		byProductName: _byProductName,
        byProductAmount: _byProductAmount,
        address: "",
        colspan: ""
       }
    
    return tier;			
}		

//Return a string of the type of the machine.
function GetMachineType(componentInfo){
    var componentCount = componentInfo.components.length;
	var componentName = componentInfo.createdComponents[0];
    
    if(resources.includes(componentName))
    {
        return "Miner";
    }
    else if(smeltables.includes(componentName))
    {
        if(componentCount == 1){
            return "Smelter";
        }
        else
        {
            return "Foundry";
        }
    }
	else if(extractables.includes(componentName)){
		return "OilExtractor";
	}
	else if(refinables.includes(componentName)){
		return "Refinery";
    }
    else if(playerComponents.includes(componentName)){
		return "Player";
	}
	else if(componentName == "Water"){
		return "WaterExtractor";
	}
    else
    {
        switch(componentCount){
            case 1: return "Constructor";
            case 2: return "Assembler";
            case 3:
            case 4: return "Manufacturer";
            default: return "Unknown machine type";
        }
    }
}

//Print the design on the screen.
function DisplayProductionLine()
{      
    //Generate all the production addresses
    for(var i = 0; i < tiers.length; i++)
     {
        for(var j = 0; j < tiers[i].length; j++)
        {	
            if(i == 0){
                //This is the first tier so the address will be 0.
                tiers[i][j].address = "0";
                continue;
            }
            
            //Lookup the product at the <productID> position on the previous tier. Copy their address and add you ingredient id to finish the code.
            var previousAddress = tiers[i - 1][tiers[i][j].productID].address;
            tiers[i][j].address = previousAddress + delimiter + tiers[i][j].ingredientID;
        }
    }

    //Find the highest number in each address slot from the lowest tier
    var lowestTier = tiers[tiers.length - 1];

    //Generate the colspan data:
    for(var i = 0; i < tiers.length; i++)
     {
        for(var j = 0; j < tiers[i].length; j++)
        {	
            if(i == 0){
                //This is the first tier so the colspan will be the length of the lowest tier array.
                tiers[i][j].colspan = lowestTier.length;
                continue;
            }

            //Get current objects address
            var address = tiers[i][j].address;
            
            //Check how many lowest tier objects start with this address:
            var subAddressCount = 0;
            for(var k = 0; k < lowestTier.length; k++){
                if(lowestTier[k].address.startsWith(address)){
                    subAddressCount++;
                }
            }
            
            tiers[i][j].colspan = subAddressCount;
        }
    }

    var htmlCode = "";
    htmlCode += "<table id='mainTable'>";
    
    //Loop through all the sub tier objects.
    for(var i = 0; i < tiers.length; i++)
    {
        htmlCode += "<tr>";

        for(var j = 0; j < tiers[i].length; j++)
        {	
            var componentInfo = tiers[i][j];
            htmlCode += "<td class='componentHolder' colspan='" + componentInfo.colspan + "'>";
            htmlCode += DisplaySubTierObject(componentInfo);
            htmlCode += "</td>";
        }    
        
        htmlCode += "</tr>";
    }	

    htmlCode += "</table>";

    return htmlCode;	
}

//Generate HTML for the component
function DisplaySubTierObject(componentInfo)
{
    if(componentInfo.name == "Resource")
    {
        return "";//<div class='Resource'>Resource</div>";
    }

    var byProduct = componentInfo.hasByProduct;

    //Titles
    var componentCode = "<table id='" + componentInfo.address + "' class='" + componentInfo.machine + "'><tr><td class='componentName'>" + SplitPascal(componentInfo.machine) + "</td><td class='componentName'>" + SplitPascal(componentInfo.name) +"</td>";
    if(byProduct){
        componentCode += "<td class='componentName'>" + SplitPascal(componentInfo.byProductName) + "</td>";
    }
    componentCode += "</tr>";

    //Images and amounts
    componentCode += "<td class='componentInfo'><img class='componentImg' src='img/" + componentInfo.machine + ".png'/><p class='componentAmount'>" + componentInfo.machineCount + "</p></td>";
    componentCode += "<td class='componentInfo'><img class='componentImg' src='img/" + componentInfo.name + ".png'/><p class='componentAmount'>" + componentInfo.amount + "</p></td>";
    if(byProduct){
        componentCode += "<td class='componentInfo'><img class='componentImg' src='img/" + componentInfo.byProductName + ".png'/><p class='componentAmount'>" + componentInfo.byProductAmount + "</p></td>" 
    }    

    componentCode += "</tr></td></table>";
    
    
    return componentCode;
}

//Add spaces between PascalCase typed strings
function SplitPascal(pascalString)
{
    var newString = "";

    for(var i = 0; i < pascalString.length; i++)
    {
        var character = "" + pascalString.charAt(i);
        if(character == character.toUpperCase()){
            if(i == 0){
                newString += character;
            }
            else
            {
                newString += " " + character;
            }
        }
        else
        {
            newString += character;
        }
    }

    return newString;
}

function DrawLinesBetweenNodes()
{
    var svg = document.getElementById("svg1");
    svg.innerHTML = "";
    var pathCounter = 0;

    //Go through all the tiers from bottom to top and draw lines to the component above it.
    for(var i = tiers.length - 1; i > 0; i--)
    {
        for(var j = 0; j < tiers[i].length; j++)
        {	
            //Get the address
            var address = "" + tiers[i][j].address;

            if(document.getElementById(address) == null){continue;}

            //Find the address of the parent node:
            var parentAddress = address.substring(0, address.length - 2);

            svg.innerHTML += "<path id='path" + pathCounter + "' d='M0 0' fill='none' stroke='#454545' stroke-width='8px'>";
            connectElements($("#svg1"), $("#path" + pathCounter) , $("#" + address), $("#" + parentAddress) ); 
            pathCounter++;          
        }
    }
}

//------------SVGDRAW----------//
//helper functions, it turned out chrome doesn't support Math.sgn() 
function signum(x) {
    return (x < 0) ? -1 : 1;
}
function absolute(x) {
    return (x < 0) ? -x : x;
}

function drawPath(svg, path, startX, startY, endX, endY) {
    // get the path's stroke width (if one wanted to be  really precize, one could use half the stroke size)
    var stroke =  parseFloat(path.attr("stroke-width"));
    // check if the svg is big enough to draw the path, if not, set heigh/width
    if (svg.attr("height") <  endY)                 svg.attr("height", endY);
    if (svg.attr("width" ) < (startX + stroke) )    svg.attr("width", (startX + stroke));
    if (svg.attr("width" ) < (endX   + stroke) )    svg.attr("width", (endX   + stroke));
    
    var deltaX = (endX - startX) * 0.15;
    var deltaY = (endY - startY) * 0.15;
    // for further calculations which ever is the shortest distance
    var delta  =  deltaY < absolute(deltaX) ? deltaY : absolute(deltaX);

    // set sweep-flag (counter/clock-wise)
    // if start element is closer to the left edge,
    // draw the first arc counter-clockwise, and the second one clock-wise
    var arc1 = 0; var arc2 = 1;
    if (startX > endX) {
        arc1 = 1;
        arc2 = 0;
    }
    // draw tha pipe-like path
    // 1. move a bit down, 2. arch,  3. move a bit to the right, 4.arch, 5. move down to the end 
    path.attr("d",  "M"  + startX + " " + startY +
                    " V" + (startY + delta) +
                    " A" + delta + " " +  delta + " 0 0 " + arc1 + " " + (startX + delta*signum(deltaX)) + " " + (startY + 2*delta) +
                    " H" + (endX - delta*signum(deltaX)) + 
                    " A" + delta + " " +  delta + " 0 0 " + arc2 + " " + endX + " " + (startY + 3*delta) +
                    " V" + endY );
}

function connectElements(svg, path, startElem, endElem) {
    svgContainer= $("#svgContainer");    

    // if first element is lower than the second, swap!
    console.log(startElem);
    if(startElem.offset().top > endElem.offset().top){
        var temp = startElem;
        startElem = endElem;
        endElem = temp;
    }

    // get (top, left) corner coordinates of the svg container   
    var svgTop  = svgContainer.offset().top;
    var svgLeft = svgContainer.offset().left;

    // get (top, left) coordinates for the two elements
    var startCoord = startElem.offset();
    var endCoord   = endElem.offset();

    // calculate path's start (x,y)  coords
    // we want the x coordinate to visually result in the element's mid point
    var startX = startCoord.left + 0.5*startElem.outerWidth() - svgLeft;    // x = left offset + 0.5*width - svg's left offset
    var startY = startCoord.top  + startElem.outerHeight() - svgTop;        // y = top offset + height - svg's top offset

        // calculate path's end (x,y) coords
    var endX = endCoord.left + 0.5*endElem.outerWidth() - svgLeft;
    var endY = endCoord.top  - svgTop;

    // call function for drawing the path
    drawPath(svg, path, startX, startY, endX, endY);

}

