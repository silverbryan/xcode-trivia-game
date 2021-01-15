import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 15px;

    .navbar__logo img {
        height: 60px;
    }

    .navbar__buttons {
        .btn-login {
            border: 1px solid #fff;
            background-color: #282A32;
            border-radius: 5px;
            padding: 10px 20px;
            color: #fff;
            font-size: 1.2em;
            outline: none;
            text-decoration: none;
        }
        .btn-signup {
            background-color: #0063E5;
            border-radius: 5px;
            padding: 10px 20px;
            margin-right: 10px;
            color: #fff;
            font-size: 1.2em;
            outline: none;
            text-decoration: none;
        }
    }
`;
const Navbar = () => {
    return (
        <Nav>
            <div className="navbar__logo">
                <img src="xcode.png" alt="xcode" />
            </div>
            <div className="navbar__buttons">
                <a className="btn-signup" href="http://">
                    <span>Registrate</span>
                </a>
                <a className="btn-login" href="http://">
                    <span>Login</span>
                </a>
            </div>
        </Nav>
    );
}

export default Navbar;