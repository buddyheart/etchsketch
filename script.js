const container = document.querySelector('#container');
const resize = document.querySelector('#resize-btn');


//create a new div to hold 16 square elements and loop back and create another new div
//within container to hold another 16 square elements 
function createSquare(squareSize){
    const square = document.createElement('div');
    const lastRow = container.lastElementChild;
    square.classList.add("square");

    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;    

    //attach hover event
    square.addEventListener('mouseenter', function(event){
        event.target.style.backgroundColor = genColor();

        setTimeout(function(){
            square.style.backgroundColor = 'white';
        }, 700);
    })

    lastRow.appendChild(square);
}

function genColor(){
    let num = Math.floor(Math.random() * 7);
    let color = ''
    switch(num){
        case (0):
            color = '#FF0000'
            break;
        case (1):
            color = '#FFA500'
            break;
        case (2):
            color = '#FFFF00'
            break;
        case (3):
            color = '#008000'
            break;
        case (4):
            color = '#0000FF'
            break;
        case (5):
            color = '#4B0082'
            break;
        case (6):
            color = '#EE82EE'
            break;    

    }
    return color
}

function genColumn(i){
    const newDiv = document.createElement('div');
    newDiv.classList.add('column');
    newDiv.classList.add(`column-${i}`);
    container.appendChild(newDiv);
}

function generateGrid(size = 16){
    const squareSize = 960/size;
    for(let i = 0; i < size; i++){
        genColumn(i);
        for(let j = 0; j < size; j++){
            createSquare(squareSize);
        }
    }
}

generateGrid();

//event handler for user button click and changing size 
resize.addEventListener('click', function(e){
    aNumber = parseInt(prompt('How big would you like the size of the grid to be?: '));

    if (!Number.isInteger(aNumber)){
        alert('Please enter an integer 1-100. ');
    }
    else if (aNumber > 100){
        alert('Too big! Please enter a number 1-100.');
    }
    else{
        container.innerHTML = '';
        container.appendChild(resize);
        generateGrid(aNumber);
    }
})




/**
 * need a function to create a square element thats a 'div'
 * need to loop through and create a 16x16 square using the function 
 * after looping through and creating the squares need to use 
 * flexbok to make sure that the squares are all touching each other 
 */

/**
 * work on css of the square first
 * then work on creating 16x16 of them
 */