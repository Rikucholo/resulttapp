const Product = require('./model/product');
class FakeDb {
    constructor() {
        this.products = [{
                name: 'Phone XL',
                price: 799,
                coverImage: './assets/img/original.jpg',
                description: 'A large phone with one of the best screens',
                heading1: 'I am a Pen. Because I like to so much Very Like simple. to so Happy!!!',
                heading2: 'I am a Pen. Because I like to so much Very Like simple. to so Happy!!!',
                heading3: 'I am a Pen. Because I like to so much Very Like simple. to so Happy!!!',
                headingText1: 'I am a Pen. Because I like to so much Very Like simple. to so Happy!!!',
                headingText2: 'I am a Pen. Because I like to so much Very Like simple. to so Happy!!!',
                headingText3: 'I am a Pen. Because I like to so much Very Like simple. to so Happy!!!'
            },
            {
                name: 'Phone Mini',
                price: 699,
                coverImage: './assets/img/original.jpg',
                description: 'A great phone with one of the best cameras',
                heading1: 'I am a Pen. Because I like to so much Very Like simple. to so Happy!!!',
                heading2: 'I am a Pen. Because I like to so much Very Like simple. to so Happy!!!',
                heading3: 'I am a Pen. Because I like to so much Very Like simple. to so Happy!!!',
                headingText1: 'I am a Pen. Because I like to so much Very Like simple. to so Happy!!!',
                headingText2: 'I am a Pen. Because I like to so much Very Like simple. to so Happy!!!',
                headingText3: 'I am a Pen. Because I like to so much Very Like simple. to so Happy!!!',

            },
            {
                name: 'Phone Standard',
                price: 299,
                coverImage: './assets/img/original.jpg',
                description: '',
                heading1: 'I am a Pen. Because I like to so much Very Like simple. to so Happy!!!',
                heading2: 'I am a Pen. Because I like to so much Very Like simple. to so Happy!!!',
                heading3: 'I am a Pen. Because I like to so much Very Like simple. to so Happy!!!',
                headingText1: 'I am a Pen. Because I like to so much Very Like simple. to so Happy!!!',
                headingText2: 'I am a Pen. Because I like to so much Very Like simple. to so Happy!!!',
                headingText3: 'I am a Pen. Because I like to so much Very Like simple. to so Happy!!!'
            }

        ];

    }
    async init() {
        await this.cleanDb();
        this.pushProductToDb();
    }
    async cleanDb() {
        await Product.deleteMany({});
    }

    pushProductToDb() {
        this.products.forEach((product) => {
            const newProduct = new Product(product);
            newProduct.save();
        });
    }

    seeDb() {
        this.pushProductToDb();
    }
}

module.exports = FakeDb;