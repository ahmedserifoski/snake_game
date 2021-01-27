const button = document.querySelector("#start")
const scoreDisplay = document.querySelector("#score")
const grid = document.querySelector(".grid")

const squares = []
let direction = 1
let currentSnake = [2, 1, 0]
let appleIndex = 0
let score = 0
let speed = 500
let timerId = 0

const createGrid = () => {
    // let divs = document.createElement("div")


    for(let i = 0; i < 100; i++) {

        const square = document.createElement("div")

        grid.appendChild(square)

        square.classList.add("square")

        squares.push(square)     

    }    
}
createGrid()

currentSnake.forEach(index => squares[index].classList.add("snake"))

const startGame = () => {
    //remove snake
    currentSnake.forEach(index => squares[index].classList.remove("snake"))
    //remove apple
    squares[appleIndex].classList.remove("apple")

    clearInterval(timerId)
    currentSnake = [2, 1, 0]
    score = 0
    //re add new score to browser
    score = 0
    //display score
    scoreDisplay.textContent = score
    direction = 1
    speed = 500
    generateApples()
    //re add the class of snake to our new current snake
    currentSnake.forEach(index => squares[index].classList.add("snake"))
    timerId = setInterval(move, speed)
}

const move = () => {
     let head = currentSnake[0]

     if(
         (head + 10 >= 100 && direction === 10) ||//snake has hit bottom
         ((head % 10 === 9) && (direction === 1) ) ||//snake has hit right wall
         (head % 10 === 0 && direction === -1) ||//snake has hit left wall
         ((head -10 < 0) && (direction == -10)) ||//snake has hit top wall
         squares[head + direction].classList.contains("snake")
     ) {
         return clearInterval(timerId)
     }
    
     

    //remove last element from our currentSnake array
    const tail = currentSnake.pop()
    //remove styling from last element
    squares[tail].classList.remove("snake")
    //add square in direction we are heading
    currentSnake.unshift(currentSnake[0] + direction)
     
    if( squares[currentSnake[0]].classList.contains("apple")) {
        //remove apple class
        squares[currentSnake[0]].classList.remove("apple")
        //grow snake by adding class snake
        squares[tail].classList.add("snake")
        //grow snake array
        currentSnake.push(tail)
        //generate neew apple
        generateApples()
        //add one to the score
        score++ 
        //display score
        scoreDisplay.textContent = score
        //speed up snake
        clearInterval(timerId)
        speed -= 10
        timerId = setInterval(move, speed)
        
    }

    squares[currentSnake[0]].classList.add("snake")

}



const generateApples = () => {
    do {
        appleIndex = Math.floor(Math.random() * 100)
    } while (squares[appleIndex].classList.contains("snake"))
    squares[appleIndex].classList.add("apple")
    console.log(currentSnake[0])
    console.log(appleIndex)
}
generateApples()
 
// 37 left arrow
// 38 up arrow
// 39 right arrow
// 40 down arrow

const control = (event) => {

    if(event.keyCode === 37 && direction !== -1) {
        direction = -1
    } else if ((event.keyCode === 38)) {
        if(direction = -10) {
            direction = -10
        }
    } else if (event.keyCode === 39) {
        if(direction = 1) {
            direction = 1
        }
        
    } else if(event.keyCode === 40) {
        if(direction = 10) {
            direction = 10
        }
        
    }

}

document.addEventListener("keyup", control)

button.addEventListener("click", startGame)