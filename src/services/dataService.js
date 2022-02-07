import axios from "axios"
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




class DataService {
    async getCatalog() {
      // TODO: call the servicer to retrieve the catalog
      let resp = await axios.get("http://127.0.0.1:5000/api/catalog");
      return resp.data;
  
      // work with mock data (temporal information)
      //return data;
    }
    async getCategories() {
      let resp = await axios.get("http://127.0.0.1:5000/api/products/categories");
      return resp.data;
    }
  
    async submitOrder(order) {
      let response = await axios.post("http://127.0.0.1:5000/api/order", order);
      return response.data;
    }
  }
  export default DataService;
  