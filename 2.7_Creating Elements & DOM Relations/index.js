// Write your code below:
const newele = document.createElement('h3');
newele.textContent = 'Buy high quality organic fruits online';
const h1 = document.getElementById('main-heading');
h1.appendChild(newele);

newele.style.fontStyle = 'italic';

const secondDiv = document.getElementsByTagName('div')[1];
const para = document.createElement('p');
para.textContent = 'Total fruits: 4';
secondDiv.insertBefore(para, secondDiv.firstChild);

para.id = 'fruits-total';