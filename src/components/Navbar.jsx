import React from "react";
import styled from "styled-components";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

export const Navbar = () => {

    return (
        <Container>
            <NavbarLogo>
                <img src={"https://bizmonthly.com/wp-content/uploads/2020/04/amazon-logo-black.png"} alt="amazon"/>
                <NavbarLogoSpan>.in</NavbarLogoSpan>
            </NavbarLogo>

            <NavbarAddresses>
                <LocationOnOutlinedIcon />
                <NavbarOption>
                    <AddressOptionOne>Hello</AddressOptionOne>
                    <AddressOptionTwo>Select your address</AddressOptionTwo>
                </NavbarOption>
            </NavbarAddresses>

            <NavbarSearch>
                <NavbarSearchInput type='text' />
                <NavbarSearchIcon>
                    <SearchIcon />
                </NavbarSearchIcon>
            </NavbarSearch>

            <NavbarItems>
                <NavbarFlag>
                    <img src="https://cdn.britannica.com/97/1597-004-05816F4E/Flag-India.jpg" alt="flag" />
                </NavbarFlag>
                <NavbarOption>
                    <AddressOptionOne>Hello, Dhruba</AddressOptionOne>
                    <AddressOptionTwo>Account & Lists</AddressOptionTwo>
                </NavbarOption>

                <NavbarOption>
                    <AddressOptionOne>Returns</AddressOptionOne>
                    <AddressOptionTwo>& Orders</AddressOptionTwo>
                </NavbarOption>

                <NavbarOptionCart>
                    <ShoppingCartOutlinedIcon />
                    <CartCount>5</CartCount>
                </NavbarOptionCart>
            </NavbarItems>
        </Container>
    )
}

const Container = styled.div`
    height: 60px;
    background-color: #131921;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
`

const NavbarLogo = styled.div`
    display: flex;
    img {
        width: 100px;
        margin-left: 11px;
    }
`

const NavbarLogoSpan = styled.div`
    
`

const NavbarAddresses = styled.div`
    padding-left: 9px;
    display: flex;
    align-items: center;
`

const AddressOptionOne = styled.div`
    
`

const AddressOptionTwo = styled.div`
    font-weight: 700;
`

const NavbarSearch = styled.div`
    display: flex;
    flex-grow: 1;
    height: 40px;
    border-radius: 5px;
    overflow: hidden;
    margin-left: 4px;
    background-color: white;
    :focus-within {
        box-shadow: 0 0 0 3px #F90;
    }
    
`

const NavbarSearchInput = styled.input`
    flex-grow: 1;
    border:0;
    :focus {
        outline: none;
    }
`

const NavbarSearchIcon = styled.div`
    background-color: #febd69;
    width:42px;
    color: black;
    display:flex;
    justify-content: center;
    align-items: center;
`

const NavbarItems = styled.div`
    display: flex;
`

const NavbarFlag = styled.div`
    padding-left: 4px;
    img {
        width:25px;
        padding: 22px 9px;
    }
    
`

const NavbarOption = styled.div`
    padding: 10px 9px;
`

const NavbarOptionCart = styled.div`
    display: flex;
    align-items: center;
    padding-right: 9px;

`

const CartCount = styled.div`
    padding-left: 4px;
`