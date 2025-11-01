import HeroImage from "./assets/hero-img.webp";
import HeroImage2 from "./assets/heroImageMe3.png";
import Logo from "./assets/ben.svg"


const Image  = 
  {
    hero: HeroImage,
    hero1: HeroImage2,
    logo: Logo
  }


export default Image;



import Tools1 from "./assets/tech/vscode.png";
import Tools2 from "./assets/tech/reactjs.png";
import Tools3 from "./assets/tech/nextjs.png";
import Tools4 from "./assets/tech/tailwind.png";
import Tools5 from "./assets/tech/bootstrap.png";
import Tools6 from "./assets/tech/js.png";
import Tools7 from "./assets/tech/nodejs.png";
import Tools8 from "./assets/tech/github.png";
import Tools9 from "./assets/tech/ai.png";
import Tools10 from "./assets/tech/canva.png";
import Tools11 from "./assets/tech/figma.png";

export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "React JS",
    ket: "Framework",
    dad: "200",
  },
  // {
  //   id: 3,
  //   gambar: Tools3,
  //   nama: "Next JS",
  //   ket: "Framework",
  //   dad: "300",
  // },
  {
    id: 4,
    gambar: Tools4,
    nama: "Tailwind CSS",
    ket: "Framework",
    dad: "400",
  },
  {
    id: 5,
    gambar: Tools5,
    nama: "Bootstrap",
    ket: "Framework",
    dad: "500",
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "Javascript",
    ket: "Language",
    dad: "600",
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "Node JS",
    ket: "Javascript Runtime",
    dad: "700",
  },
  {
    id: 8,
    gambar: Tools8,
    nama: "Github",
    ket: "Repository",
    dad: "800",
  },
  // {
  //   id: 9,
  //   gambar: Tools9,
  //   nama: "Adobe Illustrator",
  //   ket: "Design App",
  //   dad: "900",
  // },
  // {
  //   id: 10,
  //   gambar: Tools10,
  //   nama: "Canva",
  //   ket: "Design App",
  //   dad: "1000",
  // },
  {
    id: 11,
    gambar: Tools11,
    nama: "Figma",
    ket: "Design App",
    dad: "1100",
  },
];

import Project1 from "./assets/project/project1.svg";
import Project2 from "./assets/project/project2.svg";
import Project3 from "./assets/project/project3.svg";
import Project4 from "./assets/project/project4.svg";


export const listProject = [
  {
    id: 1,
    gambar: Project1,
    nama: "Revamp Website RS Misi",
    desk: "Revamped website using WordPress, implementing a fully responsive and modern interface aligned with updated design guidelines.",
    tools: ["HTML", "CSS",  "Wordpress", "JS"],
    dad: "200",
    links: "https://misilebak.com/"
  },
  {
    id: 2,
    gambar: Project2,
    nama: "UX Case Study : Mamikos App",
    desk: "Conducted user interviews and surveys with 5 active Mamikos users to identify key pain points in the room search and booking experience.",
    tools: ["Figma", "Miro"],
    dad: "300",
    links: "https://medium.com/@benediktusron/ux-research-case-study-mamikos-application-91915aae5f6f"
  },
  {
    id: 3,
    gambar: Project3,
    nama: "Simple To-do List App",
    desk: "This app allows users to add, edit, mark as complete, and delete tasks through a clean and responsive interface",
    tools: ["HTML", "Tailwind CSS", "Javascript"],
    dad: "400",
    links: "https://my-simple-todolist-apps.netlify.app/"
  },
  {
    id: 4,
    gambar: Project4,
    nama: "Company Profile Music Producer",
    desk: "Making a simple portofolio web for Music Producer",
    tools: ["HTML", "CSS", "Javascript"],
    dad: "500",
    links: ""
  }
 
];
