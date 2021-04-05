const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const createGalleryItem = ({ url, alt }) =>
  `<li><img src='${url}' alt='${alt}' width = 200 height = 150></li>`;
const galleryMarkup = images.reduce(
  (i, item) => i + createGalleryItem(item),
  ''
);
const galleryList = document.querySelector('#gallery');
galleryList.insertAdjacentHTML('afterbegin', galleryMarkup);
galleryList.setAttribute('style', 'list-style-type:none; display: flex; margin - right: calc(-1 * 30px);');
const galleryListItem = document.querySelector('li').nextSibling.previousSibling; 
galleryListItem
  .setAttribute('style', ' margin-right: 30px;');
const galleryListItem2 = document.querySelector('li').nextSibling;
galleryListItem2
  .setAttribute('style', ' margin-right: 30px; ');

// const galleryList = document.querySelector('#gallery');
// galleryList.insertAdjacentHTML('afterbegin', galleryMarkup);
// galleryList.setAttribute('style', 'list-style-type:none; display: flex; margin - left: calc(-1 * 30px);');
// let galleryListItemClass = document.querySelectorAll('#galery').children;
// galleryListItemClass.classList.add('gallery-item-img');
// const itemImgStyle = document.querySelector('.gallery-item-img');
// itemImgStyle.setAttribute('style', 'flex-basis: calc(100% / 3 - 30px);margin-left: 30px;');