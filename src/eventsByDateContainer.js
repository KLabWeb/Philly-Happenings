import React from "react";
import "./App.css";
import { EventsByDateCard } from "./eventsByDateCard";
import { BYMONTH, BYWEEK, BYDAY } from "./eventData";

export const EventsByDateCards = () => {
  return (
    <>
      <h1 id="events-by-month" className="category">Annual Events by Month</h1>
      <div className="dateCard">
        {BYMONTH.map(data => {
            return (
              <EventsByDateCard key={data.period} data={data} />
            );
        })}
      </div>

      <h1 id="events-by-week" className="category">Monthly Events by Week</h1>
      <div className="dateCard">
        {BYWEEK.map(data => {
            return (
              <EventsByDateCard key={data.period} data={data} />
            );
        })}
      </div>

      <h1 id="events-by-day" className="category">Weekly Events by Day</h1>
      <div className="dateCard">
        {BYDAY.map(data => {
            return (
              <EventsByDateCard key={data.period} data={data} />
            );
        })}
      </div>
  </>
  );
};

export default EventsByDateCards;
