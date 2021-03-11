export function bishopAndPawn(bishop: string, pawn: string): boolean {
    const xCoords = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    const yCoords = ['1', '2', '3', '4', '5', '6', '7', '8'];

    const xPossible = [...xCoords];
    const yPossible = [...yCoords];

    const bishopX = bishop[0];
    const bishopY = bishop[1];

    xPossible.splice(xCoords.indexOf(bishopX), 1);
    yPossible.splice(yCoords.indexOf(bishopY), 1);
    console.log(xPossible, yPossible);
    //console.log(parseInt(bishop[0], 18));


}

// console.log(bishopAndPawn('a1', 'c3'));