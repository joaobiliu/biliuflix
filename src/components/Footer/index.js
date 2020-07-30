import React from 'react';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.alura.com.br/">
        <img src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg" alt="Logo Alura" />
      </a>
      <p>
        Desenvolvido por  
        {' '}
        <a href="https://www.instagram.com/witorbiliu?r=nametag">João Witor</a> <br></br>
                Durante a Imersão React da Alura

      </p>
    </FooterBase>
  );
}

export default Footer;
