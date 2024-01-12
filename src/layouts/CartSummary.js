import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Dropdown, Label } from 'semantic-ui-react';

export default function CartSummary() {
    const { cartItems } = useSelector(state => state.cart);
    console.log(cartItems);
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
                        </Dropdown.Item>
                    ))}
                    <Dropdown.Divider />
                    <Dropdown.Item as={NavLink} to="/cart">Sepete Git</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
}
