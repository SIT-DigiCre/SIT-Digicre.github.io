import { isAbsolute } from 'path'
import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import ContentBlock from './ContentBlock'

const Footer: React.FC<Props> = (props) => {
    const footerStyle: FooterStyle = {
        height: "150px",
        backgroundColor: "#C6C6C6"
    }
    type FooterStyle = {
        [key: string]: string
    }
    
    return (
    <Navbar variant="dark" style={footerStyle}>
        <Navbar.Brand><img src='./logo-black.png' alt='logo-black' height={100} /></Navbar.Brand>
    </Navbar>
    )
}

type Props = {};

export default Footer;