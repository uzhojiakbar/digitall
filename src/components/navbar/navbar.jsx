import React, { useEffect, useState } from "react";
import { Drawer, Button as AntButton } from "antd";
import {
  CloseCircleFilled,
  CloseCircleOutlined,
  CloseOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import {
  Link,
  Links,
  Logo,
  LogoContainer,
  NavbarContainer,
  BurgerMenuButton,
  MobileWrapper,
  BurgerMenuLinks,
  BurgerLink,
} from "./style";
import Button from "../generics/button/button";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [hash, setHash] = useState(window.location.hash);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      setHash(window.location.hash);
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const nav = useNavigate("");

  const toHome = () => {
    nav("/");
  };

  return (
    <NavbarContainer>
      <LogoContainer onClick={toHome}>
        <Logo />
      </LogoContainer>

      {/* Links for Desktop */}
      <Links>
        <Link active={(hash === "#1").toString()} href="#1">
          Asosiy
        </Link>
        <Link active={(hash === "#2").toString()} href="#2">
          Xizmatlar
        </Link>
        <Link active={(hash === "#3").toString()} href="#3">
          Loyihalar
        </Link>
        <Link active={(hash === "#4").toString()} href="#4">
          Biz haqimizda
        </Link>
      </Links>

      <BurgerMenuLinks
        title={
          <LogoContainer onClick={toHome}>
            <Logo />
          </LogoContainer>
        }
        closeIcon={<CloseOutlined color="white" style={{ color: "white" }} />}
        placement="right"
        onClose={toggleDrawer}
        open={isDrawerOpen}
        style={{ background: "#19191b", color: "white" }}
      >
        <BurgerLink
          active={(hash === "#1").toString()}
          href="#1"
          onClick={toggleDrawer}
        >
          Asosiy
        </BurgerLink>
        <BurgerLink
          active={(hash === "#2").toString()}
          href="#2"
          onClick={toggleDrawer}
        >
          Xizmatlar
        </BurgerLink>
        <BurgerLink
          active={(hash === "#3").toString()}
          href="#3"
          onClick={toggleDrawer}
        >
          Loyihalar
        </BurgerLink>
        <BurgerLink
          active={(hash === "#4").toString()}
          href="#4"
          onClick={toggleDrawer}
        >
          Biz haqimizda
        </BurgerLink>
      </BurgerMenuLinks>

      <Button className="btn" text="Bog'lanish" />

      <MobileWrapper>
        <Button text="Bog'lanish" />

        {/* Burger Menu for Mobile */}
        <BurgerMenuButton onClick={toggleDrawer}>
          <MenuOutlined />
        </BurgerMenuButton>
      </MobileWrapper>
    </NavbarContainer>
  );
};

export default Navbar;
