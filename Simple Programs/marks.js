function cal_tot(){
  let m1 = parseInt(document.getElementById("m1").value);
  let m2 = parseInt(document.getElementById("m2").value);
  let m3 = parseInt(document.getElementById("m3").value);
  let m4 = parseInt(document.getElementById("m4").value);
  let m5 = parseInt(document.getElementById("m5").value);
  alert("Total = " + (m1+m2+m3+m4+m5));
}

function cal_avg(){
  let m1 = parseInt(document.getElementById("m1").value);
  let m2 = parseInt(document.getElementById("m2").value);
  let m3 = parseInt(document.getElementById("m3").value);
  let m4 = parseInt(document.getElementById("m4").value);
  let m5 = parseInt(document.getElementById("m5").value);
  alert("Average = " + (m1+m2+m3+m4+m5)/5);
}
