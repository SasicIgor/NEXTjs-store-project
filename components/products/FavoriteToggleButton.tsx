import { FaHeart } from "react-icons/fa";
import { Button } from "../ui/button";

const FavoriteToggleButton = () => {
  return (
    <Button size="icon" variant="outline" className="p-2 cursor-pointer">
      <FaHeart />
    </Button>
  );
};

export default FavoriteToggleButton;
