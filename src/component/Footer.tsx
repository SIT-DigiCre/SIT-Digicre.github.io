import React from 'react'
import { Navbar } from 'react-bootstrap'

const Footer: React.FC<Props> = () => {
    const footerStyle: Style = {
        height: "150px",
        backgroundColor: "#C6C6C6",
    }
    const copyrightStyle: Style = {
        backgroundColor: "#C6C6C6"
    }
    const imageStyle: Style = {
        paddingLeft: "50px"
    }
    const textStyle: Style = {
        paddingRight: "50px"
    }
    type Style = {
        [key: string]: string
    }

    return (
    <div>
    <Navbar style={footerStyle}>
        <Navbar.Brand style={imageStyle}>
            <img src='./logo-black.png' alt='logo-black' height={100}></img>
        </Navbar.Brand>
        <Navbar.Collapse className="justify-content-end" style={textStyle}>
            <Navbar.Text>
                デジクリへのご質問・ご相談は以下の連絡先でお願いします。<br></br>
                Twitter: @sitdigicre<br></br>
                メール: sitdigicrecircle@gmail.com
            </Navbar.Text>
        </Navbar.Collapse>
    </Navbar>
    <Navbar className="justify-content-center" style={copyrightStyle}>
        <Navbar.Brand>
            @ 2021 Digicre Shibaura Institute of Technology
        </Navbar.Brand>
    </Navbar>
    </div>
    )
}

type Props = {};

export default Footer;