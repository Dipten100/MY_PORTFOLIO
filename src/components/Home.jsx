import React from "react";
import GetIcons from "./GetIcons";
import HomePageData from "../assets/data/homePageData/HomePageData";
import { Link } from "react-router-dom";

const Home = () => {

  const handlePdf=()=>{
    window.open('https://drive.google.com/thumbnail?id=1J9OPa8UIzx-d1Y6LE0namvY66A6RIQZ7&sz=w1000', '_blank'); 
  }

  return (
    <div className="home-section st-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-4">
            <div className="main-img">
              <img
                src={`https://drive.google.com/thumbnail?id=1tlVN65EL8LHIDnpmPb8jRzPTWYAuE8Kc&sz=w1000`}
                alt="hero img"
                className="img-fluid"
              />
            </div>
          </div>
          <div className="col-8">
            <div className="main-text">
              <p>Hello I'm</p>
              <p className="name">{HomePageData.name}</p>
            </div>
            <div className="sub-text">
              <p>{HomePageData.about}</p>
            </div>
            <div className="buttons">
              <div className="button">
                <button type="button" className="home-btn" onClick={handlePdf}>
                  Download cv <GetIcons iconName={"IoMdDownload"} />
                </button>
              </div>
              {/* <div className="button">
                <Link to={HomePageData.githubLink} target="_blank">
                  <button type="button" className="home-btn">
                    {" "}
                    <GetIcons iconName={"FaGithub"} />
                  </button>
                </Link>
              </div> */}
              <div className="button">
                <Link to={HomePageData.linkedInLink} target="_blank">
                  <button type="button" className="home-btn">
                    {" "}
                    <GetIcons iconName={"FaLinkedinIn"} />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="home-page-items">
              {
                HomePageData.specification.map((item,i)=>(
              <div className="home-page-item" key={i}>
                <p className="number">
                  {Object.values(item)}
                </p>
                <p className="text">
                  {Object.keys(item)}
                </p>
              </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
