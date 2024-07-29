// Tests
import calculateWaterIntake from "./calculatorFunctions.js";

describe('Calorie Burn Calculator', () => {
    test('should return 0 for negative weight', () => {
        const testMet = 9;
        const testWeight = -5;
        const testMinutes = 10;

        expect(totalCaloriesBurned(testMet, testWeight, testMinutes)).toBe(0);
    });
});
