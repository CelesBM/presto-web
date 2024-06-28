import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const HeaderContainerStyled = styled.header`
  background: rgb(235, 235, 235);
  background: linear-gradient(
    180deg,
    rgba(235, 235, 235, 1) 0%,
    rgba(230, 220, 241, 1) 69%,
    rgba(238, 225, 252, 1) 83%,
    rgba(199, 180, 219, 1) 90%,
    rgba(166, 143, 192, 1) 95%,
    rgba(80, 49, 123, 1) 100%
  );
  width: 100%;
  height: 70px;
  text-align: center;
  justify-content: center;
  padding: 8px 5px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;

  @media (min-width: 768px) {
    height: 100px;
  }
`;

export const NavbarContainerStyled = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  padding: 0px 10px;

  @media (min-width: 500px) {
    padding: 0px 15px;
  }

  @media (min-width: 768px) {
    padding: 0px 20px;
  }

  @media (min-width: 1020px) {
    padding: 0px 30px;
  }

  img {
    width: 60px;
    border-radius: 4rem;
  }

  @media (min-width: 500px) {
    img {
      width: 90px;
    }
  }

  @media (min-width: 768px) {
    img {
      width: 120px;
    }
  }
`;

export const LinksContainerStyled = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  justify-content: center;

  @media (min-width: 1020px) {
    gap: 40px;
  }
`;

//DESDE ACA VER
export const LinkContainerStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const IconStyled = styled.div`
  color: #6b4996;
`;

export const IconShopStyled = styled.div`
  color: #6b4996;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3px;
  margin-bottom: 5px;

  @media (min-width: 450px) {
    margin-bottom: 10px;
    font-size: 25px;
  }

  @media (min-width: 500px) {
    margin-bottom: 15px;
    font-size: 30px;
  }

  @media (min-width: 768px) {
    margin-bottom: 5px;
    font-size: 18px;
  }

  @media (min-width: 1020px) {
    font-size: 20px;
  }
`;

export const IconNumber = styled.div`
  background-color: #7c7c76;
  padding: 2px;
  border-radius: 5px;
  color: black;
  font-weight: bold;
  font-size: 10px;

  @media (min-width: 500px) {
    padding: 3px;
    font-size: 11px;
  }

  @media (min-width: 768px) {
    padding: 1px 3px;
    font-size: 10px;
  }

  @media (min-width: 1020px) {
    font-size: 12px;
  }
`;

export const SpanStyled = styled.div`
  color: #6b4996;
  font-weight: bold;
  text-shadow: 1px 1px 10px rgba(255, 255, 255, 0.1);

  @media (min-width: 768px) {
    font-size: 14px;
  }

  @media (min-width: 1020px) {
    font-size: 16px;
  }
`;

export const CartCounter = styled.span`
  position: absolute;
  top: -8px;
  right: -8px;
  background-color: red;
  color: white;
  font-size: 12px;
  padding: 4px;
  border-radius: 50%;
`;

export const HamburguerStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  color: #6b4996;

  @media (min-width: 450px) {
    font-size: 40px;
  }

  @media (min-width: 500px) {
    font-size: 50px;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

export const LinkStyled = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  color: black;
`;

export const LinkHamburguerStyled = styled.span`
  text-decoration: none;
  cursor: pointer;
  color: #6b4996;
`;

export const LinkHamburguerContainerStyled = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 100%;
  border-bottom-left-radius: 20px;
  position: absolute;
  top: 70px;
  right: 0px;
  background-color: #dbc7df;
  padding: 20px;
  z-index: 100;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const ItemHamburguerMenuStyled = styled.div`
  font-size: 14px;
  font-weight: bold;
  text-shadow: 1px 1px 10px rgba(255, 255, 255, 0.1);
`;

export const MotionDivStyled = styled(motion.div)`
  display: flex;
  gap: 8px;
  align-items: center;
`;
