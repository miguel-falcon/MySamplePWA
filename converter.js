// This file contains the JavaScript logic for the temperature conversion functionality.

document.addEventListener('DOMContentLoaded', function() {
    const inputTemp = document.getElementById('input-temp');
    const inputUnit = document.getElementById('input-unit');
    const outputUnit = document.getElementById('output-unit');
    const outputTemp = document.getElementById('output-temp');

    function convertTemperature() {
        const temp = parseFloat(inputTemp.value);
        const fromUnit = inputUnit.value;
        const toUnit = outputUnit.value;
        let convertedTemp;

        if (isNaN(temp)) {
            outputTemp.value = 'Invalid input';
            return;
        }

        if (fromUnit === 'c') {
            if (toUnit === 'f') {
                convertedTemp = (temp * 9/5) + 32;
            } else if (toUnit === 'k') {
                convertedTemp = temp + 273.15;
            } else {
                convertedTemp = temp;
            }
        } else if (fromUnit === 'f') {
            if (toUnit === 'c') {
                convertedTemp = (temp - 32) * 5/9;
            } else if (toUnit === 'k') {
                convertedTemp = (temp - 32) * 5/9 + 273.15;
            } else {
                convertedTemp = temp;
            }
        } else if (fromUnit === 'k') {
            if (toUnit === 'c') {
                convertedTemp = temp - 273.15;
            } else if (toUnit === 'f') {
                convertedTemp = (temp - 273.15) * 9/5 + 32;
            } else {
                convertedTemp = temp;
            }
        }

        outputTemp.value = `${convertedTemp.toFixed(2)} ${toUnit.toUpperCase()}`;
    }

    inputTemp.addEventListener('input', convertTemperature);
    inputUnit.addEventListener('change', convertTemperature);
    outputUnit.addEventListener('change', convertTemperature);
});