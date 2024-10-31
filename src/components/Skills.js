import React, { Component } from "react";

class Skills extends Component {
  render() {
    // Destructure props for easier access
    const { sharedSkills, resumeBasicInfo } = this.props;

    // Initialize sectionName and skills to prevent errors
    const sectionName = resumeBasicInfo?.section_name?.skills || "Skills"; // Fallback to "Skills"
    const skills = sharedSkills?.icons?.map((skill, i) => (
      <li className="list-inline-item mx-3" key={i}>
        <span>
          <div className="text-center skills-tile">
            <i className={skill.class} style={{ fontSize: "220%" }}>
              <p className="text-center" style={{ fontSize: "30%", marginTop: "4px" }}>
                {skill.name}
              </p>
            </i>
          </div>
        </span>
      </li>
    )) || <li>No skills available</li>; // Fallback when no skills are available

    return (
      <section id="skills">
        <div className="col-md-12">
          <div className="col-md-12">
            <h1 className="section-title">
              <span className="text-white">{sectionName}</span>
            </h1>
          </div>
          <div className="col-md-12 text-center">
            <ul className="list-inline mx-auto skill-icon">{skills}</ul>
          </div>
        </div>
      </section>
    );
  }
}

export default Skills;
