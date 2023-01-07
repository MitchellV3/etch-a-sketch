const boxContainer = document.querySelector(".box-container");

//const rowContainer = document.createElement("div");
//rowContainer.classList.add("row-container");
//boxContainer.appendChild(rowContainer);

let rowArray = [];

numberOfRows = () => {
    for (let i = 0; i < 16; i++) {
        const rowContainer = document.createElement("div");
        rowContainer.classList.add("row-container");
        boxContainer.appendChild(rowContainer);
        rowArray.push(rowContainer);
        }
}
numberOfRows();
for (let i = 0; i < rowArray.length; i++) {
    for (let i = 0; i < rowArray.length; i++) {
        rowBox = document.createElement("div");
        rowBox.classList.add("row-box");
        let currentRow = rowArray[i]; 
        currentRow.appendChild(rowBox);
    }
}

let box = document.querySelectorAll('.row-box');

box.forEach(function(box){
        box.addEventListener('mouseenter', (e) =>{
            box.style.backgroundColor = "rgb(12, 12, 12)";
        })
})

