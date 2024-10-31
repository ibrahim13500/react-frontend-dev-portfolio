import React, { Component } from "react";
import Typical from "react-typical";

class Header extends Component {
  titles = [];

  constructor() {
    super();
    this.state = { checked: false };
    this.onThemeSwitchChange = this.onThemeSwitchChange.bind(this);
    this.scrollToSection = this.scrollToSection.bind(this);
  }

  onThemeSwitchChange(checked) {
    this.setState({ checked });
    this.setTheme();
  }

  setTheme() {
    var dataThemeAttribute = "data-theme";
    var body = document.body;
    var newTheme =
      body.getAttribute(dataThemeAttribute) === "dark" ? "light" : "dark";
    body.setAttribute(dataThemeAttribute, newTheme);
  }

  scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }

  render() {
    if (this.props.sharedData) {
      var name = this.props.sharedData.name;
      this.titles = this.props.sharedData.titles
        .map((x) => [x.toUpperCase(), 1500])
        .flat();
    }

    const HeaderTitleTypeAnimation = React.memo(
      () => {
        return <Typical className="title-styles" steps={this.titles} loop={50} />;
      },
      (props, prevProp) => true
    );

    return (
      <header id="home" style={{ height: window.innerHeight - 140, display: 'block' }}>
        <nav className="header-nav">
          <ul className="header-buttons">
            <li>
              <button onClick={() => this.scrollToSection('home')} className="round-button">Home</button>
            </li>
            <li>
              <button onClick={() => this.scrollToSection('about')} className="round-button">About</button>
            </li>
            <li>
              <button onClick={() => this.scrollToSection('projects')} className="round-button">Projects</button>
            </li>
            <li>
              <button onClick={() => this.scrollToSection('skills')} className="round-button">Skills</button>
            </li>
            <li>
              <button onClick={() => this.scrollToSection('resume')} className="round-button">Formation</button>
            </li>
          </ul>
        </nav>
        <div className="row aligner" style={{height: '100%'}}>
          <div className="col-md-12">
            <div>
              <img
                src={process.env.PUBLIC_URL + "/images/integrateur.jpg"}
                alt="portrait"
                className="header-image"
                style={{ width: '100%', height: '300px', objectFit:'cover' }}
              />
              <br/>
              <h1 className="mb-0">
                <Typical steps={[name]} wrapper="p" />
              </h1>
              <div className="title-container">
                <HeaderTitleTypeAnimation />
              </div>
             
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
