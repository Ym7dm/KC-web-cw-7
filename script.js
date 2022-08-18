function BMI(weight, height = 0) {
  let result = weight / (height * height);
  return result;
}
console.log(BMI(64, 1.84));
console.log(BMI());

function Status(bmi) {
  let div = document.getElementById("result");
  if (bmi < 18.5) {
    div.style.color = "orange";
    return "لديك نقص في الوزن";
  } else if (bmi >= 18.5 && bmi < 25) {
    div.style.color = "green";
    return "وزنك صحي";
  } else if (bmi >= 25) {
    div.style.color = "red";
    return "لديك زيادة في الوزن";
  }
}

function calculate() {
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let bmi = BMI(weight, height);
  let desc = Status(bmi);
  let div = document.getElementById("result");
  div.innerText = bmi + " == " + desc;
}
