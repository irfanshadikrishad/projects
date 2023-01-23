import React from "react";

function Project(props) {
  return (
    <a
      href={props.link}
      className="project-box"
      target="_blank"
      rel="noreferrer"
    >
      <img className="project-img" src={props.img} alt="project thumbnail" />
      <h4 className="project-title">{props.title}</h4>
      <p className="project-desc">{props.desc}</p>
      <h4 className="project-title">Collaborations:</h4>
      <div class="collab-main">
        <div class="collab">
          <img src={props.collab1} alt="collaborators" class="collab-img" />
        </div>

        <div class="collab collab-2">
          <img src={props.collab2} alt="collaborators" class="collab-img" />
        </div>
      </div>
    </a>
  );
}

export default Project;
