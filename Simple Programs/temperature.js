//Degree Celsius to Fahrenheit
//F = (C*9/5) + 32
function temp1(){
  let c = parseFloat(document.getElementById("c").value);
  document.getElementById("res1").innerHTML = "Fahrenheit: " + ((c*9/5)+32).toFixed(2);
}

//Fahrenheit to Degree Celsius
//C = (F-32) * 5/9
function temp2(){
  let f = parseFloat(document.getElementById("f").value);
  document.getElementById("res2").innerHTML = "Celsius: " + ((f-32)*5/9).toFixed(2);
}

//Degree Celsius to Kelvin
//K = C + 273.15
function temp3(){
  let c = parseFloat(document.getElementById("c").value);
  document.getElementById("res3").innerHTML = "Kelvin: " + (c+273.15).toFixed(2);
}

//Kelvin to Degree Celsius
//C = K - 273.15
function temp4(){
  let k = parseFloat(document.getElementById("k").value);
  document.getElementById("res4").innerHTML = "Celsius: " + (k-273.15).toFixed(2);
}

//Kelvin to Fahrenheit
//F = (K-273.15) * 9/5 + 32
function temp5(){
  let k = parseFloat(document.getElementById("k").value);
  document.getElementById("res5").innerHTML = "Fahrenheit: " + ((k-273.15) * 9/5 + 32).toFixed(2);
}

//Fahrenheit to Kelvin
//K = (F-32) * 5/9 + 273.15
function temp6(){
  let f = parseFloat(document.getElementById("f").value);
  document.getElementById("res6").innerHTML = "Kelvin: " + ((f-32) * 5/9 + 273.15).toFixed(2);
}
