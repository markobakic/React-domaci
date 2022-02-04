const data = {
    products: [
        {
            id: 1,
            name: 'Nike',
            model: 'Air Max 1',
            price: 169,
            image: 'https://www.buzzsneakers.com/files/thumbs/files/images/slike-proizvoda/media/AH8/AH8145-303/images/thumbs_800/AH8145-303_800_800px.jpg'
        },
        {
            id: 2,
            name: 'Jordan',
            model: 'Jordan 6 Retro',
            price: 199,
            image: 'https://www.thenextsole.com/storage/images/CT9529-062/CT8529-062.png'
        },
        {
            id: 3,
            name: 'Puma',
            model: 'Puma disc Blaze',
            price: 119,
            image: 'https://www.n-sport.net/UserFiles/products/big/03/23/muske-patike-puma-disc-blaze-362528-01-2.jpg'
        },
        {
            id: 4,
            name: 'Converse',
            model: 'All star',
            price: 59,
            image: 'https://nonstopshop.rs/wp-content/uploads/2018/10/02/32/3366523.jpg'
        },
        {
            id: 5,
            name: 'Adidas',
            model: 'Depurt Runners',
            price: 89,
            image: 'https://www.djaksport.com/image.aspx?imageId=152912'
        },
        {
            id: 6,
            name: 'Sergio Tacchini',
            model: 'Gran Torino',
            price: 79,
            image: 'https://img.ep-cdn.com/images/500/500/za/zafyivqphmqqamsxgznn.jpg'
        },
    ],
    
    idCart: 0,

    cart: [],

    findProduct: function(id){
        for(let i = 0; i < this.products.length; i++){
            if(this.products[i].id === +id){
                return this.products[i];
            }
        }
    }
}

export default data;