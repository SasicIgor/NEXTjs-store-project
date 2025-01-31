import { FaStoreAlt } from "react-icons/fa";
import { Button } from "../ui/button";
import Link from "next/link";

const Logo = () => {
  return (
    <Button size={"icon"} asChild>
      <Link href="/">
        <FaStoreAlt className="w-6 h-6 " />
      </Link>
    </Button>
  );
};

export default Logo;
