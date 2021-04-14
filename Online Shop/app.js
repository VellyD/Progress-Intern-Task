
function listProducts(productsDB) {
    const body = document.querySelector('body');

    productsDB.forEach(product => {
        let productName = product.ProductName;
        let productId = product.ProductID;
        let productPrice = product.UnitPrice;
        let productQuantity = product.UnitsInStock;
        let productDeliveryDate = product.DeliveryOn;
        let productImage = product.src;

        let productView = createProduct(productId, productName, productImage, productPrice);

        if (productQuantity <= 0) {
            let soldBtn = createEl('button');
            let soldOutP = createEl('p', 'SOLD OUT!');
            soldBtn.disabled = true;
            soldBtn.style.cursor = 'default';

            soldBtn.appendChild(soldOutP);
            productView.appendChild(soldBtn);

            productView.style.filter = "grayscale(100%)";

            body.appendChild(productView);

        } else {
            let btn = createEl('button');
            btn.textContent = 'Check delivery date';
            
            productView.appendChild(btn);
            body.appendChild(productView);
            
            btn.addEventListener('click', (ev) => {
                let replace =  ev.target;
                let fullDate = productDeliveryDate.toDateString();
                let dateOfDelivery = fullDate.slice(0, 10);
                let deliveryDate = createEl('p', `Delivery on: ${dateOfDelivery}`);
                let availableQuantity = createEl('p', `We still have ${productQuantity} left. :)`);

                replace.textContent = '';
                replace.appendChild(deliveryDate);
                replace.appendChild(availableQuantity);
                replace.disabled = true;
            })

        }
    });

};

function createProduct(pID, pName, pSrc, pPrice) {
    let divProduct = createEl('div');
    divProduct.setAttribute('class', `product${pID}`);

    let pTitle = createEl('h3', pName);

    let img = createEl('img', undefined, 'image');
    img.src = pSrc;

    let pValue = createEl('p', `Listed price: ${pPrice} $`);

    divProduct.appendChild(pTitle);
    divProduct.appendChild(img);
    divProduct.appendChild(pValue);


    return divProduct;
};

function createEl(type, text, classType) {
    const el = document.createElement(type);
    el.textContent = text;

    if (classType !== undefined) {
        el.setAttribute('class', classType);
    }

    return el;
};

const products = [{
        "ProductID": 1,
        "ProductName": "Chai",
        "UnitPrice": 18,
        "UnitsInStock": 39,
        "DeliveryOn": new Date(1996, 8, 20),
        "src": "https://www.whiskaffair.com/wp-content/uploads/2020/03/Tandoori-Chai-2-3.jpg"
    },
    {
        "ProductID": 2,
        "ProductName": "Chang",
        "UnitPrice": 19,
        "UnitsInStock": 17,
        "DeliveryOn": new Date(1996, 7, 12),
        "src": "data:image/jpeg;base64,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"

    },
    {
        "ProductID": 3,
        "ProductName": "Aniseed Syrup",
        "UnitPrice": 10,
        "UnitsInStock": 0,
        "DeliveryOn": new Date(1996, 8, 26),
        "src": "https://www.hospitalitysuperstore.com.au/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/p/u/pu1883anise1.jpg"
    },
    {
        "ProductID": 4,
        "ProductName": "Chef Anton's Cajun Seasoning",
        "UnitPrice": 22,
        "UnitsInStock": 53,
        "DeliveryOn": new Date(1996, 9, 19),
        "src": "https://selfproclaimedfoodie.com/wp-content/uploads/cajun-seasoning-mix-Self-Proclaimed-Foodie-featured.jpg"

    },
    {
        "ProductID": 5,
        "ProductName": "Chef Anton's Gumbo Mix",
        "UnitPrice": 21.35,
        "UnitsInStock": 0,
        "DeliveryOn": new Date(1996, 7, 17),
        "src": "http://www.gimmesomeoven.com/wp-content/uploads/2016/04/Gumbo-Recipe-2-2.jpg"

    },
    {
        "ProductID": 6,
        "ProductName": "Grandma's Boysenberry Spread",
        "UnitPrice": 25,
        "UnitsInStock": 120,
        "DeliveryOn": new Date(1996, 9, 19),
        "src": "https://cdn11.bigcommerce.com/s-i8agbb7iol/images/stencil/1280x1280/products/7088/11051/SD_Boysenberry__91786.1553286578.jpg?c=2"

    },
    {
        "ProductID": 7,
        "ProductName": "Uncle Bob's Organic Dried Pears",
        "UnitPrice": 30,
        "UnitsInStock": 0,
        "DeliveryOn": new Date(1996, 7, 22),
        "src": "https://m.media-amazon.com/images/S/aplus-media/sc/a173116f-2ba3-4b94-a676-acf21f7c069e.__CR0,0,970,600_PT0_SX970_V1___.jpg"

    },
    {
        "ProductID": 8,
        "ProductName": "Northwoods Cranberry Sauce",
        "UnitPrice": 40,
        "UnitsInStock": 0,
        "DeliveryOn": new Date(1996, 11, 1),
        "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVW13IUxKoY277PYWDati5psVlYZhOql275A&usqp=CAU"

    },
    {
        "ProductID": 9,
        "ProductName": "Mishi Kobe Niku",
        "UnitPrice": 97,
        "UnitsInStock": 29,
        "DeliveryOn": new Date(1997, 1, 21),
        "src": "https://jeremyng.smugmug.com/Travel/Kobe/DSC5530filtered/1211723860_vpTAh-L-1.jpg"

    },
    {
        "ProductID": 10,
        "ProductName": "Ikura",
        "UnitPrice": 31,
        "UnitsInStock": 31,
        "DeliveryOn": new Date(1996, 8, 5),
        "src": "https://i.pinimg.com/originals/8c/66/56/8c665655a5b78805893338b1ab215d44.jpg"

    }
];

listProducts(products);