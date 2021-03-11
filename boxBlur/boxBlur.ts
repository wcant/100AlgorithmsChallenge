export function boxBlur(image: number[][]): number[][] {
    const flatImage = image.flat();
    const result = flatImage.reduce((acc, cv) => acc += cv, 0);
    return [[Math.floor(result / flatImage.length)]];
}

// console.log(boxBlur([[1, 1, 1], 
//     [1, 7, 1], 
//     [1, 1, 1]]));