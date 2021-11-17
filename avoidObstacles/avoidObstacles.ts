export function avoidObstacles(inputArray: number[]): number {

    const obstacles = inputArray.sort( (x,y) => x-y);
    const largestValue = Math.max(...obstacles);

    for (let jump=1; jump <= largestValue+1; jump++) {
        if (obstacles.every(o => o % jump !== 0)) {
            return jump;
        }
    }

}

// console.log(avoidObstacles([5, 3, 6, 7, 9]));