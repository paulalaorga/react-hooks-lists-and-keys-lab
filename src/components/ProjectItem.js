import React from "react";
import user from "../data/user";

function ProjectItem({ name, about, technologies }) {
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
      {technologies.map((technology, id) => (
          <span key={id}>{technology}</span>
          ))}
      </div>
    </div>
  );
}

export default ProjectItem;
