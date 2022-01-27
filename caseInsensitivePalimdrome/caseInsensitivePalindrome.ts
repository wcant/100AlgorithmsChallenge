export function isCaseInsensitivePalindrome(inputString: string): boolean {

    const strArr: string[] = inputString.split('').map(char => char.toLowerCase());
    const revStrArr: string[] = [...strArr].reverse();

    const newStr: string = strArr.join('');
    const revNewStr: string = revStrArr.join('');

    // console.log(newStr);
    // console.log(revNewStr);
    return newStr === revNewStr;

}

// console.log(isCaseInsensitivePalindrome('AaBaa'));
// console.log(isCaseInsensitivePalindrome('abac'));