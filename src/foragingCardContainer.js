import React from "react";
import "./App.css";
import { ForagingByDateCard } from "./foragingByDateCard";
import { FORAGINGBYDATE } from "./foragingData";

export const ForagingByDateCards = () => {
  return (
    <>
      <div className="foragingCardContainer">
        {FORAGINGBYDATE.map(data => {
            return (
              <ForagingByDateCard key={data.type} data={data} />
            );
        })}
      </div>
  </>
  );
};

export default ForagingByDateCards;
