import React from "react";

import axios from "axios";
import { ListGroup, Badge, Button } from "react-bootstrap";

const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const expense = axios.create({
  baseURL: "https://expense-tracker-d9bd4-default-rtdb.firebaseio.com/expenses",
});

const ExpenseItem = (props) => {
  const date = new Date(props.date);

  const deleteButtonHandler = (e) => {
    props.onDelete(props.id, props._id);
  };

  const editButtonHandler = () => {
    props.onEdit({
      amount: props.amount,
      description: props.description,
      id: props.id,
      _id: props._id,
      date: props.date,
      category: props.category,
    });
  };

  return (
    <ListGroup.Item
      key={props.id}
      id={props.id}
      as="li"
      className="d-flex align-items-center gap-2 bg-dark text-white mb-1 rounded-4 border-info"
    >
      <div className="flex-fill flex-md-column w-100">
        <div className="d-flex justify-content-between align-items-center">
          <div
            className="d-none d-sm-block bg-info px-4 py-1 rounded-4 border-white"
            style={{ width: "100px" }}
          >
            <p className="text-center fs-6 p-0 m-0">
              {monthNames[date.getMonth()]}
            </p>
            <h2 className="text-center m-0t">{date.getDate()}</h2>
            <p className="text-center m-0">{date.getFullYear()}</p>
          </div>

          <h4 className="d-none d-sm-block">{props.description}</h4>

          <div className="d-sm-none">
            <Badge>{`${date.getDate()} - ${
              monthNames[date.getMonth()]
            } - ${date.getFullYear()}`}</Badge>
            <p >{props.description}</p>
          </div>

          <div className="d-flex flex-column pt-3 text-center">
            <Badge pill bg="success fw-bold">
              ₹{props.amount}
            </Badge>
            <p className="fw-lighter">{props.category}</p>
          </div>
        </div>
      </div>

      <div>
        <div className="d-flex flex-column gap-1">
          <Button
            variant="danger"
            className="p-0"
            style={{ width: "3rem", fontSize: "10px", height: "20px" }}
            onClick={deleteButtonHandler}
          >
            Delete
          </Button>
          <Button
            variant="outline-success"
            className="p-0"
            style={{ width: "3rem", fontSize: "10px", height: "20px" }}
            onClick={editButtonHandler}
          >
            Edit
          </Button>
        </div>
      </div>
    </ListGroup.Item>
  );
};

export default ExpenseItem;