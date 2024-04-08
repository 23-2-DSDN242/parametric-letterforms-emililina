const canvasWidth = 960;
const canvasHeight = 500;

/*
 * my three variable per letter are:
 *
   size: radius of the second circle (in pixels)
   offsetx: x offset (in pixels) of the second circle
            relative to the first one
   offsety: y offset (in pixels) of the second circle
            relative to the first one
 *
 */

const letterA = {
  "size": 80,
  "offsetx": 0,
  "offsety": 35,

   "lineEndA" : 10,
   "lineEndB" : 15,
   "lineEndC" : 20,
   "lineEndD" : 25,
   "lineEndE" : 30,
   "lineEndF" : 35,
   "lineEndG" : 40,
   "lineEndH" : 45,
   "lineEndI" : 50,
   "lineEndJ" : 55,
   "lineEndK" : 60,
   "lineEndL" : 65,
   "lineEndM" : 70,
   "lineEndN" : 75,
   "lineEndO" : 80,
   "lineEndP" : 85,
   "lineEndQ" : 90,
   "lineEndR" : 95,
   "lineEndS" : 100,
   "lineEndT" : 100,
   "lineEndU" : 100
}

const letterB = {
  "size": 150,
  "offsetx": 0,
  "offsety": -145,

  "lineEndA" : 20,
  "lineEndB" : 40,
  "lineEndC" : 60,
  "lineEndD" : 70,
  "lineEndE" : 60,
  "lineEndF" : 50,
  "lineEndG" : 40,
  "lineEndH" : 50,
  "lineEndI" : 60,
  "lineEndJ" : 70,
  "lineEndK" : 80,
  "lineEndL" : 90,
  "lineEndM" : 100,
  "lineEndN" : 100,
  "lineEndO" : 100,
  "lineEndP" : 90,
  "lineEndQ" : 80,
  "lineEndR" : 70,
  "lineEndS" : 60,
  "lineEndT" : 50,
  "lineEndU" : 40
}

const letterC = {
  "size": 100,
  "offsetx": 30,
  "offsety": 0,

  "lineEndA" : 100,
  "lineEndB" : 90,
  "lineEndC" : 60,
  "lineEndD" : 30,
  "lineEndE" : 20,
  "lineEndF" : 10,
  "lineEndG" : 10,
  "lineEndH" : 10,
  "lineEndI" : 10,
  "lineEndJ" : 10,
  "lineEndK" : 10,
  "lineEndL" : 10,
  "lineEndM" : 10,
  "lineEndN" : 10,
  "lineEndO" : 10,
  "lineEndP" : 10,
  "lineEndQ" : 20,
  "lineEndR" : 30,
  "lineEndS" : 50,
  "lineEndT" : 80,
  "lineEndU" : 100
}

const backgroundColor  = "#7f88b5";

const backgroundColorDARK  = "#050A0D";
const peachyOrange = "#fadeaf";
const midOrange = "#fabf5a";
const strokeColor  = "#1f3473";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  stroke(strokeColor);
  strokeWeight(4);

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function draw () {
  // clear screen
background(backgroundColorDARK);

  // compute the center of the canvas
  let center_x = canvasWidth / 2;
  let center_y = canvasHeight / 1.6;

  // draw the letters A, B, C from saved data
  drawLetter(center_x - 250, center_y, letterA);
  drawLetter(center_x      , center_y, letterB);
  drawLetter(center_x + 250, center_y, letterC);
}

function drawLetter(posx, posy, letterData) {
  // determine parameters for second circle
  let size2 = letterData["size"];
  let pos2x = posx + letterData["offsetx"];
  let pos2y = posy + letterData["offsety"];

  let lineEndA = letterData["lineEndA"];
  let lineEndB = letterData["lineEndB"];
  let lineEndC = letterData["lineEndC"];
  let lineEndD = letterData["lineEndD"];
  let lineEndE = letterData["lineEndE"];
  let lineEndF = letterData["lineEndF"];
  let lineEndG = letterData["lineEndG"];
  let lineEndH = letterData["lineEndH"];
  let lineEndI = letterData["lineEndI"];
  let lineEndJ = letterData["lineEndJ"];
  let lineEndK = letterData["lineEndK"];
  let lineEndL = letterData["lineEndL"];
  let lineEndM = letterData["lineEndM"];
  let lineEndN = letterData["lineEndN"];
  let lineEndO = letterData["lineEndO"];
  let lineEndP = letterData["lineEndP"];
  let lineEndQ = letterData["lineEndQ"];
  let lineEndR = letterData["lineEndR"];
  let lineEndS = letterData["lineEndS"];
  let lineEndT = letterData["lineEndT"];
  let lineEndU = letterData["lineEndU"];

  // draw two circles
  // fill(midOrange);
  // ellipse(posx, posy, 150, 150);
  // fill(peachyOrange);
  // ellipse(pos2x, pos2y, size2, size2);

  push();
  
    // translate((width/6)-50,100);
    translate(posx, height/3);
  strokeWeight(5);
  stroke(peachyOrange);
  strokeCap(SQUARE);
  
    line(0,  0,  lineEndA,  0);  
    line(0, 10,  lineEndB,  10);  
    line(0, 20,  lineEndC,  20);
    line(0, 30,  lineEndD,  30);
    line(0, 40,  lineEndE,  40);
    line(0, 50,  lineEndF,  50);
    line(0, 60,  lineEndG,  60);
    line(0, 70,  lineEndH,  70);
    line(0, 80,  lineEndI,  80);
    line(0, 90,  lineEndJ,  90);
    line(0, 100, lineEndK,  100);
    line(0, 110, lineEndL,  110);
    line(0, 120, lineEndM,  120);
    line(0, 130, lineEndN,  130);
    line(0, 140, lineEndO,  140);
    line(0, 150, lineEndP,  150);
    line(0, 160, lineEndQ,  160);
    line(0, 170, lineEndR,  170);
    line(0, 180, lineEndS, 180);
    line(0, 190, lineEndT, 190);
    line(0, 200, lineEndU, 200);
  
  pop();

}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
