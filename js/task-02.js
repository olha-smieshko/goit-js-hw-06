const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const liElements = ingredients.map(liItem => {
  const liEl = document.createElement('li');
  liEl.textContent = liItem;
  liEl.classList.add('item');
  return liEl;
});
document.getElementById('ingredients').append(...liElements);