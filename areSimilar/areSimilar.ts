export function areSimilar(a: number[], b: number[]): boolean {
    let aStr = a.join('');
    let bStr = b.join('');

    let newBStr = bStr;

    for (let i = 0; i < a.length; i++) {
        if (aStr[i] != bStr[i]) {
            newBStr = newBStr.replace(aStr[i], bStr[i]);
            newBStr = newBStr.replace(bStr[i], aStr[i]);
            return aStr === newBStr;
        } else return true;
    }

}

// console.log(areSimilar([1, 2, 3], [1, 2, 3]));
// console.log(areSimilar([1, 2, 3], [2, 1, 3]));
// console.log(areSimilar([1, 2, 2], [2, 1, 1]));
