const product = [
    {
        id: 0,
        image: 'Images/Kisses.jpg',
        title: 'Kisses',
        price: 100,
    },
    {
        id: 1,
        image: 'Images/Bocana.jpg',
        title: 'Bocana',
        price: 150,
    },
    {
        id: 2,
        image: 'Images/Gelato.jpg',
        title: 'Gelato',
        price: 120,
    },
    {
        id: 3,
        image: 'Images/Starbucks.jpg',
        title: 'Starbucks',
        price: 180,
    },
    
];
const categories = [...new Set(product.map((item)=> {return item}))];

let i = 0;

document.getElementById('card-container').innerHTML = categories.map((item)=>
{
    var { image, title, price } = item;
    return(
        `<div class='card'>
            <img class='images' src=${image}></img>
        <div class='card-content'>
        <p>${title}</p>
        <h2>$ ${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    )
}).join('');


var cart = [];

function addtocart(item) {
    if(cart.length === 8) alert('cart full'); //Cart full condition 
    cart.length < 8 && cart.push({...categories[item]});
    displaycart();
}

function delElement(item) {
    cart.splice(item, 1);
    displaycart();
}

function displaycart() {
    let j = 0, total = 0;
    document.getElementById("count").innerHTML = cart.length;

    if(cart.length === 0) {
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$ "+0+".00";
    }

    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "$ "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:20px;'>${title}</p>
                <h2 style='font-size: 20px;'>$ ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }
}