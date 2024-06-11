document
  .getElementById("convertButton")
  .addEventListener("click", convertTemperature);

function convertTemperature() {
  const temperature = parseFloat(
    document.getElementById("temperatureInput").value
  );
  const inputUnit = document.getElementById("inputUnit").value;
  const outputUnit = document.getElementById("outputUnit").value;
  const resultDiv = document.getElementById("result");

  if (isNaN(temperature)) {
    resultDiv.textContent = "Please enter a valid number.";
    return;
  }

  let convertedTemperature;

  if (inputUnit === outputUnit) {
    convertedTemperature = temperature;
  } else {
    switch (inputUnit) {
      case "Celsius":
        if (outputUnit === "Fahrenheit") {
          convertedTemperature = (temperature * 9) / 5 + 32;
        } else if (outputUnit === "Kelvin") {
          convertedTemperature = temperature + 273.15;
        }
        break;
      case "Fahrenheit":
        if (outputUnit === "Celsius") {
          convertedTemperature = ((temperature - 32) * 5) / 9;
        } else if (outputUnit === "Kelvin") {
          convertedTemperature = ((temperature - 32) * 5) / 9 + 273.15;
        }
        break;
      case "Kelvin":
        if (outputUnit === "Celsius") {
          convertedTemperature = temperature - 273.15;
        } else if (outputUnit === "Fahrenheit") {
          convertedTemperature = ((temperature - 273.15) * 9) / 5 + 32;
        }
        break;
      default:
        convertedTemperature = "Invalid unit.";
    }
  }

  resultDiv.textContent = `Converted Temperature: ${convertedTemperature} ${outputUnit}`;
}
