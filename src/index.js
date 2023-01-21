import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Project from "./Project";
import p1 from "./img/p-2.png";
import collab1 from "./img/collab-1.jpg";
import collab2 from "./img/collab-2.jpg";

ReactDOM.render(
  <div className="project">
    <h1 className="title container">.project()</h1>
    <div className="project-main container">
      <Project
        img={p1}
        title="A Portfolio Website"
        desc="A portfolio website for a ui/ux designer."
        link="https://itsamuhaimin.github.io"
        collab1={collab1}
        collab2={collab2}
      />
    </div>
  </div>,
  document.getElementById("root")
);
