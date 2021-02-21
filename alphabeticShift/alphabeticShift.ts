import { createNoSubstitutionTemplateLiteral } from "typescript";

export function alphabeticShift(inputString: string): string {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let strArray = inputString.split('');

    let shiftedArray = strArray.reduce((result, char) => {
        const alphaIndex = alphabet.indexOf(char);
        if (char === 'z') {
            result.push('a');
        } else {
            result.push(alphabet[alphaIndex + 1]);
        }
        return result;
    }, [])

    return shiftedArray.join('');

}

console.log(alphabeticShift('crazy'));


/*

**Example**

For inputString = "crazy", the output should be
alphabeticShift(inputString) = "dsbaz".

**Hints**

-   split()
-   indexOf()
-   join()

*/