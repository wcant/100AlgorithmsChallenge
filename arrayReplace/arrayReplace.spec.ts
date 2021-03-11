import { arrayReplace } from './arrayReplace';

describe(arrayReplace.name, () => {
    it('Test 1', () => {
        // arrange
        const data = [3, 5, 3, 4, 5];
        const elementToReplace = 3;
        const substitutionElement = 1;

        // act
        const response = arrayReplace(data, elementToReplace, substitutionElement);

        // assert
        expect(response).toEqual([1, 5, 1, 4, 5]);
    });
});
