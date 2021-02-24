export function alternatingSums(a: number[]): number[] {

    return a.reduce((acc, cv, i) => {

        if (i % 2 === 0) {
            acc[0] += cv;
        } else acc[1] += cv;

        return acc;
    }, [0, 0]);

}

console.log(alternatingSums([50, 60, 60, 45, 70]))