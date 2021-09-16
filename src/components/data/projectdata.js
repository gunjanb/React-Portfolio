import artgallery from "../../assets/projectimages/artgallery.png";
import codequiz from "../../assets/projectimages/codequizapp.png";
import fitnesstracker from "../../assets/projectimages/dashboard.jpg";
import dayscheduler from "../../assets/projectimages/DayScheduler.png";
import ecommercebackend from "../../assets/projectimages/ecommercebackend.jpg";
import employeetracker from "../../assets/projectimages/employeetracker.jpg";
import kidscorner from "../../assets/projectimages/Kids_corner_learning_Tool.jpg";
import pwdgenerator from "../../assets/projectimages/Password-generator.png";
import pwabudgettracker from "../../assets/projectimages/pwabudgettracker.png";
import teamdashboard from "../../assets/projectimages/teamdashboard.png";
import techblog from "../../assets/projectimages/techblog.png";
import weatherapp from "../../assets/projectimages/weatherapp.png";
import notetaker from "../../assets/projectimages/notetaker.png";
import readme from "../../assets/projectimages/snapshotofterminal.jpg";
import reactportfolio from "../../assets/projectimages/projectpage.png";
import fsdc from "../../assets/projectimages/FSDC.jpg";
import booksearch from "../../assets/projectimages/booksearch.png";
import shopshop from "../../assets/projectimages/shopshop.png";

