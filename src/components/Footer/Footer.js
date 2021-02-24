import React from 'react'
import {Container} from 'semantic-ui-react'
import './Footer.css'

export default function Footer() {
    return (
        <Container className='footer' textAlign='center'>
            <h3>Copyright 2020 by Mike Fallesen</h3>
            <p>This app is a rework of an earlier project. The original project can be found here at: <a href='https://mfallesen.github.io/plannerly/'>https://mfallesen.github.io/plannerly/</a></p>
        </Container>
    )
}
