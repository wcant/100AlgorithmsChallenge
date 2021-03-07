import { arrayChange } from './arrayChange';

describe(arrayChange.name, () => {
    it('Test 1', () => {
        // arrange
        const data = [1, 1, 1];

        // act
        const response = arrayChange(data);

        // assert
        console.log(response);
        expect(response).toBe(3);
    });

    it('Test 2', () => {
        // arrange
        const data = [4, 1, 3];

        // act
        const response = arrayChange(data);

        // assert
        console.log(response);
        expect(response).toBe(7);
    });

    it('Test 3', () => {
        // arrange
        const data = [41, 51, 3];

        // act
        const response = arrayChange(data);

        // assert
        expect(response).toBe(49);
    });

    it('Test 4', () => {
        // arrange
        const data = [4, 1, 10];

        // act
        const response = arrayChange(data);

        // assert
        expect(response).toBe(4);
    });

    it('Test 5', () => {
        // arrange
        const data = [3, 2, 1];

        // act
        const response = arrayChange(data);

        // assert
        expect(response).toBe(6);
    });
});
