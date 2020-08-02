import React from 'react';
import Logo from '../../assets/img/logo.png';
import './Header.css';
import { Link } from 'react-router-dom';
import Button from '../Button/Button'

const Header = () => {
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="GigiFlix" />
            </Link>
            {/* <Button as={Link} to="/cadastro/video">
                New Vídeo
            </Button> */}
        </nav>
    )
}

export default Header;