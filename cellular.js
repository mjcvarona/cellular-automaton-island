//Each cell is an object; future versions may have multiple
//attributes per cell. For now, it just has a cell value.
class Cell {
  constructor(a){
    this.val = a;
  }
}

//Create a starting grid with random values in a 2D array
function createGrid(res){
  grid = [];
  for(let i = 0; i <= width/res; i++){
    grid[i] = [];
  }
  
  for(let x = 0; x <= width/res; x++){
    for(let y = 0; y <= height/res; y++){
      grid[x][y] = new Cell(random(1.2, 1.4));
    }
  }
  return grid;
}

//Perform one step of CA algo
function stepCA(theGrid){
  //Create new grid to be written to
  newGrid = [];
  for(let i = 0; i <= width/reso; i++){
    newGrid[i] = [];
  }
  
  //Write values to grid
  for(let x = 0; x <= width/reso; x++){
    for(let y = 0; y <= height/reso; y++){
      newGrid[x][y] = new Cell(1.3);
    }
  }
  
  //Averaging values of neighbors
  for(let x = 2; x <= width/reso - 2; x++){
    for(let y = 2; y <=height/reso - 2; y++){
      let neighbors = theGrid[x][y].val + theGrid[x+1][y].val + theGrid[x-1][y].val + theGrid[x][y+1].val + theGrid[x][y-1].val + theGrid[x+1][y+1].val + theGrid[x+1][y-1].val + theGrid[x-1][y-1].val + theGrid[x-1][y+1].val;
      neighbors = neighbors/9;
      newGrid[x][y] = new Cell(neighbors);
    }
  }
  
  //Squares in the middle
  // for(let x = width/4/reso - 10; x <= width/4/reso + 10; x++){
  //   for(let y = height/4/reso - 10; y <= height/4/reso + 10; y++){
  //     newGrid[x][y] = new Cell((map(pointboi1, 0, width+height, 0, 2)));
  //   }
  //   for(let z = 3*height/4/reso - 10; z <=3* height/4/reso + 10; z++){
  //     newGrid[x][z] = new Cell((map(pointboi2, 0, width+height, 0, 2)));
  //   }
  // }
  // for(let x = 3*width/4/reso - 10; x <= 3*width/4/reso + 10; x++){
  //   for(let y = height/4/reso - 10; y <= height/4/reso + 10; y++){
  //     newGrid[x][y] = new Cell((map(pointboi3, 0, width+height, 0, 2)));
  //   }
  //   for(let z = 3*height/4/reso - 10; z <=3* height/4/reso + 10; z++){
  //     newGrid[x][z] = new Cell((map(pointboi4, 0, width+height, 0, 2)));
  //   }
  // }
  // for(let x = width/2/reso-10; x <= width/2/reso+10; x++){
  //   for(let y = height/2/reso-10; y <= height/2/reso+10; y++){
  //     newGrid[x][y] = new Cell((map(pointboi, 0, width+height, 0, 2)));
  //   }
  // }
  
  //Randomly spawning squares as raindrops
  if(rainfall==true){
    hueee=random(1.1,1.3);
    pointttX=random(60, width-60);
    pointttY=random(60, height-60);
    for(let x = round(pointttX/reso - 3); x <= pointttX/reso + 3; x++){
      for(let y = round(pointttY/reso - 3); y <= pointttY/reso + 3; y++){
        newGrid[x][y] = new Cell(hueee);
      }
    }
  }
  return newGrid;
}

//Print the grid
function printGrid(printer){
  for(let x = 0; x <= width/reso; x++){
    for(let y = 0; y <= height/reso; y++){
      fill(map(printer[x][y].val, 0.3, 1.7, 0, 360), 100, 90);
      noStroke();
      rect(x*reso, y*reso, reso, reso);
    }
  }
}