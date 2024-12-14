import styled from "styled-components";
import MainLogo from "../../assets/svg/Logo";
import { Drawer } from "antd";

export const NavbarContainer = styled.div`
  width: 100%;
  height: 80px;
  align-items: center;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  color: #fff;

  @media (max-width: 768px) {
    padding: 10px 15px;

    > .btn {
      display: none;
    }
  }
`;

export const Logo = styled(MainLogo)`
  cursor: pointer;
  width: 100%;
`;

export const LogoContainer = styled.div`
  cursor: pointer;
  width: 250px;

  @media (max-width: 768px) {
    width: 120px;
  }
`;

export const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Link = styled.a`
  font-family: "Nunito Sans", sans-serif;
  font-weight: 700;
  font-size: 18px;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  color: ${({ active }) =>
    active === "true" ? "rgba(84, 84, 212, 1)" : "rgba(255, 255, 255, 0.7)"};

  &:hover {
    color: rgba(84, 84, 212, 1);
  }
`;

export const BurgerMenuButton = styled.div`
  display: none;
  font-size: 24px;
  color: #fff;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const MobileWrapper = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }

  @media (max-width: 600px) {
    gap: 10px;
  }
`;

export const BurgerMenuLinks = styled(Drawer)`
  display: flex;
  flex-direction: column;
`;
export const BurgerLink = styled.a`
  display: block;
  margin: 20px 0;

  font-family: "Nunito Sans", sans-serif;
  font-weight: 700;
  font-size: 18px;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  color: ${({ active }) =>
    active === "true" ? "rgba(84, 84, 212, 1)" : "rgba(255, 255, 255, 0.7)"};

  &:hover {
    color: rgba(84, 84, 212, 1);
  }
`;
