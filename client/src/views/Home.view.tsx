import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import SwitchDark from "../components/switch/SwitchDark.component.tsx";
import Hero from "../components/hero/Hero.component.tsx";
import Index from "../components/about";
import Address from "../components/Address.component.tsx";
import SocialComponent from "../components/Social.component.tsx";
import Contact from "../components/Contact.component.tsx";
import Portfolio from "../components/portfolio/Portfolio.tsx";

interface MenuItem {
  icon: string;
  menuName: string;
  link?: string;
}

const menuItem: MenuItem[] = [
  { icon: "fa-home", menuName: "Home" },
  { icon: "fa-user", menuName: "About" },
  { icon: "fa-briefcase", menuName: "Portfolio" },
  { icon: "fa-envelope-open", menuName: "Contact" },
];

const Home: React.FC = () => {
  return (
    <div className="blue">
      <SwitchDark />
      <Tabs>
        <div className="header">
          <TabList className="icon-menu revealator-slideup revealator-once revealator-delay1">
            {menuItem.map((item, i) => (
              <Tab className="icon-box" key={i}>
                {item.link ? (
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    <i className={`fa ${item.icon}`}></i>
                    <h2>{item.menuName}</h2>
                  </a>
                ) : (
                  <div>
                    <i className={`fa ${item.icon}`}></i>
                    <h2>{item.menuName}</h2>
                  </div>
                )}
              </Tab>
            ))}
            <a
              href="https://www.linkedin.com/in/cristi-miloiu-3a174a267/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Tab className="icon-box" key={5}>
                <i className="fa fa-linkedin"></i>
                <h2>Linkedin</h2>
              </Tab>{" "}
            </a>
            <a
              href="https://github.com/cristim67"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Tab className="icon-box" key={6}>
                <i className="fa fa-github"></i>
                <h2>Github</h2>
              </Tab>{" "}
            </a>
          </TabList>
        </div>
        <div className="tab-panel_list">
          <TabPanel className="home">
            <div
              className="container-fluid main-container container-home p-0 "
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="color-block d-none d-lg-block"></div>
              <Hero />
            </div>
          </TabPanel>
          <TabPanel className="about">
            <div data-aos="fade-up" data-aos-duration="1200">
              <div className="title-section text-left text-sm-center">
                <h1>
                  ABOUT <span>ME</span>
                </h1>
                <span className="title-bg">Resume</span>
              </div>
              <Index />
            </div>
          </TabPanel>
          <TabPanel className="portfolio professional">
            <div
              className="title-section text-left text-sm-center"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <h1>
                my <span>portfolio</span>
              </h1>
              <span className="title-bg">works</span>
            </div>
            <Portfolio />
          </TabPanel>
          <TabPanel className="contact">
            <div
              className="title-section text-left text-sm-center"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <h1>
                get in <span>touch</span>
              </h1>
              <span className="title-bg">contact</span>
            </div>
            <div
              className="container"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="row">
                <div className="col-12 col-lg-4">
                  <h3 className="text-uppercase custom-title mb-0 ft-wt-600 pb-3">
                    Don't be shy !
                  </h3>
                  <p className="open-sans-font mb-4">
                    Feel free to get in touch with me. I am always open to
                    discussing new projects, creative ideas or opportunities to
                    be part of your visions.
                  </p>
                  <Address />
                  <SocialComponent />
                </div>
                <div className="col-12 col-lg-8">
                  <Contact />
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel />
          <TabPanel />
        </div>
      </Tabs>
    </div>
  );
};

export default Home;
