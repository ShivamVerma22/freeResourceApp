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
     <div className="container">
      <h1 className="heading">JavaScript</h1>
        <h2 className="subheading">Free Learning Resources</h2>
        {resourceTypeArray.map((type) => {
          return <button className="btnType" onClick={() => resourceTypeChange(type)}>{type}</button>;
        })}
        <hr />
        {resourceList.map((data) => {
          return (
            <div className="content">
              <p className="content__name">{data.name}</p>
              <a className="content__link"href={data.link}><span>👉🌐</span></a>
            </div>
          );
        })}
     </div>
    </div>
  );
}
