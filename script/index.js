const mainWrapper = document.querySelector("div.main-container");
const grid = document.createElement("div");
grid.className ='grid';

const gridBtn = document.createElement("button");
gridBtn.textContent = "Update grid";
mainWrapper.appendChild(gridBtn);


let gridSize = 16;
let gridItemsTotal = gridSize * gridSize;
function updateGrid(){
    let updateGridSize = Number(prompt("What is the number of squares per side for the new grid ?"));
    return updateGridSize;
}

function random(number){
    return Math.floor(Math.random()*number);
}

function changeColor(){
    const randColor = `rgb(${random(255)},${random(255)},${random(255)}`;
    return randColor;
}

function gridItemColorChange(){
    gridItems.forEach((gridI)=>{    
        gridI.addEventListener("mouseover",(e)=>{        
            e.target.style.backgroundColor = changeColor();    
        });
    });
}

// create 16 grid items.
let gridItem;
for(let i=0; i<gridItemsTotal; i++){
    gridItem = document.createElement("div");
    gridItem.className="grid-item";
    grid.appendChild(gridItem);
}
mainWrapper.appendChild(grid);
let gridItems = document.querySelectorAll("div.grid-item");


gridBtn.addEventListener("click",()=>{
    gridSize=updateGrid();

    let inputValidity = true;
    while(inputValidity){
        if (gridSize > 100){
            gridSize=updateGrid();
        } else if (gridSize === 0){
            gridSize = 20;
        } 
        else{
            inputValidity=false;
        }
    }

    gridItemsTotal = gridSize*gridSize;
    
    const clearGrid = document.querySelectorAll("div.grid-item");
    clearGrid.forEach((item) =>{
        item.parentElement.removeChild(item);
    });

    for(let i=0; i<gridItemsTotal; i++){
        gridItem = document.createElement("div");
        gridItem.className="grid-item";
        gridItem.style.height = `${100/gridSize}%`;
        gridItem.style.width = `${100/gridSize}%`;
        grid.appendChild(gridItem);
    }
    mainWrapper.appendChild(grid);

    gridItems = document.querySelectorAll("div.grid-item");
    gridItemColorChange();
    
});

gridItemColorChange();
