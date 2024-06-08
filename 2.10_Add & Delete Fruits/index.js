// Add the Edit Button:
const fruitList = document.querySelector('.fruits');

function addEditButton(liElement) {
  const editButton = document.createElement('button');
  editButton.textContent = 'Edit';
  editButton.classList.add('edit-btn');
  liElement.appendChild(editButton);
}

fruitList.querySelectorAll('.fruit').forEach(addEditButton);

// Implement the add and delete functionality
const form = document.querySelector('form');
const inputElement = document.getElementById('fruit-to-add');

form.addEventListener('submit', function (event) {
  event.preventDefault();
  const fruitToAdd = inputElement.value.trim();
  if (fruitToAdd) {
    const newFruitItem = `
      <li class="fruit">${fruitToAdd}<button class="edit-btn">Edit</button><button class="delete-btn">x</button></li>
    `;
    fruitList.innerHTML += newFruitItem;
    inputElement.value = '';
  }
});

fruitList.addEventListener('click', function (event) {
  if (event.target.classList.contains('delete-btn')) {
    event.target.parentElement.remove();
  }
});