

function calculateBmi() {
    let weight = document.getElementById('weight').value;
    let height= document.getElementById('height').value;

    let bmi = (weight/(height*height)).toFixed(2);

    document.getElementById('heading').innerHTML = "Your BMI is" + " " + bmi;
   
            
    if (bmi <=18.5) {
        document.getElementById('bmiStatus').innerHTML ="Your result suggests that you are <b>underweight.</b>";
    } 
    else if(bmi>18.5 && bmi<=24.9) {
        document.getElementById('bmiStatus').innerHTML ="Your result suggests that you have a <b>normal</b> weight.";
    }
    else if(bmi>25 && bmi<=29.9) {
        document.getElementById('bmiStatus').innerHTML ="Your result suggests that you are <b>overweight.</b>";
    }
    else if(bmi>=30) {
        document.getElementById('bmiStatus').innerHTML ="Your result suggests that you are <b>obese.</b>";
    }
}
// document.getElementById('bmiDisplay').innerHTML = bmi;
