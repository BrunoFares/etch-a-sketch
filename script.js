const container = document.querySelector('#container');
const button = document.querySelector('button');
let size;

button.addEventListener('click', start);

function start() {
    erasePad();
    size = +prompt("Choose the size of the pad you'd like to create:");
    createPad();
    colorPad();
}

function createPad() {
    for(let i = 0; i < size; i++) {
        const outerDiv = document.createElement('div');
        container.appendChild(outerDiv).setAttribute('class', `row`);

        for(let j = 0; j < size; j++) {
            const innerDiv = document.createElement('div');
            outerDiv.appendChild(innerDiv);
        }
    }
}

function colorPad() {
    const individualDiv = document.querySelectorAll('div.row div');

    for(let i = 0; i < size**2; i++) {
        individualDiv[i].addEventListener('mouseover', function() {
            individualDiv[i].style.cssText = "background-color: rgb(200, 0, 0);";
        });
    }
}

function erasePad() {
    for(let i = 0; i < size; i++) {
        container.removeChild(container.firstElementChild);
    }
}