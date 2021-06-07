//Lets go back to our naughts and crosses board
//Write an if statement that checks for all possible conditions of winning, whether it’s across in one of the rows or columns, or diagonally.

let grid =[
    ['x','o','x'],
    ['x','o','x'],
    ['o','x','o'],
];

if ((grid[0][0] == "x" && grid[0][1] == "x" && grid[0][2] == "x") || (grid[0][0] == "o" && grid[0][1] == "o" && grid[0][2] == "o")){
    console.log("WINNER WINNER!");
    }
else {console.log("Sorry, you lose!")};

if ((grid[1][0] == "x" && grid[1][1] == "x" && grid[1][2] == "x") || (grid[1][0] == "o" && grid[1][1] == "o" && grid[1][2] == "o")){
        console.log("WINNER WINNER!");
    }
    else {console.log("Sorry, you lose!")};

if ((grid[2][0] == "x" && grid[2][1] == "x" && grid[2][2] == "x") || (grid[2][0] == "o" && grid[2][1] == "o" && grid[2][2] == "o")){
        console.log("WINNER WINNER!");
    }
else {console.log("Sorry, you lose!")};