/*

**Hint**
-   split()
-   parseInt()
-   toString()
-   reduce()

**Input/Output**

- **[execution time limit] 4 seconds (js)**
- **[input] integer n**

    A positive two-digit integer.

*Guaranteed constraints:*

10 ≤ n ≤ 99.
*/


export function addTwoDigits(n: any): number {
    let digits = n.toString().split('');

    return parseInt(digits[0]) + parseInt(digits[1]);

}

// console.log(addTwoDigits(29));