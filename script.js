let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let copyDiv = document.querySelector(".text p");
let copyBtn = document.querySelector(".copy");
let rgb1 = "#004D7A";
let rgb2 = "#A8EB12";





const hexValue = () => {
    let hexValue = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color = color + (hexValue[Math.floor(Math.random() * 16)]);
    }
    return color;
}

const handlebtn1 = () => {
    rgb1 = hexValue();
    console.log(rgb1);
    btn1.innerText = `${rgb1}`
    document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1} , ${rgb2}`;
    copyDiv.innerHTML = `background-image: linear-gradient(to right, ${rgb1} , ${rgb2})`;

    btn1.style.boxShadow = "inset 10px 7px 10px black"
    setTimeout(() => {
        btn1.style.boxShadow = "10px 7px 10px black"
    }, 150);
};
const handlebtn2 = () => {
    rgb2 = hexValue();
    console.log(rgb2);
    btn2.innerText = `${rgb2}`
    document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1} , ${rgb2}`;
    copyDiv.innerHTML = `background-image: linear-gradient(to right, ${rgb1} , ${rgb2})`;

    btn2.style.boxShadow = "inset 10px 7px 10px black"
    setTimeout(() => {
        btn2.style.boxShadow = "10px 7px 10px black"
    }, 150);
};


const copyToClipboard = () => {
    let textToCopy = copyDiv.textContent;
    navigator.clipboard.writeText(textToCopy).then(() => {
        alert("Copied to clipboard");
    }).catch(err => {
        console.error("Failed to copy text: ", err);
    });
};


btn1.addEventListener("click", handlebtn1);
btn2.addEventListener("click", handlebtn2);
copyBtn.addEventListener("click", copyToClipboard);