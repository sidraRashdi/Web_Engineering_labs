import React from "react";
import { useState } from "react";

function checkFriend(props) {
  const [name, setNames] = useState("");
  const [users, setUsers] = useState([]);
  const [Category, setCategory] = useState("");
  const category = {
    acha: "Acha",
    bura: "Bura",
  };
  const TypeOfFriend = (e) => {
    setCategory(e.target.value);
  };
  const Friends = (e) => {
    setNames(e.target.value);
  };
  return (
    <>
      <input type="text" placeholder="addFriend" onChange={Friends} />
      <select id="GoodBad" value={Category} onChange={TypeOfFriend}>
        <option value={category.acha}>{category.acha}</option>
        <option value={category.bura}>{category.bura}</option>
      </select>
      <button
        onClick={() => {
          setUsers((prev) => [...prev, { name, Category }]);
        }}
      >
        add
      </button>
      <br></br>
      Achay Dost:
      <ul>
        {users
          ?.filter((item) => item.Category === category.acha)
          ?.map((user, index) => (
            <li key={index} onClick={() => alert(index)}>
              {user.name} ({user.Category})
            </li>
          ))}
      </ul>
      <hr />
      Buray Dost:
      <ul>
        {users
          ?.filter((item) => item.Category === category.bura)
          ?.map((user, index) => (
            <li key={index} onClick={() => alert(index)}>
              {user.name} ({user.Category})
            </li>
          ))}
      </ul>
    </>
  );
}

export default checkFriend;
