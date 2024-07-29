// document.addEventListener('DOMContentLoaded', function () {
const waterIntakeButton = document.getElementById("waterIntakeButton");
waterIntakeButton.addEventListener("click", function () {
    // VARIABLES
    let weight = parseFloat(document.getElementById("weightInput").value);
    const climate = document.getElementById("climateLevel").value;
    const sex = document.querySelector('input[name="maleOrFemale"]:checked').value;
    const resultText = document.querySelector("h2");

    const weightValidation = document.getElementById("weightValidation");

    if (isNaN(weight) || weight <= 0 || weight > 300) {
        weightValidation.style.color = "red";
        weightValidation.textContent = "Please enter a valid weight.";
        weight = 0;
    } else {
        weightValidation.textContent = "";
    }

    let waterIntake = weight * 30;

    if (climate === "hot") {
        waterIntake += 500;
    } else if (climate === "mild") {
        waterIntake += 250;
    }

    if (sex === "male") {
        waterIntake += 500;
    }

    resultText.innerHTML = `Your recommended daily water intake is approximately ${waterIntake.toFixed(1)} ml.`;
});
