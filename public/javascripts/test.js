// Tests
import calculateWaterIntake from "./calculatorFunctions.js";

describe('Water Intake App', () => {
    test('should return 0 for negative weight', () => {
        const testWeight = -5;
        const testClimate = "hot";
        const testSex = "male";

        expect(calculateWaterIntake(testWeight, testClimate, testSex)).toBe(0);
    });

    test('should return 0 for invalid climate', () => {
        const testWeight = 50;
        const testClimate = "freezing brr 🥶";
        const testSex = "female";

        expect(calculateWaterIntake(testWeight, testClimate, testSex)).toBe(0);
    });

    test('should return 0 for invalid sex', () => {
        const testWeight = 70;
        const testClimate = "cold";
        const testSex = "Bob";

        expect(calculateWaterIntake(testWeight, testClimate, testSex)).toBe(0);
    });

    test('should return 0 for invalid weight', () => {
        const testWeight = "abcdefg!";
        const testClimate = "mild";
        const testSex = "female";

        expect(calculateWaterIntake(testWeight, testClimate, testSex)).toBe(0);
    });

    test('should return 2015 ml', () => {
        const testWeight = 55;
        const testClimate = "cold";
        const testSex = "male";

        expect(calculateWaterIntake(testWeight, testClimate, testSex)).toBe(2015);
    });

    test('should return  0 for invalid weight, climate and sex', () => {
        const testWeight = -3;
        const testClimate = "windy 🍃";
        const testSex = "donald trump";

        expect(calculateWaterIntake(testWeight, testClimate, testSex)).toBe(0);
    });
});
