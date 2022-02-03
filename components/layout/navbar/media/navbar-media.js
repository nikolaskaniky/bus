import React from "react";
import classes from "./navbar-media.module.scss";
import { GrClose } from "react-icons/gr";

const NavbarMedia = (props) => {
  const { onClose, motion } = props;

  return (
    <motion.div
      className={classes["navbar-media"]}
      initial={{ opacity: 0, transform: `translateX(100%)` }}
      animate={{ opacity: 1, transform: `translateX(0%)` }}
      exit={{ opacity: 0, transform: `translateX(100%)` }}
      transition={{duration: 0.4}}
    >
      {/* <GrClose className={classes["close-svg"]} onClick={onClose} /> */}
      <h1>navbar media</h1>
    </motion.div>
  );
};

export default NavbarMedia;
