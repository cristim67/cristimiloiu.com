import React from "react";
import Achievements from "./Achievements.component.tsx";
import Education from "./Education.component.tsx";
import Experience from "./Experience.component.tsx";
import PersonalInfo from "./PersonalInfo.component.tsx";
// import Skills from "./Skills.component.tsx";
import cv from "../../assets/CV_Miloiu_Cristi_en.pdf";
import heroImgMobile from "../../assets/img/hero/img-mobile.jpg";
import Volunteering from "./Volunteering.component.tsx";

const Index: React.FC = () => {
  return (
    <section className="main-content ">
      <div className="container">
        <div className="row">
          {/* Personal Info Starts */}
          <div className="col-xl-6 col-lg-5 col-12">
            <div className="row">
              <div className="col-12">
                <h3 className="text-uppercase custom-title mb-0 ft-wt-600">
                  personal infos
                </h3>
              </div>
              {/* End .col */}

              <div className="col-12 d-block d-sm-none">
                <img
                  src={heroImgMobile}
                  className="img-fluid main-img-mobile"
                  alt="about avatar"
                />
              </div>
              {/* image for mobile menu */}

              <div className="col-12">
                <PersonalInfo />
              </div>
              {/* End personal info */}

              <div className="col-12 mt-1">
                <a className="button" href={cv} download>
                  <span className="button-text">Download CV</span>
                  <span className="button-icon fa fa-download"></span>
                </a>
              </div>
              {/* End download button */}
            </div>
          </div>
          {/*  Personal Info Ends */}

          {/*  Boxes Starts */}
          <div className="col-xl-6 col-lg-7 col-12 mt-5 mt-lg-0">
            <Achievements />
          </div>
          {/* Achievements Ends */}
        </div>
        {/* End .row */}

        <hr className="separator mt-1" />

        {/* Experience & Education Starts */}
        <div className="row">
          <hr className="separator mt-1"/>
          <h3 className="text-uppercase pb-5 mb-0 text-left text-sm-center custom-title ft-wt-600">
            Experience
          </h3>
          <div className="col-lg-12 m-15px-tb">
            <div className="resume-box">
              <Experience/>
            </div>
          </div>

          <div className="col-12">
            <h3 className="text-uppercase pb-5 mb-0 text-left text-sm-center custom-title ft-wt-600">
              Education
            </h3>
            <div className="col-lg-12 m-15px-tb mb-3">
              <div className="resume-box">
                <Education/>
              </div>
            </div>
          </div>

          <hr className="separator mt-1"/>
          <h3 className="text-uppercase pb-5 mb-0 text-left text-sm-center custom-title ft-wt-600">
            Volunteering
          </h3>
          <div className="col-lg-12 m-15px-tb">
            <div className="resume-box">
              <Volunteering/>
            </div>
          </div>
        </div>
        {/*  Experience & Education Ends */}
        {/* Skills Starts */}
        {/*<hr className="separator mt-1" />*/}
        {/*<div className="row">*/}
        {/*  <div className="col-12">*/}
        {/*    <h3 className="text-uppercase pb-4 pb-sm-5 mb-3 mb-sm-0 text-left text-sm-center custom-title ft-wt-600">*/}
        {/*      My Skills*/}
        {/*    </h3>*/}
        {/*  </div>*/}
        {/*  <Skills />*/}
        {/*</div>*/}
        {/* Skills Ends */}
      </div>
    </section>
  );
};

export default Index;
