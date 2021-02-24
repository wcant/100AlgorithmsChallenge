export function areEquallyStrong(yourLeft: number, yourRight: number, friendsLeft: number, friendsRight: number): boolean {
    let yourTotal = yourRight + yourLeft;
    let friendsTotal = friendsRight + friendsLeft;

    return yourTotal === friendsTotal ? true : false;
}

// console.log(areEquallyStrong(10, 15, 15, 10))
// console.log(areEquallyStrong(15, 10, 15, 10))
// console.log(areEquallyStrong(15, 10, 15, 9))
