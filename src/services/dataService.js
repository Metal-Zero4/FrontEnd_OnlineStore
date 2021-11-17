const data = [
    {
        "_id": "1023",
        "title": "Bee Sticker",
        "category": "Stickers",
        "image": "bee-sticker.jpg",
        "price": 2.32,
        "stock": 5,
        "minimum": 1,
    },
    {
        "_id": "1024",
        "title": "Dual Wield Sticker",
        "category": "Stickers",
        "image": "dual-wield-sticker.jpg",
        "price": 2.32,
        "stock": 2,
        "minimum": 1,
    },
    {
        "_id": "1025",
        "title": "Bee Hoodie",
        "category": "Hoodies",
        "image": "bee-hoodie.jpg",
        "price": 26.82,
        "stock": 7,
        "minimum": 1,
    },
    {
        "_id": "1026",
        "title": "Make It Work Hoodie",
        "category": "Hoodies",
        "image": "make-it-work-hoodie.jpg",
        "price": 26.82,
        "stock": 6,
        "minimum": 1,
    },
    {
        "_id": "1027",
        "title": "Fortunate Son Hoodie",
        "category": "Hoodies",
        "image": "fortunate-son-hoodie.jpg",
        "price": 26.82,
        "stock": 9,
        "minimum": 1,
    },
    {
        "_id": "1028",
        "title": "Dual Wield Racerback",
        "category": "Shirts",
        "image": "dual-wield-racerback-tank.jpg",
        "price": 19.20,
        "stock": 7,
        "minimum": 1,
    },
    {
        "_id": "1029",
        "title": "Bee Tank",
        "category": "Shirts",
        "image": "bee-tank.jpg",
        "price": 23.80,
        "stock": 10,
        "minimum": 1,
    },
];




class DataService{
    getCatalog(){
    // To-do: call the server to retrieve the catalog

    //work with mock data (temporal)
    return data;
    }
    
    saveProduct(){}

    login(){}
}

export default DataService;