
window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded(){
    // registers click event for the convert button
    const convertButton = document.getElementById("convertButton");
    convertButton.addEventListener("click", convertButtonClicked);
}

function convertButtonClicked(){
    const cInput = document.getElementById("cInput");
    const fInput = document.getElementById("fInput");
    const errorMessage = document.getElementById("errorMessage");
    const weatherImage = document.getElementById("weatherImage");

    const celsiusValue = cInput.value.trim();
    const fahrenheitValue = fInput.value.trim();


    //checks if celsius has a value and fahrenhet is empty
    if (celsiusValue !== "" && fahrenheitValue == ""){
        const tempC = parseFloat(celsiusValue);

        if (isNaN(tempC)){
            //if the user does not enter a number 
            errorMessage.textContent = celsiusValue + " is not a number";
            weatherImage.src = "";
        } else {
            errorMessage.textContent = "";
            const tempF = convertCtoF(tempC);
            fInput.value = tempF;
            updateWeatherImage(tempF);
        }
    }
    // Checks if fahrenheit has a value and felsius is empty
    else if (fahrenheitValue !== "" && celsiusValue == ""){
        const tempF = parseFloat(fahrenheitValue);

        if (isNaN(tempF)){
            //if user does not enter a number
            errorMessage.textContent = fahrenheitValue + " is not a number";
            weatherImage.src = "";

        } else {
            errorMessage.textContent = "";
            const TempC = convertFtoC(tempF);
            cInput.value = TempC;
            updateWeatherImage(tempF);

        }
    }
}

//conversion functions
// converts celsius to fahrenheit or vice versa
function convertCtoF(degreesCelsius){
    return degreesCelsius * 9 / 5 + 32;
}

function convertFtoC(degreesFahrenheit){
    return (degreesFahrenheit - 32) * 5 / 9;
}

function updateWeatherImage(tempF){
    const weatherImage = document.getElementById("weatherImage");

    if (tempF < 32){
        weatherImage.src = "images/cold.png";
    } else if (tempF >= 32 && tempF <= 50){
        weatherImage.src = "images/cool.png";
    } else {
        weatherImage.src = "images/warm.png";
    }
}