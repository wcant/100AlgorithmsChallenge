export function bishopAndPawn(bishop: string, pawn: string): boolean {
    const xCoords = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    const yCoords = ['1', '2', '3', '4', '5', '6', '7', '8'];

    const bishopX = bishop[0];
    const bishopXInd = xCoords.indexOf(bishopX);
    const bishopY = parseInt(bishop[1]);
    const bishopYInd = bishopY-1;
    // get max possible moves 
    // diagonal move is always (x +/- 1) and (y +/- 1), so the max # of moves
    // is the smallest number of x or y moves that hit the boundary of the board
    // in either direction across the board

    let yPossible = [];
    let xPossible = [];

    if (bishopYInd > bishopXInd) {
        //const xOffset = bishopY - bishopXInd;

        //yCoords.length-bishopY
        // console.log(yCoords.length-bishopY);
        // console.log(bishopXInd+1);
        xPossible = [...xCoords.slice(0,bishopXInd), ...xCoords.slice(bishopXInd+1,yCoords.length-bishopY+bishopXInd+1)];
        yPossible = [...yCoords.slice(bishopXInd,bishopY),...yCoords.slice(bishopY+1)];

        // along the main diagonal
    } else if (bishopYInd === bishopXInd) {
        const xCopy = [...xCoords];
        const yCopy = [...yCoords];
        xCopy.splice(bishopXInd,1);
        yCopy.splice(bishopYInd,1);

        xPossible = [...xCopy];
        yPossible = [...yCopy];
        
    } else {
        xPossible = [...xCoords.slice(bishopXInd-bishopYInd), ...xCoords.slice(bishopXInd+1)];
        yPossible = [...yCoords.slice(0,bishopYInd), ...yCoords.slice(bishopYInd+1, bishopYInd+xCoords.length-1-bishopXInd)];
        
        console.log(xPossible, yPossible);
    }


    //console.log(bishopX, bishopY);

    // xPossible.splice(xCoords.indexOf(bishopX), 1);
    // yPossible.splice(yCoords.indexOf(bishopY), 1);
    // console.log(xPossible, yPossible);
    //console.log(parseInt(bishop[0], 18));


}

// console.log(bishopAndPawn('a1', 'c3'));