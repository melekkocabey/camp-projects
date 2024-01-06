import React from 'react'
import { Button, Menu } from 'semantic-ui-react'

export default function SignedOut({ signIn }) {
    return (
        <div>
            <Menu.Item>
                <Button content="Giriş Yap" onClick={signIn} primary ></Button>
                <Button content="Kayıt Ol" primary style={{ marginLeft: "0.5em" }}></Button>
            </Menu.Item>

        </div >
    )
}
