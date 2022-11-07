// Принимает на вход параметры
// Изначально ставка за позицию стоит 4 (рубля)
// За килограмм 0.22 (копейки)
// Принимает на вход параметры, позиции и килограммы,
// из которых складывает все это в одну сумму и выводит на экран

let positions = document.querySelector('.input-position'),
  weight = document.querySelector('.input-weight'),
  select = document.querySelector('#worker'),
  btn = document.querySelector('.btn-addition'),
  textOut = document.querySelector('.text-output');

btn.onclick = function (event) {
  event.preventDefault();

  // Controller

  if (positions.value == null) {
    textOut.innerHTML = weight.value * 0.22;
  } else if (weight.value == null) {
    textOut.innerHTML = positions.value * 4;
  } else {
    textOut.innerHTML = positions.value * 4 + weight.value * 0.22;
  }
}








