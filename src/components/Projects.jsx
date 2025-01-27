import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { MdPhonelink } from "react-icons/md";
import { FaRegImage } from "react-icons/fa6";
import { FaVideo } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";
import ProjectDetails from "../assets/data/projectPageData/ProjectsDetails";

const Projects = () => {
  const [ShowProjectIndex, setShowProjectIndex] = useState(0);
  const [ShowProjectVideo, setShowProjectVideo] = useState(false);

  const handlePrevBtn = () => {
    if (ShowProjectIndex !== 0) {
      setShowProjectIndex(ShowProjectIndex - 1);
      setShowProjectVideo(false)
    }
  };
  const handleNextBtn = () => {
    if (ShowProjectIndex !== ProjectDetails.length - 1) {
      setShowProjectIndex(ShowProjectIndex + 1);
      setShowProjectVideo(false)
    }
  };

  return (
    <div className="project-section st-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-6">
            <div className="index">
              {ShowProjectIndex + 1 < 10 ? (
                <p>{`0${ShowProjectIndex + 1}`}</p>
              ) : (
                <p>{ShowProjectIndex + 1}</p>
              )}
            </div>
            <div className="title">
              <p>{ProjectDetails[ShowProjectIndex]?.title}</p>
            </div>
            <div className="description">
              <p>{ProjectDetails[ShowProjectIndex]?.description}</p>
            </div>
            <div className="technologiesUse">
              <ul>
                {ProjectDetails[ShowProjectIndex]?.technologies.map(
                  (item, i) => (
                    <li key={i}>{item}</li>
                  )
                )}
              </ul>
            </div>
            <hr />
            <div className="links">
              {ProjectDetails[ShowProjectIndex].websiteLink && (
                <a href={ProjectDetails[ShowProjectIndex].websiteLink}>
                  <MdPhonelink />
                </a>
              )}
              {ProjectDetails[ShowProjectIndex].githubLink && (
                <a href={ProjectDetails[ShowProjectIndex].githubLink}>
                  <FaGithub />
                </a>
              )}
            </div>
          </div>
          <div className="col-6">
            <div className="project-image-video">
              <div className="select-icons">
                <div
                  className={`image-video ${ShowProjectVideo ? "" : "active"}`}
                  onClick={() => setShowProjectVideo(false)}
                >
                  <FaRegImage />
                </div>
                {/* {ProjectDetails[ShowProjectIndex].videosName && (
                  <div
                    className={`image-video ${
                      ShowProjectVideo ? "active" : ""
                    }`}
                    onClick={() => setShowProjectVideo(true)}
                  >
                    <FaVideo />
                  </div>
                )} */}
              </div>
              <div className="select-content">
                <div
                  className={`image-content ${
                    ShowProjectVideo ? "d-none" : ""
                  }`}
                >
                  <img
                    // src={`http://localhost:5173/src/assets/data/Uploads/Images/${ProjectDetails[ShowProjectIndex].imagesName}`}
                    src={ProjectDetails[ShowProjectIndex].imagesLink}
                    alt={`${ProjectDetails[ShowProjectIndex].imagesName}`}
                    className="img-fluid"
                  />
                </div>
                {/* <div
                  className={`video-content ${
                    ShowProjectVideo ? "" : "d-none"
                  }`}
                >
                  <video
                    // src={`http://localhost:5173/src/assets/data/Uploads/Videos/${ProjectDetails[ShowProjectIndex].videosName}`}
                    src={ProjectDetails[ShowProjectIndex].videosLink}
                    autoPlay
                    loop
                    muted
                    className="img-fluid"
                    // controls
                  ></video>
                </div> */}
              </div>
            </div>
            <div
              className={`next-prev-btn ${
                ProjectDetails.length === 1 ? "d-none" : ""
              }`}
            >
              <div
                className={`prev-btn ${ShowProjectIndex === 0 ? "d-none" : ""}`}
                onClick={handlePrevBtn}
              >
                <FaAngleLeft />
              </div>
              <div
                className={`next-btn ${
                  ShowProjectIndex === ProjectDetails.length - 1 ? "d-none" : ""
                }`}
                onClick={handleNextBtn}
              >
                <FaAngleRight />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
