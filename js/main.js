// Принимает на вход параметры
// Изначально ставка за позицию стоит 4 (рубля)
// За килограмм 0.22 (копейки)
// Принимает на вход параметры, позиции и килограммы,
// из которых складывает все это в одну сумму и выводит на экран

let positionsBasic = document.querySelector('.input-position'),
  weightBasic = document.querySelector('.input-weight'),
  btn = document.querySelector('.btn-addition'),
  textOut = document.querySelector('.text-output');

btn.onclick = function () {
  textOut.innerHTML = parseInt(positionsBasic.value) * 4 + parseInt(weightBasic.value) * 0.22;
}






