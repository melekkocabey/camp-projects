import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cartActions";
import { cartItems } from "../initialValues/cartItems";

const initialState = {
    cartItems: cartItems
}

export default function cartReducer(state = initialState, { type, payload }) {
    switch (type) {
        case ADD_TO_CART:
            let existingProduct = state.cartItems.find(c => c.product.id === payload.id);

            if (existingProduct) {
                existingProduct.quantity++;
                return {
                    ...state
                };
            } else {
                // Eğer ürün bulunamazsa, yeni bir öğe oluştur
                const newCartItem = {
                    product: payload,
                    quantity: 1
                };

                return {
                    ...state,
                    cartItems: [...state.cartItems, newCartItem]
                };
            }
        case REMOVE_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(c => c.product.id !== payload.id)
            }

        default:
            return state;
    }
}
