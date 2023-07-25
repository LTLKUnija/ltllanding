import styles from "@/styles/BurgerMenu.module.scss";
import Image from "next/image";
import BurgerMenu from "./BurgerMenu";

const Drawer = ({ isOpen, onClose }) => {
  const handleToggleBurgerMenu = () => {
    onClose(!isOpen);
  };

  return (
    <div>
      <Image
        src="/assets/images/burgerIcon.svg"
        width={20}
        height={20}
        alt="Menu"
        onClick={handleToggleBurgerMenu}
        className="burgerIcon"
      />
      <BurgerMenu isOpen={isOpen} onClose={onClose} />
    </div>
  );
};

export default Drawer;
