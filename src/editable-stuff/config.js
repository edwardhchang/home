// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Edward",
  middleName: "",
  lastName: "Chang",
  message: " Building a better world with data and technology. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/edwardhchang",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/greaterloser",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/eddiecgang/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/edwardhchang/",
    },
    ,
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/eddie.png"),
  imageSize: 375,
  message:
    "Hi, my name is Eddie! I am a detail-oriented, analytical, and adaptable data scientist, interested in using data-driven approaches from a top-down perspective to create solutions for global problems. Having grown up in a small-business family and having worked in business financing at PayPal, I find data can drive improved business decisions and uncover areas of improved efficiency. Meticulous in many aspects when it comes to deliverables, I aim to find simple answers to multi-tiered problems and have a proven track record of doing so in high-pressure environments. As a recent graduate of General Assembly's Immersive Data Science camp, I am seeking a role with an organization where I can  collaborate with a team on difficult problems to provide simple and effective results to clients.",
  resume: "https://docs.google.com/document/d/17-yKoPf2iqZ378RJFpgGVPu49nJOU3j1/edit?usp=sharing&ouid=107353429405971597705&rtpof=true&sd=true",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "edwardhchang", //i.e."johnDoe12Gh"
  reposLength: 0,
  specificRepos: ['Loan-Repayment-Classification', 'Alaska-Sea-Level-Prediction', 'home'],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    {
      img: require("../editable-stuff/eddie.png"),
      label: "First slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum."
    },
    {
      img: require("../editable-stuff/eddie.png"),
      label: "Second slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum."
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 85 },
    { name: "SQL", value: 50 },
    { name: "TensorFlow", value: 75 },
    { name: "NLP", value: 60 },
    { name: "Scikit-Learn", value: 80 },
    { name: "Matplotlib", value: 70 },
    { name: "PySpark", value: 55 },
    { name: "R", value: 40 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 85 },
    { name: "Adaptability", value: 95 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 80 },
    { name: "Creativity", value: 70 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time Data Scientist, Data Engineering, or Machine Learning opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "eddiechang96@gmail.com",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'Data Science Fellow',// Here Add Company Name
      companylogo: require('../assets/img/ga.png'),
      date: 'June 2021 – September 2021',
    },
    {
      role: 'Senior Credit Underwriter',// Here Add Company Name
      companylogo: require('../assets/img/paypal.png'),
      date: 'February 2018 – May 2021',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
