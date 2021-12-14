import React from 'react';

//Styled Components
import {Wrapper,Logo,Nav} from './Header.style';

const Header = () =>(
    <Wrapper>
        <Logo>Chopist</Logo>
        <Nav>
            <p> <b>Developer: </b> Adenekan Usman </p>
        </Nav>
    </Wrapper>
);


export default Header;

