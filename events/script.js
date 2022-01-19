const displayedWrapper = document.querySelector('.displayedsquare-wrapper');
const _initTime = Date.now()

function getElapsedTime() {
    return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}

const createNewSquare = (color) => {
    const newSquare = document.createElement('div');
    newSquare.classList.add('displayedsquare', color);
    displayedWrapper.appendChild(newSquare);
}

function clickOnSquare(event) {
    const color = (event.target.classList[1]);
    const timeStamp = getElapsedTime();
    console.log(color);
    console.log(timeStamp);

    createNewSquare(color);
}


const actionsquares = document.querySelectorAll('.actionsquare')
for (let actionsquare of actionsquares) {
    actionsquare.addEventListener('click', clickOnSquare)
}