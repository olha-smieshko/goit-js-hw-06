const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const galleryImg = images.map(({url, alt}) =>
  `<li>
      <img
      src="${url}" 
      alt="${alt}">
</li>`).join('');
console.log(galleryImg);
const gallery = document.querySelector('.gallery');
gallery.insertAdjacentHTML("afterbegin", galleryImg);
gallery.style.cssText = 'list-style: none;  display: flex; flex-wrap: wrap; justify-content: center;'

const galleryItem = document.querySelectorAll('.gallery li');
galleryItem.forEach(item => item.style.cssText = 'margin: 10px; max-width: calc(60% - 20px);');

const img = document.querySelectorAll('.gallery img');
img.forEach(imgItem => imgItem.style.cssText = 'width: 100%; height: auto;');
