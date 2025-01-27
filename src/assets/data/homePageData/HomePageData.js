// If you want to update hero image(your personal image for home page) then put image in "src/assets/data/Uploads/hero" and there enter name of image with extension in object under heroimg attribute like `heroImg:"IMG-20220127-WA0003.png",`

// If you want to update your cv then put cv pdf file in "src/assets/data/Uploads/Files" and there enter name of file with extension in object under cv attribute like `cv:"MyCv.pdf",`

// If you want to update your Links (Linkedin, Github) then put links of perticular feild in object

// If you want to add new Link then create perticular feild for this link then give the value and also need to change in react file `src/components/Home.jsx`

const HomePageData = {
  heroImg: "IMG-20220127-WA0003.png",
  name: "Dipten karmakar",
  about:
    "As a dedicated Fullstack Developer, I specialize in React.js, Node.js, Java, and Spring Boot, bringing a comprehensive skill set to create dynamic and efficient web applications. With a strong passion for problem-solving and a commitment to delivering high-quality code, I thrive in collaborative environments and am always eager to learn and adapt to new technologies. Let's work together to build innovative solutions and achieve remarkable results.",
  cv: "Dipten-Karmakar-Resume.pdf",
  linkedInLink: "https://www.linkedin.com/in/dipten-karmakar-855500203/",
  githubLink: "#",
  specification: [
    {
      "Projects completed": '6+',
    },
    {
      "Technologies mastered": 10,
    },
  ],
};

export default HomePageData;
