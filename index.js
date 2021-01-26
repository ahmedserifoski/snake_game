const button = document.querySelector("#start")
const score = document.querySelector("#score")
const grid = document.querySelector(".grid")

const squares = []

let direction = 1

let currentSnake = [2, 1, 0]

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

const move = () => {
     let head = currentSnake[0]

     if(
         (head + 10 >= 100 && direction === 10) ||//snake has hit bottom
         ((head % 10 === 9) && (direction === 1) ) ||//snake has hit right wall
         (head % 10 === 0 && direction === -1) ||//snake has hit left wall
         ((head -10 < 0) && (direction == -10)) ||//snake has hit top wall
         squares[head + direction].classList.contains("snake")
     ) {
         clearInterval(timerId)
     }

    
    const tail = currentSnake.pop()
    squares[tail].classList.remove("snake")

    currentSnake.unshift(currentSnake[0] + direction)
    squares[currentSnake[0]].classList.add("snake")

}

const timerId = setInterval(move, 100)

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

document.addEventListener("keydown", control)