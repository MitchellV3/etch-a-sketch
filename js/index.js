const boxContainer = document.querySelector(".box-container");
const rowArray = [];

fillRows = (size) => {

    for (let i = 0; i < rowArray.length; i++) {
        for (let i = 0; i < size; i++) {
            rowBox = document.createElement("div");
            rowBox.classList.add("row-box");
            let currentRow = rowArray[i]; 
            currentRow.appendChild(rowBox);
        }
    }

} 

createRows = (size = 16) => {

    for (let i = 0; i < size; i++) {
        const rowContainer = document.createElement("div");
        rowContainer.classList.add("row-container");
        boxContainer.appendChild(rowContainer);
        rowArray.push(rowContainer);
        }
    fillRows(size);

}

createRows();

const box = document.getElementsByClassName('row-box');
const reset = document.querySelector('.reset-btn');
const size = document.querySelector('.size-btn');

for (let i = 0; i < box.length; i++) {
    box[i].addEventListener('mouseenter', (e) =>{
        box[i].style.backgroundColor = "rgb(12, 12, 12)";
    })
    reset.addEventListener('click', (e) => {
        box[i].style.backgroundColor = "";
    })
}

size.addEventListener('click', (e) => {
    const size = prompt("Enter the desired number of boxes (maximum 100)");
      
    if (size > 100 || size < 1) {
        return "Value out of bounds";
    } else if (isNaN(size)) {
        return "Value is not a number";
    } else {
        rowArray.length = 0;
        boxContainer.innerHTML = "";
        createRows(size );
        for (let i = 0; i < box.length; i++) {
            box[i].addEventListener('mouseenter', (e) =>{
                box[i].style.backgroundColor = "rgb(12, 12, 12)";
            })
            reset.addEventListener('click', (e) => {
                box[i].style.backgroundColor = "";
            })
    }
    }  
})




