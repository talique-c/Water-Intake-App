// Calculate water intake
export function calculateWaterIntake(weight, climate, sex) {
    let waterIntake;
    waterIntake = weight * 30;

    switch (climate) {
        case 'hot':
            waterIntake += 500;
            break;
        case 'mild':
            waterIntake += 250;
            break;
        case 'cold':
            waterIntake += 125;
            break;
        default:
            waterIntake += 0;
            break;
    }

    switch (sex) {
        case 'male':
            waterIntake += 240;
            break;
        case 'female':
            waterIntake += 0;
            break;
            default:
                waterIntake += 0;
                break;
    }
    return Number(waterIntake);
}
export default calculateWaterIntake;