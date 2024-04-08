/* these are optional special variables which will change the system */
var systemBackgroundColor = "#131212";
var systemLineColor = "#000090";
var systemBoxColor = "#C73869";

/* internal constants */
const darkGreen  = "#26b29d";
const lightGreen  = "#30dfc4";
const strokeColor  = "#0a2d27";
const backgroundCol = "#131212";
const platformCol = "#c7cac2";
const lightrayCol = "#fff8ec";


/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  // color/stroke setup
  stroke(strokeColor);
  strokeWeight(4);
  
  let bounds = width/4 - 50;

  let size2 = letterData["size"];
  let pos2x = 50  + letterData["offsetx"];
  let pos2y = 150 + letterData["offsety"];

  const boundH = 200;
  const boundW = 100;
    
  const shadowInt = boundW/10; //width/10 = 95. boundW/10 = 5.
  
  const baseStart = shadowInt*3; //shadowInt*4 = 380.
  const baseEnd = shadowInt*7; //shadowInt*6 = 570.
  let baseY = letterData["AplatformH"];
  
  let baseMouse = map(mouseX,width*0,width*1, boundW*-2, boundW*2);
  
  strokeWeight(2);
  stroke(platformCol);
  line(baseStart,baseY,baseEnd,baseY);

  let shadowlineY = height;
  
  let shadowSn = shadowInt*0; //shadowInt*0 = 0.
  let shadowSx = shadowInt*7; //shadowInt*7 = 665.
  
  let shadowEn = shadowInt*3; //shadowInt*3 = 285.
  let shadowEx = shadowInt*10; //shadowInt*10 = 950.
  
  
  let shadowRange = map(baseMouse,  baseStart, baseEnd, shadowSn, shadowSx);
  
  let shlineStart = -shadowRange;//map(baseMouse,665,285, shadowSn,shadowSx); //BLUE (width/2)
  
  let shlineEnd = -shadowRange+(shadowInt*5);//map(baseMouse,665,285,shadowEn,shadowEx); //GREEN (width/2)
  

  stroke(0,0,255);
  point(shlineStart, height);
  
  for(let i = baseY; i < boundH; i+=2){ //First Shadow!
 
    let iPosS = map(i,baseY,boundH, baseStart,shlineStart);
    point(iPosS,i); //mark i-line start with blue dot.
    
    let iPosE = map(i,baseY,boundH, baseEnd,shlineEnd);
    point(iPosE,i); //mark i-line end with blue dot.
    
    let colA = color(19,18,18); // "#131212"; var backgroundCol
    let colB = color(199,202,255,150); // "#c7cac2";var platformCol BLUE TINT
    let intCol = map(i,baseY,boundH, -0.5,1);
    let shadeCol = lerpColor(colA,colB,intCol);
 
    stroke(shadeCol);
    strokeWeight(1);
    strokeCap(SQUARE);
    line(iPosS,i,iPosE,i);
  }

  //SECOND SHADOW=======================================
  
  
  let base2Y = letterData["BplatformH"];
  let base2Start = shadowInt*3; //shadowInt*5 = 475.
  let base2End = shadowInt*7;

  let shadow2Y = boundH;
  
  let shadow2Sn = shadowInt*0; //shadowInt*0 = 0.
  let shadow2Sx = shadowInt*7; //shadowInt*7 = 665.
  
  let shadow2En = shadowInt*3; //shadowInt*3 = 285.
  let shadow2Ex = shadowInt*10;  //shadowInt*10 = 950.

  let sh2Range = map(baseMouse, base2Start, base2End, shadow2Sn, shadow2Sx);
  
  let shline2Start = -sh2Range; //
  
  let shline2End = -sh2Range+(shadowInt*5); //map(baseMouse,width*0,width*1,shadow2En,shadow2Ex)
  
  strokeWeight(2);
  stroke(platformCol);
  line(base2Start,base2Y,base2End,base2Y);
  
  for(let i = base2Y; i < shadow2Y; i+= 2){
    stroke(0,0,255);
    
    let iPosS = map(i,base2Y,shadow2Y, base2Start,shline2Start);
    point(iPosS,i);//mark i-line start with blue dot.
    
    let iPosE = map(i,base2Y,shadow2Y, base2End,shline2End);
    point(iPosE,i);//mark i-line end with blue dot.
    
          let colA = color(19,18,18); // "#131212"; var backgroundCol
          let colB = color(255,202,194,150); // "#c7cac2";var platformCol RED TINT
          let intCol = map(i,base2Y,shadow2Y, -0.5,1);
          let shadeCol = lerpColor(colA,colB,intCol);
 
    stroke(shadeCol); 
    strokeWeight(1);
    strokeCap(PROJECT);
    line(iPosS,i,iPosE,i);
  }
  
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["size"]    = map(percent, 0, 100, oldObj["size"], newObj["size"]);
  new_letter["offsetx"] = map(percent, 0, 100, oldObj["offsetx"], newObj["offsetx"]);
  new_letter["offsety"] = map(percent, 0, 100, oldObj["offsety"], newObj["offsety"]);
  return new_letter;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]
