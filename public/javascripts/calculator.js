import calculateWaterIntake from "./calculatorFunctions.js";

// document.addEventListener('DOMContentLoaded', function () {
const waterIntakeButton = document.getElementById("waterIntakeButton");
waterIntakeButton.addEventListener("click", function () {
    // VARIABLES
    let weight = document.getElementById("weightInput").value;
    let climate = document.getElementById("climateLevel").value;
    let sex = document.querySelector('input[name="maleOrFemale"]:checked').value;
    let waterIntake = 0;
    const resultText = document.querySelector("h2");

    const weightValidation = document.getElementById("weightValidation");

    if (isNaN(weight) || weight <= 0 || weight > 300) {
        weightValidation.style.color = "red";
        weightValidation.textContent = "Please enter a valid weight.";
        weight = 0;
    } else {
        weightValidation.textContent = "";
    }

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

    console.log(weight);
    console.log(climate);
    console.log(sex);

    // Call function to calculate water intake
    let totalWaterIntake = calculateWaterIntake(weight, climate, sex);
    console.log(waterIntake);
    resultText.innerHTML = `Your recommended daily water intake is approximately ${totalWaterIntake} ml. or ${(totalWaterIntake / 250).toFixed(0)} cups`;
});
export default { calculateWaterIntake };