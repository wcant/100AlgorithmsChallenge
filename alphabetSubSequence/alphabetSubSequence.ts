export function alphabetSubSequence(s: string): boolean {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';

    for (let i = 0; i < s.length; i++) {
        console.log(s[i]);
    }
}

/* console.log(alphabetSubsequence('zab'))
console.log(alphabetSubsequence('effg'))
console.log(alphabetSubsequence('cdce'))
console.log(alphabetSubsequence('ace'))
console.log(alphabetSubsequence('bxz'))
*/

/*
Check whether the given string is a subsequence of the plaintext alphabet.

**Example**

- For s = "effg" or s = "cdce", the output should be
alphabetSubsequence(s) = false

- For s = "ace" or s = "bxz", the output should be
alphabetSubsequence(s) = true.

**Hints**
-   size property
-   charCodeAt()
-   split()
*/