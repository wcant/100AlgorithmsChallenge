export function arrayPreviousLess(items: number[]): number[] {
    return items.reduce((acc, cv, index, array) => {
        let prevArray = array.slice(0, index);
        let result = prevArray.reverse().find(el => el < cv);

        result ? acc.push(result) : acc.push(-1);

        return acc;
    }, []);
}

// console.log(arrayPreviousLess([3, 5, 2, 4, 5]));