import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import AwesomeSlider from "react-awesome-slider";
import AwesomeSliderStyles from "../scss/light-slider.scss";
import AwesomeSliderStyles2 from "../scss/dark-slider.scss";
import "react-awesome-slider/dist/custom-animations/scale-out-animation.css";

class ProjectDetailsModal extends Component {
  render() {
    // Vérification que data existe et n'est pas vide
    const { data } = this.props;
    if (data) {
      const { title, description, url, images = [], technologies = [] } = data; // Valeurs par défaut pour images et technologies

      // Vérification et affichage des technologies
      const tech = technologies.map((icon, i) => (
        <li className="list-inline-item mx-3" key={i}>
          <div className="text-center">
            <i className={icon.class} style={{ fontSize: "300%" }}>
              <p className="text-center" style={{ fontSize: "30%" }}>
                {icon.name}
              </p>
            </i>
          </div>
        </li>
      ));

      // Vérification et affichage des images
      const img = images.map((elem, i) => (
        <div key={i} data-src={process.env.PUBLIC_URL + "/" + elem} />
      ));

      return (
        <Modal
          {...this.props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          className="modal-inside"
        >
          <span onClick={this.props.onHide} className="modal-close">
            <i className="fas fa-times fa-3x close-icon"></i>
          </span>
          <div className="col-md-12">
            <div className="col-md-10 mx-auto" style={{ paddingBottom: "50px" }}>
              <div className="slider-tab">
                <span
                  className="iconify slider-iconfiy"
                  data-icon="emojione:red-circle"
                  data-inline="false"
                  style={{ marginLeft: "5px" }}
                ></span>{" "}
                &nbsp;{" "}
                <span
                  className="iconify slider-iconfiy"
                  data-icon="twemoji:yellow-circle"
                  data-inline="false"
                ></span>{" "}
                &nbsp;{" "}
                <span
                  className="iconify slider-iconfiy"
                  data-icon="twemoji:green-circle"
                  data-inline="false"
                ></span>
              </div>
              <AwesomeSlider
                cssModule={[AwesomeSliderStyles, AwesomeSliderStyles2]}
                animation="scaleOutAnimation"
                className="slider-image"
              >
                {img}
              </AwesomeSlider>
            </div>
            <div className="col-md-10 mx-auto">
              <h3 style={{ padding: "5px 5px 0 5px" }}>
                {title}
                {url && (
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-href"
                  >
                    <i className="fas fa-external-link-alt" style={{ marginLeft: "10px" }}></i>
                  </a>
                )}
              </h3>
              <p className="modal-description">{description}</p>
              <div className="col-md-12 text-center">
                <ul className="list-inline mx-auto">{tech}</ul>
              </div>
            </div>
          </div>
        </Modal>
      );
    }
    return null; // Retourne null si aucune donnée n'est fournie
  }
}

export default ProjectDetailsModal;
