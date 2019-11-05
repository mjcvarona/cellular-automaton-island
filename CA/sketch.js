//Set resolution of the grid
var reso = 5;

function setup() {
  createCanvas(600, 600);
  colorMode(HSB);
  thisGrid = createGrid(reso);
  rainfall=false;
}

function draw() {
  background(220);
  //Perform one step of the CA algo and print
  temp = stepCA(thisGrid);
  printGrid(temp);
  //Replace old grid with new one
  thisGrid = temp;
}

function keyPressed(){
  //Toggle rainfall when key is pressed
  if(rainfall==true){
    rainfall=false;
  }else{
    rainfall=true;
  }
}

function mousePressed(){
  //Spawning chunks of green based on mouse clicks
  thisHue=random(0.6, 0.9);
  for(let x = round(mouseX/reso - 10); x <= mouseX/reso + 10; x++){
    for(let y = round(mouseY/reso - 10); y <= mouseY/reso + 10; y++){
      temp[x][y] = new Cell(thisHue);
    }
  }
}

