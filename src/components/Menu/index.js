import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/Logoo.png'
import Button from '../Button';
import { LogoImage, MenuWrapper } from './style';

function Menu() {
    return(
        <MenuWrapper className="Menu">
            <Link to="/">
                <LogoImage className="Logo" src={Logo} alt="Biliuflix"/>
            </Link>

            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo Vídeo
            </Button>
        </MenuWrapper>
    );
}

export default Menu;