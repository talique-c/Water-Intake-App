// Calculate water intake
export function calculateWaterIntake(weight, climate, sex) {
    if (isNaN(weight) || weight <= 0 || climate <= 0 || sex <= 0) {
        return 0;
    }

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
            return 0;
    }

    switch (sex) {
        case 'male':
            waterIntake += 240;
            break;
        case 'female':
            waterIntake += 0;
            break;
            default:
                return 0;
    }
    return Number(waterIntake);
}
export default calculateWaterIntake;