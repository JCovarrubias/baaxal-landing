import React, { useState } from 'react';
import * as styles from "./styles.module.scss"
import { Link } from "gatsby"

const MobileMenu = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [width, setWidth] = useState('50px');

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
    console.log(isOpen)
    isOpen ? setWidth('50px') : setWidth('100%')
  };

  const buttons = props.buttons
  console.log(buttons)
  return (
    <div className={styles.mobile_menu}>
      <button className={styles.menu_toggle} style={{ width }} onClick={handleMenuToggle}>
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