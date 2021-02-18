export function addBorder(picture: string[]): string[] {

    const borderLen = picture[0].length;
    const border = '';

    for (let i = 1; i <= borderLen; i++) {
        "*".concat(border);
        console.log(i, border);
    }

    let arrWithBorder = [...picture];


    console.log(border);
}

// console.log(addBorder(["abc", "ded"]));