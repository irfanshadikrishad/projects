import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Project from "./Project";
import data from "./data";

ReactDOM.render(
  <div className="project">
    <h1 className="title container">.project()</h1>
    <div className="project-main container">
      {data.map((inx) => {
        return (
          <>
            <Project
              img={inx.img}
              title={inx.title}
              desc={inx.desc}
              link={inx.link}
              collab1={inx.collab1}
              collab2={inx.collab2}
            />
          </>
        );
      })}
    </div>
  </div>,
  document.getElementById("root")
);
