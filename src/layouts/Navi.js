import React, { useState } from 'react'
import { Container, Menu } from 'semantic-ui-react'
import CartSummary from './CartSummary'
import SignedOut from './SignedOut'
import SignedIn from './SignedIn'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux'


function Navi() {
    const { cartItems } = useSelector(state => state.cart)
    console.log(cartItems);
    const [isAuthenticated, setIsAuthenticated] = useState(true);
    const navigate = useNavigate();

    function handleSignout(params) {
        setIsAuthenticated(false);
        navigate(-1);
    }
    function handleSignIn(params) {
        setIsAuthenticated(true);
        navigate(1);
    }
    return (
        <div>
            <Menu inverted fixed="top">
                <Container>
                    <Menu.Item as={Link} to="/" name='home' />
                    <Menu.Item as={Link} to="/message" name='messages' />

                    <Menu.Menu position='right'>
                        {cartItems.length > 0 && <CartSummary />}
                        {isAuthenticated ? <SignedIn signOut={handleSignout} bisey="1" /> : <SignedOut signIn={handleSignIn} />}

                    </Menu.Menu>
                </Container>
            </Menu>
        </div>
    )
}

export default Navi