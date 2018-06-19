'use strict';

function getNextImage() {
  var nextIndex = Math.floor(Math.random() * Product.all.length);
  var image = Product.all[nextIndex];

  return image;
}

var voteCount = 0;
function showImages() {
  if (voteCount >= 5) {
    showResults();
    return;
  }
  //have image 1 show up on page
  var image1 = getNextImage();
  var img1 = document.getElementById('product-1');
  img1.src = image1.src;
  img1.currentProduct = image1;

  var image2 = getNextImage();
  var img2 = document.getElementById('product-2');
  img2.src = image2.src;
  img2.currentProduct = image2;

  var image3 = getNextImage();
  var img3 = document.getElementById('product-3');
  img3.src = image3.src;
  img3.currentProduct = image3;
}

//click event to have new product images show up, erros after first click
var productImages = document.querySelectorAll('#voting img');
for(var i = 0; i < productImages.length; i++) {
  productImages[i].addEventListener('click', function (event){
    voteCount++;

    console.log('click #' + voteCount, event.target.currentProduct);
    showImages();
  } );
}



function Product(name, src, testVoteCount) {
  this.name = name;
  this.src= src;
  this.voteCount = testVoteCount || 0;

  Product.all.push(this);
}
Product.all = [];

new Product('R2-D2 Bag', 'img/bag.jpg', 2);
new Product('Meat Gum', 'img/bubblegum.jpg', 4);
new Product('InstaBreakfast', 'img/breakfast.jpg', 6);
new Product('Toilet iPad', 'img/bathroom.jpg', 8);
new Product('Cthulhu Action Figure', 'img/cthulhu.jpg', 1);
new Product('Pet Sweepers', 'img/pet-sweep.jpg', 3);
new Product('Unicorn Meat', 'img/unicorn.jpg', 5);

window.addEventListener('load', showImages);

function showResults() {
  var ul = document.getElementById('results');
  ul.innerHTML = '';

  for(var i = 0; i < Product.all.length; i++) {
    var current = Product.all[i];
    var li = document.createElement('li');
    li.textContent = current.name + ' got ' + current.voteCount + ' votes';
    ul.appendChild(li);
  }
}