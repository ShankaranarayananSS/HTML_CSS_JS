//Circumference of Circle  : 2 * Pi * Radius
//Area of Circle           : Pi * Radius * Radius

function circle_area(){
  let r = parseFloat(document.getElementById("rad").value);
  document.getElementById("result_circle").innerHTML = 
  "Area of Circle = " + (3.14*r*r).toFixed(2);
}

function circle_peri(){
  let r = parseFloat(document.getElementById("rad").value);
  document.getElementById("result_circle").innerHTML = 
  "Circumference of Circle = " + (2*3.14*r).toFixed(2);
}

//Perimeter of Rectangle  : Length * Breadth
//Area of Rectangle       : 2 * (Length + Breadth)

function rect_area(){
  let l = parseFloat(document.getElementById("len").value);
  let b = parseFloat(document.getElementById("bre").value);
  document.getElementById("result_rect").innerHTML = 
  "Area of Rectangle = " + (l*b).toFixed(2);
}

function rect_peri(){
  let l = parseFloat(document.getElementById("len").value);
  let b = parseFloat(document.getElementById("bre").value);
  document.getElementById("result_rect").innerHTML = 
  "Perimeter of Rectangle = " + (2*(l+b)).toFixed(2);
}

//Perimeter of Square   : 4 * Side
//Area of Square        : Side * Side

function square_area(){
  let a = parseFloat(document.getElementById("sid").value);
  document.getElementById("result_square").innerHTML = 
  "Area of Square = " + (a*a).toFixed(2);
}

function square_peri(){
  let a = parseFloat(document.getElementById("sid").value);
  document.getElementById("result_square").innerHTML = 
  "Perimeter of Square = " + (4*a).toFixed(2);
}

//Area of Right Angle Triangle  : 1/2 * Base * Height

function triangle(){
  let b = parseFloat(document.getElementById("bas").value);
  let h = parseFloat(document.getElementById("hei").value);
  document.getElementById("result_angle").innerHTML = 
  "Area of Triangle = " + (0.5*b*h).toFixed(2);
}
