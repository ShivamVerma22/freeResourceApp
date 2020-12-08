import React, { useState } from "react";
import "./styles.css";
import resourceData from "./appData";

export default function App() {
  const [resourceType, setResourceType] = useState("youtube");

let resourceList = resourceData[resourceType];

  const resourceTypeArray = Object.keys(resourceData);

  function resourceTypeChange(type) {
    setResourceType(type);
  }

  return (
    <div className="App">
      <h1>JavaScript</h1>
      <h2>Free Learning Resources</h2>
      {resourceTypeArray.map((type) => {
        return <button onClick={() => resourceTypeChange(type)}>{type}</button>;
      })}
      {resourceList.map((data) => {
        return (
          <div>
            <p>{data.name}</p>
            <a href={data.link}>Link</a>
          </div>
        );
      })}
    </div>
  );
}
