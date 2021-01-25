const button = document.querySelector("#start")
const score = document.querySelector("#score")
const grid = document.querySelector(".grid")

const squares = []

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
    
    const tail = currentSnake.pop()
    squares[tail].classList.remove("snake")

}

move()