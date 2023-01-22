import React from "react";
import "./App.css";
import { EventsByDateCard } from "../eventsByDateCard";
import { BYMONTH, BYWEEK, BYDAY } from "../eventData";

export const EventsByDate = props => {
  return (
    <>
      <div className="header">
        <h1 className="pageTitle">Philly Happenings</h1>

        <h1 className="category">Recurring Events by Date</h1>
        <div className="headerIndex">
          <a href="#events-by-month">Annual Events by Month</a>
          <a href="#events-by-week">Monthly Events by Week</a>
          <a href="#events-by-day">Weekly Events by Day</a>
        </div>
      </div>

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
  )
};

export default EventsByDate;
