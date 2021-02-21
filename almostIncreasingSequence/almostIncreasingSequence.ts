export function almostIncreasingSequence(sequence: number[]): boolean {

    let count = 0;

    sequence.forEach((value, index, array) => {

        if (value >= array[index + 1]) {
            count++;
            if (array[index - 1] >= array[index + 1]) {
                return false;
            }
        }

    });

    return count <= 1;
}

// console.log(almostIncreasingSequence([1, 3, 2, 1])) 
// console.log(almostIncreasingSequence([1, 3, 2])) 