const projects_data = [
  {
    name: "FSDC",
    image: fsdc,
    deployed_url: "https://fullstackdevelopercommunity.herokuapp.com/",
    github_url: "https://github.com/gunjanb/Full-Stack-Developer-Community",
    category: ["React.js", "MongoDB"],
    techs: "MongoDB, React, Express, Node.js , Apollo, Graphql",
    description:
      "New developers can view videos based on the technologies they want to learn, while experienced developers can upload their own videos to teach others about a specific technology.",
  },
  {
    name: "Art Gallery",
    image: artgallery,
    deployed_url: "https://happylittleartgallery072021.herokuapp.com/",
    github_url: "https://github.com/gunjanb/Art-Gallery",
    category: ["Node.js", "MySQL"],
    techs: "Express, Handlebars, Sequelize",
    description:
      "The Happy Little Art Gallery was created for budding artists who want to find inspiration from other artists, or showcase their own work or sell their own Artwork",
  },
  {
    name: "kids Corner Learning Tool",
    image: kidscorner,
    deployed_url: "https://gunjanb.github.io/Kids-Corner-Learning-Tool/",
    github_url: "https://github.com/gunjanb/Kids-Corner-Learning-Tool",
    category: ["JS", "API"],
    techs: "Third party API",
    description:
      "This project is geared toward young children. Its focus was to make it an educational tool in learning about the fifty states of the US.",
  },

  {
    name: "Tech Blog",
    image: techblog,
    deployed_url: "https://my-tech-blog-123.herokuapp.com/",
    github_url: "https://github.com/gunjanb/Tech-Blog",
    category: ["Node.js"],
    techs: "MVC, Handlebars, Sequelize",
    description:
      "The Tech-Blog is a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developer's posts.",
  },

  {
    name: "Book Search",
    image: booksearch,
    deployed_url: "https://my-booksearchengine.herokuapp.com/",
    github_url: "https://github.com/gunjanb/Book-Search",
    category: ["React.js", "MongoDB"],
    techs: "MongoDB, React, Express, Node.js , Apollo, Graphql",
    description:
      "A full-stack MERN application that allows users to search the Google Books database by book title.",
  },
  {
    name: "Shop-Shop",
    image: shopshop,
    deployed_url: "https://my-shop-shop-01.herokuapp.com/",
    github_url: "https://github.com/gunjanb/Shop-Shop",
    category: ["React.js", "MongoDB"],
    techs: "MongoDB, React, Express, Node.js , Apollo, Graphql",
    description:
      "A full-stack, end-to-end MERN ecommerce application using Redux to handle global state management, GraphQL and Apollo. Features Stripe payment integration.",
  },
  {
    name: "Budget Tracker PWA",
    image: pwabudgettracker,
    deployed_url: "https://mybudget-tracker-123.herokuapp.com/",
    github_url: "https://github.com/gunjanb/PWA-Budget-Tracker",
    category: ["Node.js", "MongoDB"],
    techs: "Webmanifest, ServiceWorkers,indexedDB",
    description:
      "Giving users a fast and easy way to track their money is important, but allowing them to access that information anytime even offline is more important.",
  },

  {
    name: "Fitness Tracker",
    image: fitnesstracker,
    deployed_url: "https://myfitness-tracker-123.herokuapp.com/",
    github_url: "https://github.com/gunjanb/Fitness-Tracker/",
    techs: "Mongoose, MongoDB, Express",
    description:
      "This application helps user to reach their fitness goals more quickly by tracking their workout progress. ",
    category: ["MongoDB"],
  },
  {
    name: "Note Taker",
    image: notetaker,
    deployed_url: "https://agile-beyond-18161.herokuapp.com/",
    github_url: "https://github.com/gunjanb/Note-Taker",
    category: ["Node.js"],
    techs: "Node.js, UUID",
    description: "Note taker is a browser-based note taking application ",
  },

  {
    name: "Weather Dashboard",
    image: weatherapp,
    deployed_url: "https://gunjanb.github.io/Weather-Dashboard/",
    github_url: "https://github.com/gunjanb/Weather-Dashboard",
    category: ["JS"],
    techs: "Server Side APIs,jQuery,JS",
    description:
      "Display weather for a city for current day as well as display forecast for next 5 days.",
  },

  {
    name: "Workday Scheduler",
    image: dayscheduler,
    deployed_url: "https://gunjanb.github.io/Work-Day-Scheduler/",
    github_url: "https://github.com/gunjanb/Work-Day-Scheduler",
    category: ["JS"],
    techs: "local storage, Momment.js,jQuery",
    description: "Work day scheduler is a daily planner to create a schedule.",
  },

  {
    name: "E-Commerce Backend",
    image: ecommercebackend,
    deployed_url: "https://youtu.be/bzqA3CMndlI",
    github_url: "https://github.com/gunjanb/E-Commerce-BackEnd/",
    category: ["MySQL"],
    techs: "Express, Sequelize, MySQL, Insomnia",
    description: "E-Commerce BackEnd is an e-commerce API",
  },

  {
    name: "Employee Tracker",
    image: employeetracker,
    deployed_url: "https://youtu.be/Zc6SIAYvGbo",
    github_url: "https://github.com/gunjanb/Employee-Tracker",
    category: ["Node.js", "MySQL"],
    techs: "Node.js, Inquirer, and MySQL",
    description:
      "Employee tracker is a CLI application for managing a company's employees",
  },
  {
    name: "Team Dashboard",
    image: teamdashboard,
    deployed_url: "https://youtu.be/mdKnrsRqSDU",
    github_url: "https://github.com/gunjanb/Team-Dashboard",
    category: ["Node.js"],
    techs: "Node.js, Inquirer,Jest",
    description:
      "This is a Node.js command-line application that takes in information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person",
  },

  {
    name: "README.md Generator",
    image: readme,
    deployed_url:
      "https://drive.google.com/file/d/1uDdgXtsE7DYf_5vnGA2TK21qstSY4t-H/view",
    github_url: "https://github.com/gunjanb/Professional-README-Generator",
    category: ["Node.js"],
    techs: "Node, Inquirer,template literals",
    description:
      "This CLI dynamically generates a professional README file from a user's input.",
  },

  {
    name: "Password Generator",
    image: pwdgenerator,
    deployed_url: "https://gunjanb.github.io/Password-Generator/",
    github_url: "https://github.com/gunjanb/Password-Generator",
    category: ["JS"],
    techs: "JS, HTML,CSS",
    description:
      "This application generate random passwords with lengths between 8 to 128 along with special ,uppercase , lowercase and numeric characters in it",
  },
  {
    name: "Code Quiz",
    image: codequiz,
    deployed_url: "https://github.com/gunjanb/Code-Quiz",
    github_url: "https://gunjanb.github.io/Code-Quiz/",
    category: ["JS"],
    techs: "Flexbox, Media Queries, JS",
    description:
      "It is a timed quiz with multiple-choice questions to check your knowledge for JS",
  },
  {
    name: "React Portfolio",
    image: reactportfolio,
    deployed_url: "https://gunjanb.github.io/React-Portfolio",
    github_url: "https://github.com/gunjanb/React-Portfolio",
    category: ["React.js"],
    techs: "React, framer motion",
    description: "Professional portfolio",
  },
];

export default projects_data;
