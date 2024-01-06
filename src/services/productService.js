import axios from 'axios'
export class ProductService {
    getProducts() {
        return axios.get(`https://dummyjson.com/products`)
    }
    getByProductId(productId) {
        return axios.get(`https://dummyjson.com/products/${productId}`);
    }
}
//bu method return edecek 