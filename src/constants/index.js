import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  threejs,
  enxsys,
  fiver,
  cogentLogo,
  kokoNetworks,
  booosted,
  upworkpowertools,
  project1,
  fintron,
  optionsDepth,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Js Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Next Js Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Senior Frontend Developer",
    company_name: "Cogent Labs",
    icon: cogentLogo,
    iconBg: "#ffffff",
    date: "March 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Enxsys",
    icon: enxsys,
    iconBg: "#ffffff",
    date: "july 2021 - Feb 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Freelance",
    company_name: "Fiver",
    icon: fiver,
    iconBg: "#ffffff",
    date: "Jan 2019 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "MaxAB Stops ",
    description:
      "MaxAB is re-engineering the retail market using proprietary technologies, innovative supply chains, and embedded finance solutions designed to empower both retailers and suppliers.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "react-query",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: project1,
    source_code_link: "https://github.com/",
  },
  {
    name: "Booosted",
    description:
      "A website that provides chat bot facility. Save time and money by automating repetitive tasks, providing instant responses, and streamlining customer interactions. Boost productivity, reduce costs, and enhance customer satisfaction through the power of Booosted.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "react-query",
        color: "pink-text-gradient",
      },
      {
        name: "scss",
        color: "white-text-gradient",
      },
    ],
    image: booosted,
    source_code_link: "https://github.com/",
  },
  {
    name: "Upwork PowerTools Extension",
    description:
      "Upwork PowerTools is a browser extension designed to enhance the Upwork freelancing experience by providing real-time job information, including client details such as country, reviews, and hire rates.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "webpack",
        color: "green-text-gradient",
      },
      {
        name: "react-query",
        color: "pink-text-gradient",
      },
      {
        name: "mui",
        color: "white-text-gradient",
      },
    ],
    image: upworkpowertools,
    source_code_link: "https://github.com/",
  },
  {
    name: "Koko Networks",
    description:
      "A website which sells fuel and cooker. I have designed the new feature which includes designing, integrating, state management, and making the code reusable.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "docker",
        color: "green-text-gradient",
      },
      {
        name: "react-query",
        color: "pink-text-gradient",
      },
      {
        name: "mui",
        color: "white-text-gradient",
      },
    ],
    image: kokoNetworks,
    source_code_link: "https://github.com/",
  },
  {
    name: "Fintron",
    description:
      "This website is operated by FinTron Inc., owner and operator of the FinTron mobile application. Many of the services offered through this application, and described on this website, are provided by subsidiaries of FinTron, Inc. Securities are offered to self-directed customers by FinTron Invest LLC (“FinTron Invest”), a registered broker-dealer and member of FINRA & SIPC.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "webpack",
        color: "green-text-gradient",
      },
      {
        name: "react-query",
        color: "pink-text-gradient",
      },
      {
        name: "mui",
        color: "white-text-gradient",
      },
    ],
    image: fintron,
    source_code_link: "https://github.com/",
  },
  {
    name: "Options Depth",
    description:
      "This website works on trading charts. Advance trading chart library and plotly library is used to show charts.The main purpose of the site is to access Market Makers' Real Options Positions and Advanced Computational Insights.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tradingview-library",
        color: "green-text-gradient",
      },
      {
        name: "react-query",
        color: "pink-text-gradient",
      },
      {
        name: "mui",
        color: "white-text-gradient",
      },
      {
        name: "plotly-charts",
        color: "orange-text-gradient",
      },
    ],
    image: optionsDepth,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
