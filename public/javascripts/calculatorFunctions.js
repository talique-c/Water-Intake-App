export function calculateWaterIntake(weight, climate, sex) {
    let waterIntake = weight * 30;

    if (climate === 'hot') {
        waterIntake += 500; 
    } else if (climate === 'mild') {
        waterIntake += 250; 
    }

    if (sex === 'male') {
        waterIntake += 500; 
    }

}