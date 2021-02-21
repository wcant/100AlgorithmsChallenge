export function addBorder(picture: string[]): string[] {

    const borderLength = picture[0].length + 2;
    let border = '';

    for (let i = 1; i <= borderLength; i++) {
        border += '*';
    }

    let newPic = picture.map(str => {
        str = "*" + str + "*";
        return str;
    });

    return [border, ...newPic, border];
}

// console.log(addBorder(["abc", "ded"]));