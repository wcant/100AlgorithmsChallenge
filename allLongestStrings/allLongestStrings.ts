export function allLongestStrings(inputArray: string[]): string[] {

    const lengths = inputArray.reduce((acc, cv) => {
        acc.push(cv.length);
        return acc;
    }, []);

    const longestLength = Math.max(...lengths);

    return inputArray.filter(str => str.length === longestLength);
}

//console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));