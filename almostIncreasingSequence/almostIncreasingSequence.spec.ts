import { almostIncreasingSequence } from './almostIncreasingSequence';

describe(almostIncreasingSequence.name, () => {
    it('Test 1', () => {
        // arrange
        const data = [1, 3, 2, 1];

        // act
        const response = almostIncreasingSequence(data);

        // assert
        expect(response).toBe(false);
    });

    it('Test 2', () => {
        // arrange
        const data = [1, 3, 2];

        // act
        const response = almostIncreasingSequence(data);

        // assert
        expect(response).toBe(true);
    });

    it('Test 3', () => {
        // arrange
        const data = [1, 1, 3, 2, 3, 4];

        // act
        const response = almostIncreasingSequence(data);

        // assert
        expect(response).toBe(false);
    });

    it('Test 4', () => {
        // arrange
        const data = [7, 1, 1, 3, 2, 3, 4];

        // act
        const response = almostIncreasingSequence(data);

        // assert
        expect(response).toBe(false);
    });

    it('Test 5', () => {
        // arrange
        const data = [1, 3, 1, 1];

        // act
        const response = almostIncreasingSequence(data);

        // assert
        expect(response).toBe(false);
    });

    it('Test 6', () => {
        // arrange
        const data = [2, 3, 2, 4, 5];

        // act
        const response = almostIncreasingSequence(data);

        // assert
        expect(response).toBe(true);
    });

    it('Test 7', () => {
        // arrange
        const data = [2, 3, 4, 5, 6, 2];

        // act
        const response = almostIncreasingSequence(data);

        // assert
        expect(response).toBe(true);
    });
});
