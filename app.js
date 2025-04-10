const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.querySelector('.close-btn');
const menu = document.querySelector('.nav-links-wrapper');
const overlay = document.querySelector('.overlay');
const mainThumbnail = document.querySelector('.main-thumbnail');
const mainThumbnailLightBox = document.querySelector(
  '.lightbox-container .main-thumbnail'
);
const images = document.querySelectorAll('.preview img');
const plusBtn = document.querySelector('#plus');
const minusBtn = document.querySelector('#minus');
const amount = document.querySelector('.amount');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('previous');
const slider = document.querySelector('.mobile-thumb');
const thumbMob = document.querySelector('.thumb-mob');
const cartBtn = document.querySelector('.cart-btn');
const cart = document.querySelector('.cart-wrp');
const addBtn = document.querySelector('.add_btn');
const indicator = document.querySelector('.indicator');
const wrp = document.querySelector('.cart-content');

const closeLightboxBtn = document.querySelector('.close-lightbox');
const lightbox = document.querySelector('.lightbox');
const nextBtnLightbox = document.getElementById('nextBtn');
const prevBtnLightbox = document.getElementById('prevBtn');
const lightboxImages = document.querySelectorAll(
  '.lightbox-container .preview img'
);
const lightboxMainThumbnail = document.querySelector(
  '.lightbox-container .main-thumbnail'
);

let amountValue = 0;
let currentImg = 1;

indicator.style.display = 'none';
function openMenu() {
  menu.classList.add('active');
  overlay.classList.add('active');
  menu.style.transitionDuration = '400ms';
  overlay.style.transitionDuration = '400ms';
}
function closeMenu() {
  menu.classList.remove('active');
  overlay.classList.remove('active');
  menu.style.transitionDuration = '400ms';
  overlay.style.transitionDuration = '400ms';
}
function handlePlus() {
  amountValue++;
  amount.innerText = amountValue;
}
function handleMinus() {
  if (amountValue > 0) {
    amountValue--;
  }
  amount.innerText = amountValue;
}
function nextImage() {
  if (currentImg == 4) {
    currentImg = 1;
  } else {
    currentImg++;
  }
  thumbMob.src = `./img/image-product-${currentImg}.jpg`;
}
function prevImage() {
  if (currentImg == 1) {
    currentImg = 4;
  } else {
    currentImg--;
  }
  thumbMob.src = `./img/image-product-${currentImg}.jpg`;
}

function nextImageLightbox() {
  if (currentImg == 4) {
    currentImg = 1;
  } else {
    currentImg++;
  }
  lightboxMainThumbnail.src = `./img/image-product-${currentImg}.jpg`;
  updateLightboxThumbnails();
}

function prevImageLightbox() {
  if (currentImg == 1) {
    currentImg = 4;
  } else {
    currentImg--;
  }
  lightboxMainThumbnail.src = `./img/image-product-${currentImg}.jpg`;
  updateLightboxThumbnails();
}

function updateLightboxThumbnails() {
  lightboxImages.forEach((img, index) => {
    img.classList.remove('selected');
    if (index + 1 === currentImg) {
      img.classList.add('selected');
    }
  });
}

function toggleCart() {
  cart.classList.toggle('invisible');
}
function closeLightBox() {
  lightbox.classList.add('invisible');
}
function openLightBox() {
  lightbox.classList.remove('invisible');
}
function addItem() {
  if (amountValue > 0) {
    const total = 125.0 * amountValue;
    wrp.classList.remove('empty');
    wrp.innerHTML = `<div class="product">
                          <div>
                            <img src="./img/image-product-1-thumbnail.jpg" class="product-img" alt="main image product">
                            <div class="product-info">
                              <p class="product-title">Fall Limited Edition Sneakers</p>
                             <p><span>$125.00</span> × <span class="number">${amountValue}</span> <b>$${total}</b></p>
                            </div>
                            <button class="delete-btn" onclick="deleteItem()"><img src="./img/icon-delete.svg" alt="delete icon"></button>
                          </div>
                          <button class="checkout-btn">Checkout</button>
                        </div>`;
    indicator.style.display = 'block';
    indicator.innerText = amountValue;
  }
}
function deleteItem() {
  wrp.classList.add('empty');
  wrp.innerHTML = `<p>Your cart is empty</p>`;
  indicator.style.display = 'none';
}

images.forEach((image) => {
  image.addEventListener('click', () => {
    const lastImg = document.querySelectorAll('.preview img.selected');
    if (lastImg.length > 0) {
      lastImg[0].classList.remove('selected');
    }
    image.classList.add('selected');
    const selectedImg = document.querySelector('.preview img.selected');
    switch (selectedImg.getAttribute('src')) {
      case './img/image-product-1-thumbnail.jpg':
        mainThumbnail.src = './img/image-product-1.jpg';
        mainThumbnailLightBox.src = './img/image-product-1.jpg';
        currentImg = 1;
        updateLightboxThumbnails();
        break;
      case './img/image-product-2-thumbnail.jpg':
        mainThumbnail.src = './img/image-product-2.jpg';
        mainThumbnailLightBox.src = './img/image-product-2.jpg';
        currentImg = 2;
        updateLightboxThumbnails();
        break;
      case './img/image-product-3-thumbnail.jpg':
        mainThumbnail.src = './img/image-product-3.jpg';
        mainThumbnailLightBox.src = './img/image-product-3.jpg';
        currentImg = 3;
        updateLightboxThumbnails();
        break;
      case './img/image-product-4-thumbnail.jpg':
        mainThumbnail.src = './img/image-product-4.jpg';
        mainThumbnailLightBox.src = './img/image-product-4.jpg';
        currentImg = 4;
        updateLightboxThumbnails();
        break;
    }
  });
});

lightboxImages.forEach((image, index) => {
  image.addEventListener('click', () => {
    const lastImg = document.querySelectorAll(
      '.lightbox-container .preview img.selected'
    );
    if (lastImg.length > 0) {
      lastImg[0].classList.remove('selected');
    }
    image.classList.add('selected');
    lightboxMainThumbnail.src = `./img/image-product-${index + 1}.jpg`;
    currentImg = index + 1;
  });
});

menuBtn.addEventListener('click', openMenu);
closeBtn.addEventListener('click', closeMenu);
plusBtn.addEventListener('click', handlePlus);
minusBtn.addEventListener('click', handleMinus);
nextBtn.addEventListener('click', nextImage);
prevBtn.addEventListener('click', prevImage);
cartBtn.addEventListener('click', toggleCart);
closeLightboxBtn.addEventListener('click', closeLightBox);
mainThumbnail.addEventListener('click', openLightBox);
addBtn.addEventListener('click', addItem);
nextBtnLightbox.addEventListener('click', nextImageLightbox);
prevBtnLightbox.addEventListener('click', prevImageLightbox);
