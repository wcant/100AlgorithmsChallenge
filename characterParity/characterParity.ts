
export function characterParity(symbol: string): string {
    const isInt: number = parseInt(symbol);
    if (Number.isNaN(isInt)) return 'not a digit';
    if (isInt%2 !== 0) { 
        return 'odd';
    } else return 'even';
}

// console.log(characterParity('5'))
// console.log(characterParity('8'))
// console.log(characterParity('q'))
