import React, { useEffect, useState } from "react";
import LeftSide from "../assets/data/resumePageData/LeftSide";
import ResumePageData from "../assets/data/resumePageData/ResumePageData";
import MyExpirence from "../assets/data/resumePageData/MyExperince";
import MyEducation from "../assets/data/resumePageData/MyEducation";
import MySkills from "../assets/data/resumePageData/MySkills";
import AboutMe from "../assets/data/resumePageData/AboutMe";
import GetIcons from "./GetIcons";

const Resume = () => {
  const [SelectSection, setSelectSection] = useState("");

  useEffect(() => {
    if (SelectSection === "") {
      setSelectSection(ResumePageData[0]);
    }
  }, [ResumePageData]);

  return (
    <div className="resume-section st-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-4">
            <div className="top-portion">
              <div className="title">
                <p>{LeftSide.title}</p>
              </div>
              <div className="description">{LeftSide.answer}</div>
            </div>
            <div className="bottom-portion">
              {ResumePageData.map((item, i) => (
                <div
                  className={`heading ${
                    SelectSection === item ? "active" : ""
                  }`}
                  onClick={() => setSelectSection(item)}
                  key={i}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="col-8">
            {SelectSection === "Experience" && (
              <div className="content">
                <div className="content-heading">{MyExpirence.heading}</div>
                <div className="content-details">{MyExpirence.details}</div>
                <div className="more-about">
                  {MyExpirence.about.map((item, i) => (
                    <div className="about" key={i}>
                      <div className="about-top">{item.date}</div>
                      <div className="about-middle">{item.details}</div>
                      <div className="about-bottom">
                        <ul>
                          {item.organization.map((org, key) => (
                            <li key={key}>{org}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {SelectSection === "Education" && (
              <div className="content">
                <div className="content-heading">{MyEducation.heading}</div>
                <div className="content-details">{MyEducation.details}</div>
                <div className="more-about">
                  {MyEducation.about.map((item, i) => (
                    <div className="about" key={i}>
                      <div className="about-top">{item.date}</div>
                      <div className="about-middle">{item.details}</div>
                      <div className="about-bottom">
                        <ul>
                          {item.organization.map((org, key) => (
                            <li key={key}>{org}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {SelectSection === "Skills" && (
              <div className="content">
                <div className="content-heading">{MySkills.heading}</div>
                <div className="content-details">{MySkills.details}</div>
                <div className="more-about-2">
                  {MySkills.about.map((item, i) => (
                    <div className="about" key={i}>
                      <div className="about-body">
                        {item.imageName && (
                          <div className="iconImg">
                            <img
                              // src={`http://localhost:5173/src/assets/data/Uploads/icons/${item.imageName}`}
                              src={item.imageLink}
                              alt={`${item.imageName}`}
                              className="img-fluid"
                            />
                          </div>
                        )}
                        {item.iconName && (
                          <div className="icon">
                            <GetIcons iconName={item.iconName} />
                          </div>
                        )}
                        <span className="tooltip-text">{item.details}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {SelectSection === "About me" && (
              <div className="content">
                <div className="content-heading">{AboutMe.heading}</div>
                <div className="content-details">{AboutMe.details}</div>
                <div className="more-about-3">
                  {AboutMe.about.map((item, i) => (
                    <div className="about" key={i}>
                      <div className="about-body">
                        <span className="key">{Object.keys(item)}</span>
                        <span className="value">{Object.values(item)}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
