import React from "react";
import { IoMdDownload } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { ImLocation } from "react-icons/im";
import { FaHtml5 } from "react-icons/fa6";

const GetIcons = ({ iconName }) => {
  const libraries = [
    {
      name: "IoMdDownload",
      icon: IoMdDownload,
    },
    {
      name: "FaGithub",
      icon: FaGithub,
    },
    {
      name: "FaLinkedinIn",
      icon: FaLinkedinIn,
    },
    {
      name: "FaPhoneAlt",
      icon: FaPhoneAlt,
    },
    {
      name: "MdEmail",
      icon: MdEmail,
    },
    {
      name: "ImLocation",
      icon: ImLocation,
    },
    {
      name: "FaHtml5",
      icon: FaHtml5,
    },
  ];

  const result = libraries.find((item) => item.name === iconName);

  return <>{result && <result.icon />}</>;
};

export default GetIcons;
