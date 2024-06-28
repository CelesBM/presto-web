import React from "react";
import { motion } from "framer-motion";
import { useAppMenuContext } from "../../Context/ContextMenu";
import {
  HeaderContainerStyled,
  NavbarContainerStyled,
  LinksContainerStyled,
  LinkContainerStyled,
  IconStyled,
  HamburguerStyled,
} from "./HeaderStyles";
import { HamburguerMenu } from "../hamburguerMenu/HamburguerMenu";
import { IoIosRestaurant } from "react-icons/io";

const Header = () => {
  const { isMenuOpen, toggleMenu } = useAppMenuContext(); // Context para abrir el menú hamburguesa

  const handleMenuToggle = () => {
    toggleMenu();
    if (isMenuOpen) {
      toggleMenu(); // Cierra el carrito si está abierto al abrir el menú
    }
  };

  return (
    <HeaderContainerStyled>
      <NavbarContainerStyled>
        <div>
          <img src="logo.jpeg" alt="Logo" />
        </div>
        <LinksContainerStyled>
          <HamburguerStyled onClick={handleMenuToggle}>
            <motion.div whileTap={{ scale: 1.2 }}>
              <IoIosRestaurant />
            </motion.div>
          </HamburguerStyled>
          {isMenuOpen && <HamburguerMenu />}
        </LinksContainerStyled>
      </NavbarContainerStyled>
    </HeaderContainerStyled>
  );
};

export default Header;

/* HEADER 



  .presto-img {
    height: 70px;
    width: 70px;
    border-radius: 2rem;
    border-collapse: separate;
  }
  
 
  

  
  #menu-toggle:checked ~ .navbar {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    background-color: #dbc7df;
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
    max-height: 200px;
    transition: max-height 3s ease-out;
    overflow: hidden;
  }
  
  .navbar ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  @media (min-width: 768px) {
    .navbar ul {
      display: flex;
      justify-content: flex-end;
      gap: 80px;
    }
  }
  
  .navbar li {
    padding: 10px;
  }
  
  .navbar li a {
    font-size: 14px;
    color: #50317b;
    text-decoration: none;
    --clippy: polygon(0 0, 0 0, 0 100%, 0% 100%);
  }
  
  .navbar li a::after {
    content: "";
    display: block;
    background-color: #6b4996;
    width: 100%;
    margin-top: 3px;
    height: 1px;
    clip-path: var(--clippy);
    transition: clip-path 0.7s;
  }
  
  .navbar li a:hover {
    --clippy: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  }
  
  @media (min-width: 768px) {
    .navbar li a {
      font-size: 16px;
    }
  }*/
