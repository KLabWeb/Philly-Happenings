import React from "react";
import "./App.css";

export const ForagingByDateCard = props => {
  return (
    <div key={props.key} className="forageCard">
      <ul className="forageList">
        {props.data.map(data => {
            return (
              <li key={Math.random()} className="forageItem">{data}</li>
            );
        })}
      </ul>
    </div>
  )
};

export default ForagingByDateCard;
