import React from "react";

import classes from './MealsSummary.module.css';

const Summary = (props) => {
  return (
    <section className={classes.summary}>
      <h2>Delicious Food, Delievered To You</h2>
      <p>
        Choose your favourite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home.
      </p>
      <p>
        All our meals are cooked with high-quality ingredients, just-in-time and
        of course by experienced chefs!
      </p>
    </section>
  );
};

export default Summary;