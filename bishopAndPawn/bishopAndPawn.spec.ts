import { bishopAndPawn } from './bishopPawn2';

describe(bishopAndPawn.name, () => {
    xit('Test 1', () => {
        // arrange
        const position1 = 'a1';
        const position2 = 'c3';

        // act
        const response = bishopAndPawn(position1, position2);

        // assert
        expect(response).toBe(true);
    });

    xit('Test 2', () => {
        // arrange
        const position1 = 'c4';
        const position2 = 'c3';

        // act
        const response = bishopAndPawn(position1, position2);

        // assert
        expect(response).toBe(true);
    });

    it('Test 3', () => {
        // arrange
        const position1 = 'g2';
        const position2 = 'c3';

        // act
        const response = bishopAndPawn(position1, position2);

        // assert
        expect(response).toBe(true);
    });
});
