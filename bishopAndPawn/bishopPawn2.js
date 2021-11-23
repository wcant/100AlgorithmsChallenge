export function bishopAndPawn(bishop: string, pawn: string): boolean {

    const xCoords = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    const yCoords = ['1', '2', '3', '4', '5', '6', '7', '8'];

    const bishopX = bishop[0];
    const bishopXInd = xCoords.indexOf(bishopX);
    const bishopY = parseInt(bishop[1]);
    const bishopYInd = bishopY-1;

    
    if (bishopYInd > bishopXInd) {
        const shiftLeft = 
        const shiftRight
        
    } else if (bishopYInd === bishopXInd) {

    } else {
        // const shiftLeft
        // const shiftRight
    }

}