import React from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'
export default function Kategoriler() {
    return (
        <div>
            <Menu pointing vertical>
                <Menu.Item
                    name='home' as={Link} to="/" />
                <Menu.Item name='messages' />
                <Menu.Item name='friends' />
            </Menu>
        </div>
    )
}
