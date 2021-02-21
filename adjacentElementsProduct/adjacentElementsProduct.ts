export function adjacentElementsProduct(inputArray: number[]): number {
    let products = inputArray.reduce((acc, cv, index, array) => {
        if (index !== array.length - 1) {
            acc.push(cv * array[index + 1])
        }
        return acc;
    }, []);

    const maxProduct = Math.max(...products);

    return maxProduct;
}

//console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));