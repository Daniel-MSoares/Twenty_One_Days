const main =document.querySelector('#main')
const products=[
    {
        id:1,
        name:"Camiseta Capitão América",
        img:'p2.jpg',
        description:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi, nobis magni adipisci fugit sapiente repudiandae possimus, est delectus minima nam quaerat rerum odio dolorem vero ab temporibus ipsum iste qui?',
        price:39.99
    },
    {
        id:2,
        name:"Camiseta Eu Sou o batman",
        img:'batman1.jpg',
        description:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi, nobis magni adipisci fugit sapiente repudiandae possimus, est delectus minima nam quaerat rerum odio dolorem vero ab temporibus ipsum iste qui?',
        price:59.99
    },
    {
        id:3,
        name:"Camiseta Luffy",
        img:'op1.jpg',
        description:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi, nobis magni adipisci fugit sapiente repudiandae possimus, est delectus minima nam quaerat rerum odio dolorem vero ab temporibus ipsum iste qui?',
        price:69.99
    },
    {
        id:4,
        name:"Camiseta One piece",
        img:'op2.jpg',
        description:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi, nobis magni adipisci fugit sapiente repudiandae possimus, est delectus minima nam quaerat rerum odio dolorem vero ab temporibus ipsum iste qui?',
        price:39.99
    },
    {
        id:5,
        name:"Camiseta Capitão Jack sparrow",
        img:'p3.jpg',
        description:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi, nobis magni adipisci fugit sapiente repudiandae possimus, est delectus minima nam quaerat rerum odio dolorem vero ab temporibus ipsum iste qui?',
        price:54.99
    },
    {
        id:6,
        name:"Camizeta the Big bang theory",
        img:'tbbg.jpg',
        description:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi, nobis magni adipisci fugit sapiente repudiandae possimus, est delectus minima nam quaerat rerum odio dolorem vero ab temporibus ipsum iste qui?',
        price:39.99
    },
    {
        id:7,
        name:"Camizeta sonic",
        img:'sonic.jpg',
        description:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi, nobis magni adipisci fugit sapiente repudiandae possimus, est delectus minima nam quaerat rerum odio dolorem vero ab temporibus ipsum iste qui?',
        price:49.99
    },
    {
        id:8,
        name:"Camizeta Sharingan",
        img:'Sharingan.jpg',
        description:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi, nobis magni adipisci fugit sapiente repudiandae possimus, est delectus minima nam quaerat rerum odio dolorem vero ab temporibus ipsum iste qui?',
        price:69.99
    },
]

function loadProducts(){
    products.forEach(product=> {
        main.innerHTML+=`
        <div class="product-card">
        <div class="title">
            <h1><span>${product.name}</span></h1>
        </div>
        <div class="image">
          <img src="img/products/${product.img}" alt="">
        </div>
        <div class="info">
            <div class="price"><h1>R$<span>${product.price}</span></h1></div>
            <button class="btn btn2">Ver Produto</button>
            <button class="btn btn1">Adicionar ao carrinho</button>
        </div>
      </div>`
    });
}

loadProducts()