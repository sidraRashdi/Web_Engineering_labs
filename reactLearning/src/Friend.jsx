import React from "react";
import faker from "faker";
import "./friend.css";
import { useState, useEffect } from "react";
import ListOfFriends from "./ListOfFriends";
const generatedNames = Array.from({ length: 10 }, () => faker.name.findName());
function Friend(props) {
  //   const fakeNames = [
  //     faker.name.findName(),
  //     faker.name.findName(),
  //     faker.name.findName(),
  //     faker.name.findName(),
  //     faker.name.findName(),
  //   ];
  // const [fakeNames, setFakeNames] = useState([]);
  // useEffect(() => {
  // const generatedNames = Array.from({ length: 10 }, () =>
  //   faker.name.findName()
  // );
  const arr = generatedNames;
  // setFakeNames(generatedNames);
  // }, []);
  const [selectedOpt, setselectedOpt] = useState("");
  const selectOption = (e) => {
    setselectedOpt(e.target.value);
  };
  const [typeOfFriend, settypeOfFriend] = useState("");
  const TypeOfFriend = (e) => {
    settypeOfFriend(e.target.value);
  };

  return (
    //  const names= fetch()
    <>
      <div className="dropDown">
        <div className="goodBadFrnd">
          <select id="GoodBad" onChange={TypeOfFriend}>
            <option value="Good">Good</option>
            <option value="Bad">Bad</option>
          </select>
          {typeOfFriend}
        </div>
        <div className="NamesOfFrnd">
          <select id="Names" onChange={selectOption}>
            {arr.map((Name, index) => (
              <option value={index}>{Name}</option>
            ))}
          </select>
        </div>
      </div>
      <button
        onClick={
          <ListOfFriends
            size={arr.length}
            name={arr[selectedOpt]}
            type={typeOfFriend}
          />
        }
      >
        add
      </button>
    </>
  );
}

export default Friend;
