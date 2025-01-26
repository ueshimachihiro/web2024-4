function uruudosi(){
 var x = Number(document.getElementById('input5').value);
 if(x % 100 == 0 && x % 400 > 0)
  {alert('平年');}
  else if(x % 4 ==0)
  {alert('閏年');}
  else{alert('平年');}
}
