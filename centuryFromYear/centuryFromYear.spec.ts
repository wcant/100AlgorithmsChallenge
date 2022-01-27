import { centuryFromYear } from './centuryFromYear';

describe(centuryFromYear.name, () => {
    it('Test 1', () => {
        // arrange
        const data = 1905;

        // act
        const response = centuryFromYear(data);

        // assert
        expect(response).toBe(20);
    });

    it('Test 2', () => {
        // arrange
        const data = 1700;

        // act
        const response = centuryFromYear(data);

        // assert
        expect(response).toBe(17);
    });

    it('Test 3', () => {
        // arrange
        const data = 200;

        // act
        const response = centuryFromYear(data);

        // assert
        expect(response).toBe(2);
    });

    it('Test 4', () => {
        // arrange
        const data = 155;

        // act
        const response = centuryFromYear(data);

        // assert
        expect(response).toBe(2);
    });
});
