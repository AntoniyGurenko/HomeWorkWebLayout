

// Случайное число [min, max]
function randomNum(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

// Проверка на повторение числа в массиве
function IsNumRepeated(num, arrNums) {
    for (let i = 0; i < arrNums.length; i++) {
        const element = arrNums[i];
        if (element === num) {
            return true;
        }
    }
}

// Проверка на наличие вещи в секции Cart Item
function IsItemRepeated(id, cartBox) {
    const childrensCartBox = cartBox.children;
    for (let i = 0; i < childrensCartBox.length; i++) {
        const element = childrensCartBox[i];
        if (Number(element.dataset.id) === id) {
            return element;
        }
    }
}

const data = JSON.parse(dataItems);
// console.log(data);

const itemsSectionContainer = document.querySelector('.items-section__grid__container');


let randsNums = [];  // Хочу реализовать рандомный порядок вещей
for (let i = 0; i < data.length; i++) {
    let rand = randomNum(0, data.length - 1);
    if (randsNums.length) {
        while (IsNumRepeated(rand, randsNums)) {
            rand = randomNum(0, data.length - 1);
        }
    }


    const element = data[rand];

    const item = document.createElement('div');
    item.classList.add('items-section__grid__items');
    item.classList.add('items-section__grid__item-1');
    item.classList.add('links-block');
    item.innerHTML = `
    <img class="items-section__grid-img" src="${element.img}" alt="image item">
    <div class="items-section__grid__about">
        <a href="#" class="items-section__grid__title">
            ${element.name}
        </a>
        <p class="m-0 items-section__grid__text">
            ${element.discription}
        </p>
        <p class="m-0 items-section__grid__price">
            $<span class="items-section__grid__price_value">${element.price}</span>.00
        </p>
        </div>
        <a href="#" class="items-section__grid__add  links-block">
        <svg class="tems-section__grid__add-icon" xmlns="http://www.w3.org/2000/svg" width="27"
                height="25" viewBox="0 0 27 25" fill="none">
                <path
                d="M21.9521 23.2662H21.8397C21.2306 23.2662 20.7188 22.7666 20.6746 22.1289C20.6302 21.4602 21.1187 20.8781 21.7637 20.8341C21.7891 20.8324 21.8156 20.8315 21.8417 20.8315C22.4587 20.8315 22.9755 21.3214 23.0213 21.9482C23.0331 22.1967 22.9926 22.5509 22.7371 22.8434L22.7312 22.8502L22.7254 22.8571C22.5287 23.0907 22.2619 23.2316 21.9521 23.2662ZM8.22003 23.2599C7.56946 23.2599 7.04022 22.7169 7.04022 22.0496C7.04022 21.3827 7.56946 20.8401 8.22003 20.8401C8.87061 20.8401 9.39984 21.3827 9.39984 22.0496C9.39984 22.7169 8.87061 23.2599 8.22003 23.2599Z"
                    fill="white" />
                    <path
                    d="M21.8765 22.2662C21.9215 22.2549 21.9428 22.2339 21.9605 22.2129C21.9683 22.2037 21.9761 22.1946 21.9839 22.1855C22.0204 22.1438 22.0237 22.0553 22.0229 22.0105C22.0097 21.9044 21.9189 21.8315 21.8417 21.8315C21.838 21.8315 21.8341 21.8317 21.8317 21.8318C21.7536 21.8372 21.6658 21.9409 21.6724 22.0625C21.6818 22.1793 21.7679 22.2662 21.8397 22.2662H21.8765ZM8.22003 22.2599C8.31921 22.2599 8.39984 22.1655 8.39984 22.0496C8.39984 21.9341 8.31921 21.8401 8.22003 21.8401C8.12091 21.8401 8.04022 21.9341 8.04022 22.0496C8.04022 22.1655 8.12091 22.2599 8.22003 22.2599ZM21.9999 24.2662C21.9522 24.2662 21.8883 24.2662 21.8397 24.2662C20.7021 24.2662 19.7571 23.3545 19.677 22.198C19.5969 20.9929 20.4942 19.9183 21.6957 19.8364C21.7446 19.8331 21.7933 19.8315 21.8417 19.8315C22.9804 19.8315 23.9418 20.7324 24.0195 21.8884C24.051 22.4915 23.8746 23.0612 23.4903 23.5012C23.106 23.9575 22.5768 24.2177 21.9999 24.2662ZM8.22003 24.2599C7.01581 24.2599 6.04022 23.2709 6.04022 22.0496C6.04022 20.8291 7.01581 19.8401 8.22003 19.8401C9.42419 19.8401 10.3998 20.8291 10.3998 22.0496C10.3998 23.2709 9.42419 24.2599 8.22003 24.2599ZM21.1989 17.3938H9.13354C8.70062 17.3938 8.31635 17.1005 8.2038 16.6775L4.27802 2.24768H1.52222C0.993896 2.24768 0.561035 1.80859 0.561035 1.27039C0.561035 0.733032 0.993896 0.292969 1.52222 0.292969H4.99982C5.43182 0.292969 5.8161 0.586304 5.92859 1.01025L9.85443 15.4391H20.5581L24.1149 7.13379H12.2583C11.7291 7.13379 11.2962 6.69373 11.2962 6.15649C11.2962 5.61914 11.7291 5.17908 12.2583 5.17908H25.5891C25.9095 5.17908 26.2146 5.34192 26.3901 5.61914C26.5665 5.89539 26.5989 6.23743 26.4702 6.547L22.08 16.807C21.9198 17.1653 21.5832 17.3938 21.1989 17.3938Z"
                    fill="white" />
                    <path
                    d="M21.8765 22.2662C21.9215 22.2549 21.9428 22.2339 21.9605 22.2129C21.9683 22.2037 21.9761 22.1946 21.9839 22.1855C22.0204 22.1438 22.0237 22.0553 22.0229 22.0105C22.0097 21.9044 21.9189 21.8315 21.8417 21.8315C21.838 21.8315 21.8341 21.8317 21.8317 21.8318C21.7536 21.8372 21.6658 21.9409 21.6724 22.0625C21.6818 22.1793 21.7679 22.2662 21.8397 22.2662H21.8765ZM8.22003 22.2599C8.31921 22.2599 8.39984 22.1655 8.39984 22.0496C8.39984 21.9341 8.31921 21.8401 8.22003 21.8401C8.12091 21.8401 8.04022 21.9341 8.04022 22.0496C8.04022 22.1655 8.12091 22.2599 8.22003 22.2599ZM21.9999 24.2662C21.9522 24.2662 21.8883 24.2662 21.8397 24.2662C20.7021 24.2662 19.7571 23.3545 19.677 22.198C19.5969 20.9929 20.4942 19.9183 21.6957 19.8364C21.7446 19.8331 21.7933 19.8315 21.8417 19.8315C22.9804 19.8315 23.9418 20.7324 24.0195 21.8884C24.051 22.4915 23.8746 23.0612 23.4903 23.5012C23.106 23.9575 22.5768 24.2177 21.9999 24.2662ZM8.22003 24.2599C7.01581 24.2599 6.04022 23.2709 6.04022 22.0496C6.04022 20.8291 7.01581 19.8401 8.22003 19.8401C9.42419 19.8401 10.3998 20.8291 10.3998 22.0496C10.3998 23.2709 9.42419 24.2599 8.22003 24.2599ZM21.1989 17.3938H9.13354C8.70062 17.3938 8.31635 17.1005 8.2038 16.6775L4.27802 2.24768H1.52222C0.993896 2.24768 0.561035 1.80859 0.561035 1.27039C0.561035 0.733032 0.993896 0.292969 1.52222 0.292969H4.99982C5.43182 0.292969 5.8161 0.586304 5.92859 1.01025L9.85443 15.4391H20.5581L24.1149 7.13379H12.2583C11.7291 7.13379 11.2962 6.69373 11.2962 6.15649C11.2962 5.61914 11.7291 5.17908 12.2583 5.17908H25.5891C25.9095 5.17908 26.2146 5.34192 26.3901 5.61914C26.5665 5.89539 26.5989 6.23743 26.4702 6.547L22.08 16.807C21.9198 17.1653 21.5832 17.3938 21.1989 17.3938Z"
                    fill="white" />
                    </svg>
                    Add to Cart
                    </a>
                    `;
    item.dataset.id = element.id;
    itemsSectionContainer.append(item);


    randsNums.push(rand);
}




const headerCheckBoxForMenu = document.querySelector('.header__checkbox');

headerCheckBoxForMenu.addEventListener('change', () => {
    const body = document.querySelector('body');
    body.classList.toggle('header__right-menu_overflowForBody');
});


const parentForNewSection = document.querySelector('.header__right-menu_hiden');
const sectionBonusEl = document.querySelector('.section-bonus');
const addToCartBtn = document.querySelectorAll('.items-section__grid__add');


addToCartBtn.forEach(element => {
    element.addEventListener('click', (e) => {
        e.preventDefault();

        if (!document.querySelector('.section-cart')) {
            const sectionCartEl = document.createElement('section');
            sectionCartEl.classList.add('section-cart');
            const sectionCartContainerEl = document.createElement('div');
            sectionCartContainerEl.classList.add('section-cart__container');
            sectionCartContainerEl.classList.add('center');
            sectionCartContainerEl.innerHTML = `
            <h1 class="section-cart__title">Cart Items</h1>
            <div class="section-cart__items-box"></div>
            `;
            sectionCartEl.append(sectionCartContainerEl);
            parentForNewSection.insertBefore(sectionCartEl, sectionBonusEl.nextSibling);
        }


        const target = e.target;
        let temp = target.parentElement;
        while (temp.classList[0] != 'items-section__grid__items') {
            temp = temp.parentElement;
        }

        const idItem = Number(temp.dataset.id);
        const itemsBox = document.querySelector('.section-cart__items-box');
        const repeatingItem = IsItemRepeated(idItem, itemsBox);
        if (repeatingItem) {
            const quantityValueEl = repeatingItem.querySelector('.cart-item__info__characteristics__quantity__value');
            let quantityValue = quantityValueEl.value;
            quantityValue++;
            quantityValueEl.value = quantityValue;
        } else {
            data.forEach(element => {
                if (element.id === idItem) {

                    const cartItem = document.createElement('div');
                    cartItem.classList.add('section-cart__items-box__cart-item');
                    cartItem.classList.add('cart-item');
                    cartItem.innerHTML = `
                    <div class="cart-item__container">
                            <div class="cart-item__img-box">
                                <img class="cart-item__img" src="${element.img}" alt="">
                            </div>
                            <div class="cart-item__info">
                                <div class="cart-item__info__container">
                                    <div class="cart-item__info__header">
                                        <a href="#" class="cart-item__title">${element.name}</a>
                                        <button type="button" class="cart-item__info__esc">
                                            <svg class="cart-item__info__esc__svg" xmlns="http://www.w3.org/2000/svg"
                                                width="18" height="18" viewBox="0 0 18 18" fill="none">
                                                <path
                                                    d="M11.2453 9L17.5302 2.71516C17.8285 2.41741 17.9962 2.01336 17.9966 1.59191C17.997 1.17045 17.8299 0.76611 17.5322 0.467833C17.2344 0.169555 16.8304 0.00177586 16.4089 0.00140366C15.9875 0.00103146 15.5831 0.168097 15.2848 0.465848L9 6.75069L2.71516 0.465848C2.41688 0.167571 2.01233 0 1.5905 0C1.16868 0 0.764125 0.167571 0.465848 0.465848C0.167571 0.764125 0 1.16868 0 1.5905C0 2.01233 0.167571 2.41688 0.465848 2.71516L6.75069 9L0.465848 15.2848C0.167571 15.5831 0 15.9877 0 16.4095C0 16.8313 0.167571 17.2359 0.465848 17.5342C0.764125 17.8324 1.16868 18 1.5905 18C2.01233 18 2.41688 17.8324 2.71516 17.5342L9 11.2493L15.2848 17.5342C15.5831 17.8324 15.9877 18 16.4095 18C16.8313 18 17.2359 17.8324 17.5342 17.5342C17.8324 17.2359 18 16.8313 18 16.4095C18 15.9877 17.8324 15.5831 17.5342 15.2848L11.2453 9Z"
                                                    fill="#575757" />
                                            </svg>
                                        </button>
                                    </div>
                                    <div class="cart-item__info__characteristics">
                                        <p class="cart-item__info__characteristics__price">Price: <span
                                                class="cart-item__info__characteristics__price_selection">$<span
                                                    class="cart-item__info__characteristics__price_selection__num">${element.price}</span></span>
                                        </p>
                                        <p class="cart-item__info__characteristics__color">Color: <span
                                                class="cart-item__info__characteristics__color__value">${element.color}</span>
                                        </p>
                                        <p class="cart-item__info__characteristics__size">Size: 
                                            <select class="cart-item__info__characteristics__size__value" name="size">
                                                <option class="cart-item__info__characteristics__size__values" value="s">s</option>
                                                <option class="cart-item__info__characteristics__size__values" value="m">m</option>
                                                <option class="cart-item__info__characteristics__size__values" value="l">l</option>
                                                <option class="cart-item__info__characteristics__size__values" selected value="xl">xl</option>
                                                <option class="cart-item__info__characteristics__size__values" value="xxl">xxl</option>
                                            </select>
                                        </p>
                                        <p class="cart-item__info__characteristics__quantity">Quantity: <input type="text" value="${element.quantity}"
                                                class="cart-item__info__characteristics__quantity__value"></input>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `;
                    cartItem.dataset.id = element.id;
                    itemsBox.append(cartItem);

                    // Добавление счётчика корзины в меню сверху
                    const headerBasketCounter = document.querySelector('.header__right__basket-counter__count');
                    let headerBasketCount = Number(headerBasketCounter.textContent);
                    headerBasketCount++;
                    headerBasketCounter.textContent = headerBasketCount;

                    // Удаление элемента
                    const escEl = document.querySelectorAll('.cart-item__info__esc');
                    escEl.forEach(element => {
                        element.addEventListener('click', (e) => {
                            const target = e.target;
                            let temp = target;

                            function findElToDelete() {
                                if (itemsBox.children.length > 1) {
                                    return document.querySelector('.cart-item');
                                } else {
                                    return document.querySelector('.section-cart');
                                }
                            }
                            const elToDelete = findElToDelete();

                            while (temp.classList[0] !== elToDelete.classList[0]) {
                                console.log(temp.parentElement);
                                temp = temp.parentElement;
                            }
                            temp.remove();

                            headerBasketCount = Number(headerBasketCounter.textContent);
                            headerBasketCount--;
                            headerBasketCounter.textContent = headerBasketCount;
                        });
                    });
                }
            });
        }

    });
});





// TODO: пока не сделаю задачу - тут будет автоклика
addToCartBtn[0].click();
addToCartBtn[1].click();
