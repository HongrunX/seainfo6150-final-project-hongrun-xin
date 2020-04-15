import React from "react";
import PropTypes from "prop-types";
import styles from "./SlugButton.module.css";
import { Link } from "react-router-dom";

const SlugButton = props => {
  return (
    <Link
      className={styles.slugButton}
      to={{
        pathname:"/Chinese/Food",
        state:{
          storeData:props
        }
      }}
    >
      {props.buttonText}
    </Link>
  );
};

SlugButton.propTypes = {
  buttonText: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired
};
export default SlugButton;
