import { alphabetSubSequence } from './alphabetSubSequence';

describe(alphabetSubSequence.name, () => {
    it('Test 1', () => {
        // arrange
        const data = 'effg';

        // act
        const response = alphabetSubSequence(data);

        // assert
        expect(response).toBe(false);
    });

    it('Test 2', () => {
        // arrange
        const data = 'ace';

        // act
        const response = alphabetSubSequence(data);

        // assert
        expect(response).toBe(true);
    });
});
