import React from "react";
import ServicePageData from "../assets/data/servicePageData/ServicePageData";

const Services = () => {
  return (
    <div className="services-section st-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="services">
              {ServicePageData.map((item, i) => (
                <div key={i} className="service-box">
                  <div className="top-portion">
                    <div className="index">{(i + 1)<10?`0${i+1}`:`${i+1}`}</div>
                    <div className="icon">
                      <img src={`../src/assets/data/Uploads/icons/${item.imageName}`} alt={`${item.imageName}`} className="img-fluid" />
                    </div>
                  </div>
                  <div className="middle-portion">
                    <p className="title">{item.title}</p>
                  </div>
                  <div className="bottom-portion">
                    <p className="description">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
