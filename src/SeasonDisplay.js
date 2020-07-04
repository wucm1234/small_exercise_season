import './SeasonDisplay.css';
import React from "react";

const seasonConfig = {
  summer: { text: "Let's hit the beach", iconName: "sun" },
  winter: { text: "Burr, it is chilly", iconName: "snowflake" },
};

const getSeason = (lat, month) => {
  console.log(lat);
  console.log(month);
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const t = seasonConfig[season].text;
  const i = seasonConfig[season].iconName;

  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${i} icon`} />
      <h1>{t}</h1>
      <i className={`icon-right massive ${i} icon`} />
    </div>
  );
};

export default SeasonDisplay;
