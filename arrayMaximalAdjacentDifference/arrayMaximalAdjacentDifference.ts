export function arrayMaximalAdjacentDifference(inputArray: number[]): number {
    let diffs = inputArray.reduce((acc, cv, index, array) => {

        let diff = Math.abs(cv - array[index + 1]);

        if (!isNaN(diff)) acc.push(diff);
        return acc;
    }, []);

    return Math.max(...diffs);
}

// console.log(arrayMaximalAdjacentDifference([2, 4, 1, 0]));