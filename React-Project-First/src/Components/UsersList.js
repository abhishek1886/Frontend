import React from "react";

import classes from "./UsersList.module.css";
import Card from "../UI/Card";

const UsersList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {`${user.name} (${user.age}) ${user.collegeName}`}
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
