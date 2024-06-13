import React, { useState } from 'react';
import * as styles from "./styles.module.scss"
import { Link } from "gatsby"

const MobileMenu = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  const buttons = props.buttons

  return (
    <div className={styles.mobile_menu}>
      <button className={styles.menu_toggle} onClick={handleMenuToggle}>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </button>

      {isOpen && (<div className={styles.menu_items}>

            {
                buttons.map((data, index) =>
                    <Link
                        to={ data.linkTo }
                        key={index}
                        onClick={handleMenuToggle}
                        className={styles.menuLink}
                    >
                        <p>{ data.name }</p>
                    </Link>
                )
            }

        </div>
      )}
    </div>
  );
};

export default MobileMenu;