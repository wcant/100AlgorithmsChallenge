export function arrayMaxConsecutiveSum(inputArray: number[], k: number): number {
    let sums = inputArray.reduce((acc, cv, index, array) => {
        let total = 0;
        for (let i = 0; i < k; i++) total += array[index + i];
        if (!isNaN(total)) acc.push(total);
        return acc;
    }, []);

    console.log(sums);
    return Math.max(...sums);
}

// console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 2));