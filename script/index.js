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


