// Write the code as shown in the video below:
const a1 = document.querySelector('#main-heading');
a1.style.textAlign = 'right';
const a2 = document.querySelector('#basket-heading');
a2.style.color = 'brown';
const a4=document.querySelector('.fruits');
a4.style.backgroundColor='grey';
const a3 = document.querySelectorAll('.fruit');
for (let i = 0; i < a3.length; i++) {
  a3[i].style.backgroundColor = 'brown';
  a3[i].style.listStyleType = 'none';
  a3[i].style.color='white';
}
const a3odd = document.querySelectorAll('.fruits .fruit:nth-of-type(odd)');
for (let k = 0; k < a3odd.length; k++) {
  a3odd[k].style.backgroundColor = 'lightgrey';
  a3odd[k].style.color='black';
  
}
// Write answer to the questions asked below:
