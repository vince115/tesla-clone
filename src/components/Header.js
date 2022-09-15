import React, { useState } from "react";
import styled from "styled-components";
import { selectCars } from "../features/car/carSlice";
import { useSelector } from "react-redux";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

export default function Header() {
    const [burgerStatus, setBurgerStatus] = useState(false);
    const cars = useSelector(selectCars);
  return (
    <Container>
    <a href="/">
      <img src="/images/logo.svg" alt="" />
    </a>
    <Menu>
   
    {cars &&
        cars.map((car, index) => (
            <a href="/" key={index}>
              {car}
            </a>
        ))}
    </Menu>
    <RightMenu>
      <a href="/">Shop</a>
      <a href="/">Account</a>
      <CustomMenu
        onClick={() => {
          setBurgerStatus(true);
        }}
      />
    </RightMenu>
    <BurgerNav show={burgerStatus}>
      <CustomClose
        onClick={() => {
          setBurgerStatus(false);
        }}
      />
      {cars &&
        cars.map((car, index) => (
          <li key={index}>
            <a href="/" key={index}>
              {car}
            </a>
          </li>
        ))}
      <li>
        <a href="/">Existing Inventory</a>
      </li>
      <li>
        <a href="/">Used Inventory</a>
      </li>
      <li>
        <a href="/">Cybertruck</a>
      </li>
      <li>
        <a href="/">Roadster</a>
      </li>
    </BurgerNav>
  </Container>
  )
}

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  min-height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  z-index: 1;
`;

const Menu = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex: 1;

a {
  font-weight: 600;
  padding: 0 10px;
  flex-wrap: nowrap;
  text-decoration: none;
}
a:visited {
    color: black;
}
a:hover {
    color: red;
    text-decoration: underline;
}

@media (max-width: 768px) {
  display: none;
}
`;

const RightMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: 10px;
    a {
        font-weight: 600;
        text-transform: uppercase;
        margin-right: 10px;
        text-decoration: none;
    }
    a:visited {
        color: black;
    }
    a:hover {
        color: red;
        text-decoration: underline;
    }
`;

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.3s ease-in-out;
  li {
    padding: 0 15px 10px 0px;
    a {
      font-weight: 600;
      text-decoration: none;
      display: inline-block;
      padding:10px 0 10px 15px;
    }
    a:visited {
        color: black;
    }
    a:hover {
       background-color:#EEE;
       border-radius: 5px;
       width:100%;
    }
  }
  
  z-index: 10;
`;

const CustomClose = styled(CloseIcon)`
  align-self: end;
  cursor: pointer;
  margin-right: 10px;
`;
