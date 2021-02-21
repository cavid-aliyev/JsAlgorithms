let carts = document.querySelectorAll('.add-cart');

let products = [{
        name: 'Assasins Odisseya',
        tag: 'oldrome',
        price: 15,
        inCart: 0,
    },
    {
        name: 'Assasins 3',
        tag: 'oldtimes',
        price: 30,
        inCart: 0,
    },
    {
        name: 'Assasins Black Flag',
        tag: 'pirates',
        price: 14,
        inCart: 0,
    },
    {
        name: 'Assasins Valhala',
        tag: 'wikings',
        price: 45,
        inCart: 0,
    },
]

for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i]);
        totalCost(products[i]);
    });

}

//checking localstorage
function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');

    if (productNumbers) {
        document.querySelector('.card span').textContent = productNumbers;
    }
}


function cartNumbers(product) {
    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);

    if (productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.card span').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.card span').textContent = 1;
    }

    setItems(product);

}

//give me name of product
function setItems(product) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if (cartItems != null) {

        if (cartItems[product.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart += 1;
    }

    product.inCart = 1;
    cartItems = {
        [product.tag]: product
    }

    localStorage.setItem('productsinCarts', JSON.stringify(cartItems));
}

let cartCost = localStorage.getItem('totalCost');

function totalCost(product) {


    if (cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price);
    } else {
        localStorage.setItem("totalCost", product.price);
    }


}


//Cart section
function displayCart() {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".products");

    if (cartItems && productContainer) {
        productContainer.innerHTML = '';

        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
            <div class="product">
                <ion-icon name="close-circle"></ion-icon>
                <img src="#">
                <span>${item.name}</span>
            </div>
            <div class="price">${item.price}</div>
            <div class="quantity">
                <ion-icon class="decrease" name="arrow-dropleft-circle"></ion-icon>
                <span>${item.inCart}</span>
            </div>
            <div class="total">${item.inCart * item.price},00</div>
         `;
        });

        productContainer.innerHTML += `
        <div class="basketTotalContainer">
            <h4 class="basketTotalTitle">
                Basket Total
            </h4>
            <h4 class="basketTotal">
                $${cartCost},00;
            </h4>
        </div>
      `;

    }


}

onLoadCartNumbers();
displayCart();