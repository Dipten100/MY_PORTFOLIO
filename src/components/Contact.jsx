import React, { useState } from "react";
import HomePageData from "../assets/data/homePageData/HomePageData";
import ContactPageData from "../assets/data/contactPageData/ContactPageData";
import GetIcons from "./GetIcons";

const Contact = () => {
  const [ContactFormData, setContactFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "Select a service",
    message: "",
  });
  const [ContactFormDataErrorHandle, setContactFormDataErrorHandle] =
    useState("");

  const handlePdf = (e) => {
    e.preventDefault()
    window.open('https://drive.google.com/thumbnail?id=1J9OPa8UIzx-d1Y6LE0namvY66A6RIQZ7&sz=w1000', '_blank');
  };

  const handleContactForm = (e) => {
    e.preventDefault();
    const { firstName, lastName, email, phone, service } = ContactFormData;
    let tag = false;
    if (!firstName) {
      setContactFormDataErrorHandle("firstName");
      tag = false;
    } else if (!lastName) {
      setContactFormDataErrorHandle("lastName");
      tag = false;
    } else if (!email) {
      setContactFormDataErrorHandle("email");
      tag = false;
    } else if (!phone) {
      setContactFormDataErrorHandle("phone");
      tag = false;
    } else if (service === "Select a service") {
      setContactFormDataErrorHandle("service");
      tag = false;
    } else {
      setContactFormDataErrorHandle("");
      tag = true;
    }
    if (tag) {
      console.log(ContactFormData);
    } else {
      return;
    }
  };

  return (
    <div className="contact-section st-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-6">
            <div className="contact-form">
              <div className="form-heading">
                <p className="heading">{ContactPageData.haeding}</p>
                <p className="details">{ContactPageData.details}</p>
                <p className="details">
                  <button
                    type="button"
                    className="home-btn"
                    onClick={handlePdf}
                  >
                    Download cv <GetIcons iconName={"IoMdDownload"} />
                  </button>
                </p>
              </div>

              {/* Contact Form enter */}
              {/* <form className="lab-form" onSubmit={handleContactForm}>
                <div className="form-input">
                  <input
                    type="text"
                    placeholder="Firstname"
                    onChange={(e) =>
                      setContactFormData({
                        ...ContactFormData,
                        firstName: e.target.value,
                      })
                    }
                    value={ContactFormData.firstName}
                    className={`${
                      ContactFormDataErrorHandle==="firstName" ? "errorActive" : ""
                    }`}
                  />
                  <input
                    type="text"
                    placeholder="Lastname"
                    onChange={(e) =>
                      setContactFormData({
                        ...ContactFormData,
                        lastName: e.target.value,
                      })
                    }
                    value={ContactFormData.lastName}
                    className={`${
                      ContactFormDataErrorHandle==="lastName" ? "errorActive" : ""
                    }`}
                  />
                </div>
                <div className="form-input">
                  <input
                    type="email"
                    placeholder="Email address"
                    onChange={(e) =>
                      setContactFormData({
                        ...ContactFormData,
                        email: e.target.value,
                      })
                    }
                    value={ContactFormData.email}
                    className={`${
                      ContactFormDataErrorHandle==="email" ? "errorActive" : ""
                    }`}
                  />
                  <input
                    type="number"
                    placeholder="Phone number"
                    onChange={(e) =>
                      setContactFormData({
                        ...ContactFormData,
                        phone: e.target.value,
                      })
                    }
                    value={ContactFormData.phone}
                    className={`${
                      ContactFormDataErrorHandle==="phone" ? "errorActive" : ""
                    }`}
                  />
                </div>
                <div className="form-input">
                  <select
                    onChange={(e) =>
                      setContactFormData({
                        ...ContactFormData,
                        service: e.target.value,
                      })
                    }
                    value={ContactFormData.service}
                    className={`${
                      ContactFormDataErrorHandle==="service" ? "errorActive" : ""
                    }`}
                  >
                    <option value="Select a service">Select a Service</option>
                    {ContactPageData.selectOptions.map((item, i) => (
                      <option value={item} key={i}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-input">
                  <textarea
                    placeholder="Type your message here"
                    onChange={(e) =>
                      setContactFormData({
                        ...ContactFormData,
                        message: e.target.value,
                      })
                    }
                    value={ContactFormData.message}
                  ></textarea>
                </div>
                <div className="form-input">
                  <button type="submit" className="lab-btn">
                    Send message
                  </button>
                </div>
              </form> */}
            </div>
          </div>
          <div className="col-6">
            <div className="contact-details">
              {ContactPageData.contactDetails.map((item, i) => (
                <div className="contact" key={i}>
                  <div className="left">
                    <div className="icon">
                      <GetIcons iconName={item.iconName} />
                    </div>
                  </div>
                  <div className="right">
                    <div className="key">{item.title}</div>
                    <div className="value">{item.value}</div>
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

export default Contact;
