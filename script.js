const container = document.querySelector('#container');
const button = document.querySelector('button');
let size;
let oldSize;

button.addEventListener('click', createPad);

function createPad() {
    oldSize = size;
    size = +prompt("Choose the size of the pad you'd like to create:");

    for(let i = 0; i < size; i++) {
        const outerDiv = document.createElement('div');
        container.appendChild(outerDiv).setAttribute('class', `row`);

        for(let j = 0; j < size; j++) {
            const innerDiv = document.createElement('div');
            outerDiv.appendChild(innerDiv);
        }
    }

    const individualDiv = document.querySelectorAll('div.row div');

    for(let i = 0; i < size**2; i++) {
        individualDiv[i].addEventListener('mouseover', function() {
            individualDiv[i].style.cssText = "background-color: rgb(200, 0, 0);";
        });
    }

    erasePad();
}

function erasePad() {
    for(let i = 0; i < oldSize; i++) {
        container.removeChild(container.firstElementChild);
    }
}