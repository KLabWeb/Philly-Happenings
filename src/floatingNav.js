import React from "react";
import "./App.css";
import { useState } from 'react';

export const FloatingNav = () => {
  const [currentSection, setCurrentSection] = useState(1);

  const sections = [
    'events-by-month',
    'events-by-week',
  ];

  const onClickPrevious = () => {
    if(currentSection > 0){
      setCurrentSection(currentSection + 1);
    }
  }

  const onClickNext = () => {
    if(currentSection < sections.length-1){
      setCurrentSection(currentSection + 1);
    }
  }

  return (
    <div id="floatingNav">
      <button><a href={`#${sections[currentSection-1]}`} onClick={onClickPrevious}>previous section</a></button>
      <button>index</button>
      <button><a href={`#${sections[currentSection+1]}`} onClick={onClickNext}>next section</a></button>
    </div>
  )
};

export default FloatingNav;
