export function arrayChange(inputArray: number[]): number {
    let increasingArray = [];

    for (let i = 0; i < inputArray.length; i++) increasingArray.push(inputArray[0] + i)

    return increasingArray.reduce((acc, cv, i) => {
        acc = acc + Math.abs(cv - inputArray[i]);
        return acc;
    }, 0);
}

// console.log(arrayChange([1, 1, 1]));