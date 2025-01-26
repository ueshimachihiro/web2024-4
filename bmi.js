function bmi(){
 var x = Number(document.getElementById('input3').value);
 var y = Number(document.getElementById('input4').value);
 alert(y/(x*x));
 if(y/(x*x) < 18.5)
  {alert('低体重');}
  else if(y/(x*x) < 25)
  {alert('普通');}
  else{alert('肥満');}
}
