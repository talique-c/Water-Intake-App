document.addEventListener('DOMContentLoaded', function () {
    const waterIntakeButton = document.getElementById('waterIntakeButton');
    waterIntakeButton.addEventListener('click', calculateWaterIntake);

    const weightSwitch = document.getElementById('weightSwitch');
    weightSwitch.addEventListener('change', toggleWeightUnit);
});

function calculateWaterIntake() {
    
    let weight = parseFloat(document.getElementById('weightInput').value);
    const climate = document.getElementById('climateLevel').value;
    const sex = document.querySelector('input[name="maleOrFemale"]:checked').value;
    const resultText = document.querySelector('h2');

    const weightValidation = document.getElementById('weightValidation');

    if (isNaN(weight) || weight <= 0) {
        weightValidation.style.color = "red";
        weightValidation.textContent = "Please enter a valid weight.";
        return;
    } else {
        weightValidation.textContent = "";
    }

    const weightUnit = document.getElementById('weightSwitch').checked;
    if (weightUnit) {
        weight = weight * 0.453592; 
    }

    let waterIntake = weight * 30;

    if (climate === 'hot') {
        waterIntake += 500; 
    } else if (climate === 'mild') {
        waterIntake += 250; 
    }

    if (sex === 'male') {
        waterIntake += 500; 
    }

    resultText.innerHTML = `Your recommended daily water intake is approximately <span class="waterSpan">${waterIntake.toFixed(1)} ml</span>.`;
}

function toggleWeightUnit() {
    const weightInput = document.getElementById('weightInput');
    const unitLabel = document.getElementById('weightUnit');

    if (this.checked) {
        unitLabel.textContent = "lbs";
        weightInput.placeholder = "Enter weight in pounds";
    } else {
        unitLabel.textContent = "kg";
        weightInput.placeholder = "Enter weight in kilograms";
    }
}
