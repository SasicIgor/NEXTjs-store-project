import { Suspense } from "react";
import Container from "../global/Container";
import CartButton from "./CartButton";
import DropdownMenuToggle from "./DropdownMenu";
import Logo from "./Logo";
import NavSearch from "./NavSearch";

const Navbar = () => {
  return (
    <nav className="border-b">
      <Container className="flex flex-col sm:flex-row sm:justify-between sm:items-center flex-wrap py-8">
        <Logo />
        <Suspense>
          <NavSearch />
        </Suspense>
        <div className="flex gap-4 items-center">
          <CartButton />
          <DropdownMenuToggle type="theme" />
          <DropdownMenuToggle type="menu" />
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
