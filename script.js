const container = document.querySelector('#container')

for(let i = 0; i < 16; i++) {
    const outerDiv = document.createElement('div');
    container.appendChild(outerDiv).setAttribute('class', 'row');

    for(let j = 0; j < 16; j++) {
        const innerDiv = document.createElement('div');
        outerDiv.appendChild(innerDiv).setAttribute('class', `col${j+1}`);
    }
}