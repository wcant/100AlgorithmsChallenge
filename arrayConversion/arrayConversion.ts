export function arrayConversion(inputArray: number[]): number {
    let n = 0;
    while (inputArray.length !== 1) {
        let newArray = [];
        if (n % 2 === 0) {
            while (inputArray.length !== 0) {
                let el1 = inputArray.shift();
                let el2 = inputArray.shift();
                newArray.push(el1 + el2);
            }

        } else {
            while (inputArray.length !== 0) {
                let el1 = inputArray.shift();
                let el2 = inputArray.shift();
                newArray.push(el1 * el2);
            }

        }
        inputArray = [...newArray];
        n++;
    }
    return inputArray[0];
}

// console.log(arrayConversion([1, 2, 3, 4, 5, 6, 7, 8]));
