//Script para o filtro
window.addEventListener('load', start);

function start() {
  var input1 = document.querySelector('#input1');
  input1.addEventListener('mousemove', captureR);
  input1.addEventListener('change', captureR);

  var input2 = document.querySelector('#input2');
  input2.addEventListener('mousemove', captureG);
  input2.addEventListener('change', captureG);

  var input3 = document.querySelector('#input3');
  input3.addEventListener('mousemove', captureB);
  input3.addEventListener('change', captureB);

  var mainForm = document.querySelector('.filter');
  mainForm.addEventListener('mousemove', changeColor);
  mainForm.addEventListener('change', changeColor);
}

function captureR(event) {
  var rNumber = event.target.value; //Var with de number between 0 - 255 to red;

  var colorR = document.querySelector('#color1');
  colorR.value = rNumber;
}

function captureG(event) {
  var gNumber = event.target.value; //Var with de number between 0 - 255 to green;

  var colorG = document.querySelector('#color2');
  colorG.value = gNumber;
}

function captureB(event) {
  var bNumber = event.target.value; //Var with de number between 0 - 255 to blue;

  var colorB = document.querySelector('#color3');
  colorB.value = bNumber;
}

function changeColor() {
  var input1 = document.querySelector('#input1');
  var input2 = document.querySelector('#input2');
  var input3 = document.querySelector('#input3');

  var ColorR = input1.value;
  var ColorG = input2.value;
  var ColorB = input3.value;

  var demo = document.querySelector('#demo-color');
  demo.style.background = 'rgb(' + ColorR + ',' + ColorG + ',' + ColorB + ')';
}
