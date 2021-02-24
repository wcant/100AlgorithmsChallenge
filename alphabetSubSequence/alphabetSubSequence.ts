export function alphabetSubSequence(s: string): boolean {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let flag = true;

    s.split('').reduce((acc, cv) => {
        if (acc >= cv.charCodeAt(0)) flag = false;
        return cv.charCodeAt(0);;
    }, 0);

    return flag;

}

/* console.log(alphabetSubsequence('zab'))
console.log(alphabetSubsequence('effg'))
console.log(alphabetSubsequence('cdce'))
console.log(alphabetSubsequence('ace'))
console.log(alphabetSubsequence('bxz'))
*/
