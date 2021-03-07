export function arrayChange(inputArray: number[]): number {
    let movesCount = 0;

    for (let i = 0; i < inputArray.length; i++) {

        if (inputArray[i + 1] <= inputArray[i]) {
            let diff = inputArray[i] - inputArray[i + 1];
            let increment = diff + 1;
            movesCount += increment;
            inputArray[i + 1] += increment;
        }
    }
    return movesCount;

}

// console.log(arrayChange([1, 1, 1]));