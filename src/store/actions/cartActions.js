export const ADD_TO_CART = "ADD_TO_CART"
export const REMOVE_FROM_CART = "ADD_TO_CART"

export function addToCart(product) {
    return {
        type: ADD_TO_CART,
        payload: product
    }
}
//sepet ile ilgili aksiyonlar
//(reducerslara gönderdiğin operasyonlar)
//bir aksiyon yaptığında obje gönder return ile objeyi gönderiyoruz
//objenin içinde aksiyon ismi olsun
//aksiyonla beraber state etkileyecek veri

export function removeFromCart(product) {
    return {
        type: REMOVE_FROM_CART,
        payload: product
    }
}