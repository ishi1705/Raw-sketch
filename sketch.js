let testVariable = 28; 
let arrayOfColorChoices = ['lightblue',  'pink', 'lavender',  'lightyellow'];
let myWonderfulTint;
function origami() {
  // returns result of calculation
  return random(arrayOfColorChoices);
}
function setup() {
  createCanvas(400, 400);
  myWonderfulTint = origami(); 
  background(myWonderfulTint);
    }