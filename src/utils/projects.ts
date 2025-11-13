import ecommerce from "@assets/Projects/ecommerce_optimized.png";
import video_sharing from "@assets/Projects/video-sharing_optimized.png";
import pool from "@assets/Projects/pool_optimized.png";
import madot from "@assets/Projects/madot_optimized.png";
import tiruhakim from "@assets/Projects/tiruhakim_optimized.png";
import union from "@assets/Projects/union_optimized.png";
import jestra from "@assets/Projects/jestra_optimized.png";
import biritu from "@assets/Projects/biritu_optimized.png";
import spiritan from "@assets/Projects/Spiritan.jpeg";

export interface ProjectProps {
  imgPath: string;
  isBlog: boolean;
  title: string;
  description: string;
  demoLink?: string;
  ghLink?: string;
  order: number;
  skills?: string[];
}

export const projects: ProjectProps[]  = [
  {
    imgPath: spiritan,
    isBlog: false,
    title: "Spiritan Press",
    description: "Spiritan Press Enterprises, owned and managed by the Holy Ghost Fathers and Brothers, Province of Nigeria South East, offers a wide range of printing and brading services. They are committed to delivering excellence and serving our community with integrity.",
    demoLink: "https://spiritanpress.com",
    ghLink: "",
    order: 1,
    skills: [],
   },
  // {
  //   imgPath: biritu,
  //   isBlog: false,
  //   title: "Biritu",
  //   description: "A Digital Savings Account (Biritu) is an electronic version of a regular Savings Account. With a paperless, quick and secure account opening process",
  //   demoLink: "",
  //   ghLink: "",
  //   order: 2,
  //   skills: []
  // },
  // {
  //   imgPath: pool,
  //   isBlog: false,
  //   title: "Pool Taxi",
  //   description: "Pool Taxi is a technology-based company that works in providing cost effective and technologically advanced platforms to the society. It offers transportation services to people, organizations, and institutions.",
  //   demoLink: "",
  //   ghLink: "",
  //   order: 3,
  //   skills: []
  // },
  // {
  //   imgPath: tiruhakim,
  //   isBlog: false,
  //   title: "Tiruhakim",
  //   description: "TiruHakim is an online database of patient reviews for doctors and facilities in Ethiopia. we give you the tools you need to find the best provider for you!",
  //   demoLink: "",
  //   ghLink: "",
  //   order: 1,
  //   skills: [],
  // },
  // {
  //   imgPath: jestra,
  //   isBlog: false,
  //   title: "Jestra",
  //   description: "Logistics management ensures a company has sufficient resources to fulfill client needs through the manufacturing of products, and that the products can be delivered accurately and in good condition.",
  //   demoLink: "",
  //   ghLink: "",
  //   order: 2,
  //   skills: []
  // },
  // {
  //   imgPath: ecommerce,
  //   isBlog: false,
  //   title: "Ecommerce",
  //   description: "ecommerce app project made in laravel, Vuejs and tailwindcss. get latest products,full search feature included,watch later products and add to cart",
  //   demoLink: "",
  //   ghLink: "",
  //   order: 3,
  //   skills: []   
  // },
  // {
  //   imgPath: madot,
  //   isBlog: false,
  //   title: "Madot Solutions",
  //   description: "The company's mission is to promote problem-solving within our organization; produce, deliver, and support technology to make it more accessible to our customers. Increasing the capital of the organization, creating job opportunities, playing a significant role in the economic development of our country.",
  //   demoLink: "",
  //   ghLink: "",
  //   order: 1,
  //   skills: []
  // },
  // {
  //   imgPath: video_sharing,
  //   isBlog: false,
  //   title: "Video sharing",
  //   description: "video sharing website made with laravel,Vuejs and tailwindcss. watch videos, create channel, upload videos, like and comment on videos, create playlist, subscribe channels, get notifications.!!",
  //   demoLink: "",
  //   ghLink: "",
  //   order: 2,
  //   skills: []
  // },
  // {
  //   imgPath: union,
  //   isBlog: false,
  //   title: "Union Academy",
  //   description: "Union academy dedicated to holistic education, fostering innovation, nurturing talents, and cultivating a vibrant learning community for future leaders.",
  //   demoLink: "",
  //   ghLink: "",
  //   order: 3,
  //   skills: []
  // },
];