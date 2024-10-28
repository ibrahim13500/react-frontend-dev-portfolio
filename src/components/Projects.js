import React, { Component } from "react";
import ProjectDetailsModal from "./ProjectDetailsModal";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deps: {},
      detailsModalShow: false,
    };
  }

  render() {
    const detailsModalShow = (data) => {
      this.setState({ detailsModalShow: true, deps: data });
    };

    const detailsModalClose = () => this.setState({ detailsModalShow: false });

    // Define default values to prevent undefined variables
    const sectionName = this.props.resumeBasicInfo
      ? this.props.resumeBasicInfo.section_name.projects
      : "Projects";
    
    const projects = this.props.resumeProjects
      ? this.props.resumeProjects.map((project) => {
          return (
            <div
              id="projects"
              className="col-sm-12 col-md-6 col-lg-4"
              key={project.title}
              style={{ cursor: "pointer" }}
              onClick={() => detailsModalShow(project)}
            >
              <span className="portfolio-item d-block">
                <div className="foto">
                  <div>
                    {project.coverImage && (
                      <img
                        src={`${process.env.PUBLIC_URL}/${project.coverImage}`}
                        alt={project.title}
                        height="230"
                        style={{
                          marginBottom: 0,
                          paddingBottom: 0,
                          position: "relative",
                          objectFit: "cover",
                          width: "100%",
                        }}
                      />
                    )}
                    <span className="project-date">{project.startDate}</span>
                    <br />
                    <p className="project-title-settings mt-3">
                      {project.title}
                    </p>
                  </div>
                </div>
              </span>
            </div>
          );
        })
      : []; // If resumeProjects is undefined, use an empty array

    return (
      <section id="portfolio">
        <div className="col-md-12">
          <h1 className="section-title" style={{ color: "black" }}>
            <span>{sectionName}</span>
          </h1>
          <div className="col-md-12 mx-auto">
            <div className="row mx-auto">{projects}</div>
          </div>
          <ProjectDetailsModal
            show={this.state.detailsModalShow}
            onHide={detailsModalClose}
            data={this.state.deps}
          />
        </div>
      </section>
    );
  }
}

export default Projects;
