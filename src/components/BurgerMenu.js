import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import styles from "@/styles/BurgerMenu.module.scss";

function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleOutsideClick = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div ref={menuRef} className={`burger-menu-toggle ${isOpen ? "open" : ""}`}>
      <input
        type="checkbox"
        id="menu-toggle-checkbox"
        checked={isOpen}
        readOnly
      />
      <label htmlFor="menu-toggle-checkbox" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </label>
      <ul className="menu">
        <li>
          <Link className={styles.burgerLink} href="/payments">
            Payment
          </Link>
        </li>
        <li>
          <Link className={styles.burgerLink} href="/credits">
            Credit
          </Link>
        </li>
        <li>
          <Link className={styles.burgerLink} href="deposits">
            Deposit
          </Link>
        </li>
        <li>
          <Link className={styles.burgerLink} href="/contacts">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default BurgerMenu;
