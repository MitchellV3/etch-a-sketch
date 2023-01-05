const boxContainer = document.querySelector(".box-container");
const createDiv = document.createElement("div");

const rowContainer = document.createElement("div");
rowContainer.classList.add("row-container");
boxContainer.appendChild(rowContainer);

for (let i = 0; i < 16; i++) {
    rowBox = document.createElement("div");
    rowBox.id = 'b'+i;
    rowBox.classList.add("row-box");
    rowContainer.appendChild(rowBox);
}
