import React from "react";
import Friend from "./Friend";
const list = [{ name: "", type: "" }];
let count = 0;
function ListOfFriends(props) {
  list.push((list.name = props.name), (list.type = props.type));
  return <div>{JSON.stringify(list)}</div>;
}

export default ListOfFriends;
