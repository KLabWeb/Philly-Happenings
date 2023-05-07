import React from "react";
import "./App.css";

export const EventsByDateCard = props => {
  return (
    <div key={Math.random()}>
      {props.data.period && <h2 className="dateTitle">{props.data.period}</h2>}
      <ul className="periodList">
        {props.data.events.map(data => {
            return (
              <li key={data} className="dateItem">{data}</li>
            );
        })}
      </ul>
    </div>
  )
};

export default EventsByDateCard;
