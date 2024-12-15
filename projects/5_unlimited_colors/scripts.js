//generate a random color
const randomColor = () => {
    const hex = "0123456789ABCDEF";
    let color = '#';
    for (let i = 0; i < 6; i++) {
        const index = Math.floor(Math.random()*16);
        color += hex[index];        
    }
    // console.log(color);
    return color;
};

let intervalId;

const startChangingColor = () => {
    
    //if intervalId is null, then only assign
    if(!intervalId) {
        intervalId = setInterval(changeBgColor, 1000);
    }
    function changeBgColor() {
        document.body.style.backgroundColor = randomColor();
    }
};

const stopChangingColor = () => {
    clearInterval(intervalId);
    // flush out intervalId
    intervalId = null;
};

document.querySelector('#start').addEventListener('click', startChangingColor);

document.querySelector('#stop').addEventListener('click', stopChangingColor);