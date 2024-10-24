
const buttonDuck = document.getElementById('button-duck');
const buttonCrocodile = document.getElementById('button-crocodile');
const buttonCow = document.getElementById('button-cow');
const buttonClear = document.getElementById('button-clear');

const outputParagraph = document.getElementById('output');


buttonDuck.addEventListener('click', () => {
    outputParagraph.innerText += "QUACK!!\r\n";
})

buttonCrocodile.addEventListener('click', () => {
    outputParagraph.innerText += "..............\r\n";
})

buttonCow.addEventListener('click', () => {
    outputParagraph.innerText += "MUUUUUUUHH!!\r\n";
})

buttonClear.addEventListener('click', () => {
    outputParagraph.innerText = "";
})
