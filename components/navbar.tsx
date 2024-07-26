import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import Link from "next/link";

const Nav = () => {
  return (
    <Navbar>
      <NavbarBrand>
        <p className="font-bold text-inherit text-xl">Ayoub Bijarche</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/">
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/portfolio" aria-current="page">
            Portfolio
          </Link>
        </NavbarItem>

      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} color="success" href="#" variant="flat">
            Hire me
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}

export default Nav;
