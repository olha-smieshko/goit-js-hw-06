const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


ingredients.forEach(liItem => {
  const liEl = document.createElement('li');
  liEl.textContent = liItem;
  liEl.classList.add('item');
  document.getElementById('ingredients').append(liEl);
})