export function checkPalindrome(inputString: string): boolean {
    const revStrArr = inputString.split('').reverse().join('');
    return inputString === revStrArr;
}

console.log(checkPalindrome('aabaa'));
console.log(checkPalindrome('abac'));
console.log(checkPalindrome('a'));
