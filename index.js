window.onload = () => {
    const button = document.querySelector("#btn");
    button.addEventListener("click", calculateBmi)
}

function calculateBmi(){
    const Height = document.querySelector("#Height").value;
    const weight = document.querySelector("#weight").value;
    const Result = document.querySelector("#Result");

    if(!Height || isNaN(Height) || Height< 0){
        Result.innerText = "please provide a  valid Height";
        return;
    } else if (!weight|| isNaN(weight) || weight < 0){
        Result.innerText = "please provide a valid weight";
        return;
    }

    const Bmi = (weight / ((Height * Height) /10000)).toFixed(2);

    if(Bmi < 18.5) {
        Result.innerText = "under weight:" + Bmi;
        return;
    } else if (Bmi >= 18.5 && Bmi < 24.9) {
        Result.innerText = "Normal:"   + Bmi;
        return;
    } else if (Bmi >= 25 && Bmi < 29.9) {
       Result.innerText = "overweight:"  + Bmi;
       return;
    }else if (Bmi >= 30 && Bmi < 34.9) {
        Result.innerText = "Obesity (class 1):" + Bmi;
        return;
    } else if (Bmi >= 35.5 && Bmi < 39.9) {
        Result.innerText = "Obesity class 2:"  + Bmi;
        return;
    } else { Result.innerText = "Extreme Obesity:" + Bmi;
        return;
    }
        
 }