let btn1 = document.getElementById("myBtn1");
let btn2 = document.getElementById("myBtn2");
let copyCode = document.querySelector(".copyCode");
function randomGen() {
    return Math.floor(Math.random() * 16);
}
let hexValue = () => {
    let rgb = "0123456789abcdef"
    let hexCode = "#";
    for (let i = 0; i < 6; i++) {
        hexCode += rgb[randomGen()];
    }
    return hexCode;
}
let hexToRgb = (hex) => {
    hex = hex.replace(/^#/, '');
    if (hex.length === 3) {
        hex = hex.split('').map(char => char + char).join('');
    }
    let bigint = parseInt(hex, 16);
    let r = (bigint >> 16) & 255;
    let g = (bigint >> 8) & 255;
    let b = bigint & 255;
    return `rgb(${r}, ${g}, ${b})`;
}

//? assigning hexcode and rgbcode respectively
let hexCode1 = "#051937";
let rgbCode1 = hexToRgb(hexCode1);

let hexCode2 = "#008793";
let rgbCode2 = hexToRgb(hexCode2);

let handleButton1 = () => {
    hexCode1 = hexValue();
    btn1.textContent = hexCode1;
    rgbCode1 = hexToRgb(hexCode1);
    document.body.style.backgroundImage = `linear-gradient(to right, ${hexCode1},  ${hexCode2})`;
    copyCode.innerHTML = `background-image: linear-gradient(to right, ${rgbCode1}, ${rgbCode2});`
}

let handleButton2 = () => {
    hexCode2 = hexValue();
    btn2.textContent = hexCode2;
    rgbCode2 = hexToRgb(hexCode2);
    document.body.style.backgroundImage = `linear-gradient(to right, ${hexCode1},  ${hexCode2})`;
    copyCode.innerHTML = `background-image: linear-gradient(to right, ${rgbCode1}, ${rgbCode2});`
}

btn1.addEventListener('click', handleButton1);
btn2.addEventListener('click', handleButton2);

//* Now it can copy by just hovering on the div
copyCode.addEventListener('click', ()=>{
    let copyContent = copyCode.textContent;
    navigator.clipboard.writeText(copyContent);
    alert('Colour Code Copied')

})