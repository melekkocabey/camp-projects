import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Button, Dropdown, Label } from 'semantic-ui-react';
import { removeFromCart } from '../store/actions/cartActions';

export default function CartSummary() {
    const { cartItems } = useSelector(state => state.cart);
    const dispatch = useDispatch();
    const removeItemFromCart = (productId) => {
        dispatch(removeFromCart(productId));
    };
    return (
        <div>
            <Dropdown item text='Sepetiniz'>
                <Dropdown.Menu>
                    {cartItems.map((cartItem, index) => (
                        <Dropdown.Item key={index}>
                            {cartItem.product.title}
                            <Label>
                                {cartItem.product.price}
                            </Label>
                            <Button onClick={() => removeItemFromCart(cartItem.product.id)}>
                                Sepetten Çıkar
                            </Button>
                        </Dropdown.Item>
                    ))}
                    <Dropdown.Divider />
                    <Dropdown.Item as={NavLink} to="/cart">Sepete Git</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
}
