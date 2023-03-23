import React from "react";
import classes from "./Header.module.css"
import mealImage from "../../assests/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <>
    <header className= {classes.header}> 
    <h1> React Meals</h1>
    <HeaderCartButton onClick={props.onShowCart}/>
    </header>
    <div className={classes['main-image']}>
    <img src={mealImage} alt=" A table of some delicious food" />
    </div>
    </>
  );
};

export default Header;
