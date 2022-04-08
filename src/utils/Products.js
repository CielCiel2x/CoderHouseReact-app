const Products = [
    {
        sku: 1,
        name: "Kindred | League of Legends plushie",
        price: 35,
        productImage: "https://m.media-amazon.com/images/I/61yjhxVymPL._AC_SL1500_.jpg",
        stock: 2
    },

    {
        sku: 2,
        name: 'Full Metal Alchemist | full collection',
        price: 850,
        productImage: 'https://http2.mlstatic.com/D_NQ_NP_762245-MLM44738982991_012021-O.jpg',
        stock: 5
    },

    {
        sku: 3,
        name: 'The Promised Neverland | any tome',
        price: 35,
        productImage: 'https://cdn.shopify.com/s/files/1/0289/3273/5075/products/s-l1600_b666c8c2-69dc-40a7-9e0e-ff812f6cc81d_800x.jpg?v=1580025113',
        stock: 7
    },

    {
        sku: 4,
        name: 'Kaeya | Genshin Impact mochikororin',
        price: 235,
        productImage: 'https://cdn.shopify.com/s/files/1/0008/7851/0137/products/s-l500_10_baba9bc5-2990-4abe-a57c-a22f41d66820_700x700.jpg?v=1645075826',
        stock: 30
    },

    {
        sku: 5,
        name: 'Venti | Genshin Impact mochikororin',
        price: 10,
        productImage: 'https://www.yoyakunow.com/64992-large_default/genshin-impact-mochikororin-plush-mascot-vol1-box.jpg',
        stock: 1
    },

    {
        sku: 6,
        name: 'Star Guardian Pix | League of Legends',
        price: 27.50,
        productImage: 'https://ae01.alicdn.com/kf/HTB1GJelagLD8KJjSszeq6yGRpXai.jpg?size=73711&height=390&width=600&hash=9223e9a75784abd1676860fddd6c3500',
        stock: 1
    }
]

const product = {
    sku: 1,
    name: "Kindred | League of Legends plushie",
    price: 35,
    productImage: "https://m.media-amazon.com/images/I/61yjhxVymPL._AC_SL1500_.jpg",
    stock: 2,
    rating: 4,
}

export default Products;

export const fetchProduct = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(product);
        }, 2000);
    });
};