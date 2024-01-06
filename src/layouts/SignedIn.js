import React from 'react'
import { Menu, Image, Dropdown } from 'semantic-ui-react'

export default function SignedIn({ signOut }) {
    return (
        <div>
            <Menu.Item>
                <Image avatar spaced="right" src="https://avatars.githubusercontent.com/u/18199300?s=400&u=8643c27ab18d9e6cff4be09c0a0da96ac30c397a&v=4"></Image>
                <Dropdown pointing="top left" text="Melek">
                    <Dropdown.Menu>
                        <Dropdown.Item text="Bigilerim" icon="info" />

                        <Dropdown.Item onClick={signOut} text="Çıkış Yap" icon="sign-out" />
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </div>
    )
}
