import Image1 from "../../assets/img/portfolio/project-1.jpg";
import Image2 from "../../assets/img/portfolio/project-2.webp";
import Image3 from "../../assets/img/portfolio/BBETTI.webp";
import Image4 from "../../assets/img/portfolio/Electron.webp";
import Image5 from "../../assets/img/portfolio/APV.webp";
import Image6 from "../../assets/img/portfolio/LANPARTY.webp";
import Image7 from "../../assets/img/portfolio/whatsapp.webp";
import Image8 from "../../assets/img/portfolio/project-8.png";
import Image9 from "../../assets/img/portfolio/project-9.png";
import Image10 from "../../assets/img/portfolio/project-10.png";
import Image11 from "../../assets/img/portfolio/project-11.png";

interface ModalDetail {
  project: string;
  client: string;
  language: string;
  preview: string;
  link: string;
  github?: string;
  clientLink?: string;
}

interface PortfolioItem {
  id: number;
  type: string;
  image: string;
  tag: string[];
  delayAnimation: string;
  modalDetails: ModalDetail[];
}

const PortfolioData: PortfolioItem[] = [
  {
    id: 1,
    type: "Reservation Platform",
    image: Image1,
    tag: ["website"],
    delayAnimation: "0",
    modalDetails: [
      {
        project: "Reservation Platform",
        client: "League of Electronics Students (LSE)",
        clientLink: "https://lsebucuresti.org/",
        language: "React, Google OAuth, Bootstrap, PostgreSQL, PrismaORM",
        preview: "https://camin.lsebucuresti.org/",
        link: "https://camin.lsebucuresti.org/",
        github: "https://github.com/ConducereIT/camin",
      },
    ],
  },
  {
    id: 2,
    type: "Article WhatsApp Assistant",
    image: Image2,
    tag: ["article"],
    delayAnimation: "100",
    modalDetails: [
      {
        project: "WhatsApp Assistant",
        client: "Genezio",
        clientLink: "https://genezio.com/",
        language: "Typescript",
        preview: "https://genezio.com/blog/mastering-automation-a-step-by-step-guide-to-creating-a-whatsapp-chatbot-with-chatgpt-4o/",
        link: "https://genezio.com/blog/mastering-automation-a-step-by-step-guide-to-creating-a-whatsapp-chatbot-with-chatgpt-4o/",
        github:"https://github.com/cristim67/whatsapp-assistant-starter",
      },
    ],
  },
  {
    id: 3,
    type: "Freshmen's Ball",
    image: Image3,
    tag: ["website"],
    delayAnimation: "200",
    modalDetails: [
      {
        project: "Freshmen's Ball",
        client: "League of Electronics Students (LSE)",
        clientLink: "https://lsebucuresti.org/",
        language: "React, Email&PW Auth, TailwindCSS, PostgreSQL, PrismaORM",
        preview: "https://bbetti.lsebucuresti.org/",
        link: "https://bbetti.lsebucuresti.org/",
        github: "https://github.com/conducereIT/bbetti",
      },
    ],
  },
  {
    id: 4,
    type: "Electron Hackathon",
    image: Image4,
    tag: ["website"],
    delayAnimation: "0",
    modalDetails: [
      {
        project: "Electron Hackathon",
        client: "League of Electronics Students (LSE)",
        clientLink: "https://lsebucuresti.org/",
        language: "React, TailwindCSS",
        preview: "https://electron.lsebucuresti.org/",
        link: "https://electron.lsebucuresti.org/",
        github: "https://github.com/ConducereIT/arena-electronistilor-2024"
      },
    ],
  },
  {
    id: 5,
    type: "Charitable Cross - APV",
    image: Image5,
    tag: ["website"],
    delayAnimation: "100",
    modalDetails: [
      {
        project: "Charitable Cross - APV",
        client: "League of Electronics Students (LSE)",
        clientLink: "https://lsebucuresti.org/",
        language: "React, Google OAuth, TailwindCSS, PostgreSQL, Sequelize",
        preview: "https://apv.lsebucuresti.org/",
        link: "https://apv.lsebucuresti.org/",
        github: "https://github.com/ConducereIT/APV",
      },
    ],
  },
  {
    id: 6,
    type: "LAN Party",
    image: Image6,
    tag: ["website"],
    delayAnimation: "200",
    modalDetails: [
      {
        project: "LAN Party",
        client: "League of Electronics Students (LSE)",
        clientLink: "https://lsebucuresti.org/",
        language: "React, TailwindCSS",
        preview: "https://www.lanpartylse.org/",
        link: "https://www.lanpartylse.org/",
        github: "https://github.com/lseIT/lanparty"
      },
    ],
  },
  {
    id: 7,
    type: "WhatsApp Bot Starter",
    image: Image7,
    tag: ["article"],
    delayAnimation: "0",
    modalDetails: [
      {
        project: "WhatsApp Bot Starter",
        client: "Genezio",
        clientLink: "https://genezio.com/",
        language: "Typescript",
        preview: "https://genezio.com/blog/whatsapp-genezio-project/",
        link: "https://genezio.com/blog/whatsapp-genezio-project/",
        github: "https://github.com/Genez-io/whatsapp-bot-starter"
      },
    ],
  },
  {
    id: 8,
    type: "Electronic Student League",
    image: Image8,
    tag: ["website"],
    delayAnimation: "100",
    modalDetails: [
      {
        project: "Electronic Student League",
        client: "Electronic Student League (LSE)",
        clientLink: "https://lsebucuresti.org/",
        language: "React, TailwindCSS",
        preview: "https://lsebucuresti.org/",
        link: "https://lsebucuresti.org/",
        github: "https://github.com/ConducereIT/lsebucuresti.org"
      },
    ],
  },
  {
    id: 9,
    type: "Crud-App-GO",
    image: Image9,
    tag: ["website"],
    delayAnimation: "200",
    modalDetails: [
      {
        project: "Crud-App-GO",
        client: "Faculty ETTI",
        clientLink: "https://etti.upb.ro/",
        language: "React, TailwindCSS, Go, PostgreSQL",
        preview: "https://pibd.cristimiloiu.com/",
        link: "https://pibd.cristimiloiu.com/",
        github: "https://github.com/cristim67/Crud-App-Go"
      },
    ],
  },
  {
    id: 10,
    type: "SCSS-2023-ETTI-04",
    image: Image10,
    tag: ["machine learning"],
    delayAnimation: "200",
    modalDetails: [
      {
        project: "SCSS-2023-ETTI-04 - Plate Detection",
        client: "Scientific Communications Session",
        clientLink: "https://etti.upb.ro/",
        language: "Python, MySQL",
        preview: "https://github.com/cristim67/SCSS-2023-ETTI-04",
        link: "https://github.com/cristim67/SCSS-2023-ETTI-04",
        github: "https://github.com/cristim67/SCSS-2023-ETTI-04"
      },
    ],
  },
  {
    id: 11,
    type: "SCSS-2024-ETTI-04",
    image: Image11,
    tag: ["machine learning"],
    delayAnimation: "200",
    modalDetails: [
      {
        project: "SCSS-2024-ETTI-04 - GenerativeAI for backends",
        client: "Scientific Communications Session",
        clientLink: "https://etti.upb.ro/",
        language: "Typescript",
        preview: "https://github.com/cristim67/SCSS-2024-04",
        link: "https://github.com/cristim67/SCSS-2024-04",
        github: "https://github.com/cristim67/SCSS-2024-04"
      },
    ],
  },
].sort(() => Math.random() - 0.5);

export default PortfolioData;
