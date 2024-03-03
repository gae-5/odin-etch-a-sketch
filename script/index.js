const mainWrapper = document.querySelector("div.main-container");
const grid = document.createElement("div");
grid.className ='grid';

// create 16 grid items.
let gridItem;
for(let i=0; i<256; i++){
    gridItem = document.createElement("div");
    gridItem.className="grid-item";
    grid.appendChild(gridItem);
}
mainWrapper.appendChild(grid);

function random(number){
    return Math.floor(Math.random()*number);
}

function changeColor(){
    const randColor = `rgb(${random(255)},${random(255)},${random(255)}`;
    return randColor;
}


const gridItems = document.querySelectorAll("div.grid-item");
gridItems.forEach((gridI)=>{    
    gridI.addEventListener("mouseover",(e)=>{        
        e.target.style.backgroundColor = changeColor();    
    });
});

