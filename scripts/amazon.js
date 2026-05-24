import {cart, addToCart} from '../data/cart.js';     //module third step
import {products} from '../data/products.js';
import { formatCurrency } from './utils/money.js';

let productsHTML = '';
products.forEach((product) => {         
  productsHTML += `                       
    <div class="product-container">
        <div class="product-image-container">
          <img class="product-image"
            src="${product.image}">      
        </div>

        <div class="product-name limit-text-to-2-lines">
          ${product.name}
        </div>

        <div class="product-rating-container">
          <img class="product-rating-stars"
            src="images/ratings/rating-${product.rating.stars *10}.png">
          <div class="product-rating-count link-primary">
            ${product.rating.count}
          </div>
        </div>

        <div class="product-price">
          $${formatCurrency(product.priceCents)}
        </div>

        <div class="product-quantity-container">
          <select>
            <option selected value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>

        <div class="product-spacer"></div>

        <div class="added-to-cart">
          <img src="images/icons/checkmark.png">
          Added
        </div>

        <button class="add-to-cart-button button-primary js-add-to-cart"
        data-product-id="${product.id}">                
          Add to Cart 
        </button>
      </div>
  ` ;                                             //we generate this html using `html codes` 
});


document.querySelector('.js-products-grid').innerHTML = productsHTML;  // look for the class called js-product-grid in the html file and take the element and put it inside our javascript. we are now generating the html using javascript and we are using the DOM to put thr html inside it



              // third step: we make it interactive .... check function addToCart in cart.js

function updateCartQuantity() {                // this function handling updating the webp
 //looping through the cart array to make it interactive -- to calculate the total quantity of the cart
 let cartQuantity = 0;  // creating a variable so as we loop through the array we are going to add the itrm quantity to this variabe(cartQuantity)

 cart.forEach((cartItem) => {
   cartQuantity += cartItem.quantity;   // this will add up all the quantity and save it into the variable(cartQuantity). After this we are to find the HTML quantity that we are going to put the quantity and going to put it on the page using the "DOM"
 });
 document.querySelector('.js-cart-quantity')         //(.'js-cart-quantity') we called on the html element class so as to use it here
   .innerHTML = cartQuantity;                      //here we have replaced the html element with the javascript cartQuantity
}


document.querySelectorAll('.js-add-to-cart')
    .forEach((button) => {
      button.addEventListener('click', () => {   
        const productId = button.dataset.productId;                     //the dataset attribute gives us all the data that are attached to the button
        addToCart(productId);
        updateCartQuantity();         
      });
    });       //addEventListener('the event you want to listen for', a function you want to run when you click the button)

