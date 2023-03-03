const liEl = document.querySelectorAll('li.item');
console.log(`Number of categories: ${liEl.length}`);
liEl.forEach(liItem => console.log(`\nCategory: ${liItem.firstElementChild.textContent}\nElements: ${liItem.lastElementChild.children.length}`))