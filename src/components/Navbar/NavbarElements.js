import styled from 'styled-components'

export const NavItem = styled.div `
    cursor: pointer;
    border: none;
    outline: none;
    font-size: 20px;
    padding: 0px 15px;
    
    &:after
    {
    position: relative;
    display: flex;
    content: "";
    width: 100%;
    height: 3px;
    top: 5%;
    left: 0;
    background: #000;
    transition: transform 0.5s;
    transform: scaleX(0);
    transform-origin: right;
    }
    &:hover::after {
    transform: scaleX(1);
    transform-origin: left;
    }
    
    @media screen and (max-width: 768px)
    {
        &:after{
            width: 13%;
        }
    }
`;


export const NavbarBtn = styled.button `
    background: #000;
    color: white;
    cursor: pointer;
    margin-top: 5px;
    display: flex;
    border: none;
    outline: none;
    white-space: nowrap;
    border-radius: 5px;
    padding: 0px 15px;

    @media screen and (max-width: 768px)
    {
        margin-left: 10px;
    }
`;

export const NavbarBrand = styled.h1 `
    font-weight: 900;
`;


// export const MDBH2 = styled.h2 `
//     color: #fff;
//     font-size: 50px;
//     font-weight: 700;
// `;

// export const MDBP = styled.p `
//     font-size: 20px;
// `

// export const EmailBtn = styled.button `
//     background: #DD0611;
//     color: white;
//     cursor: pointer;
//     border: none;
//     outline: none;
//     white-space: nowrap;
// `