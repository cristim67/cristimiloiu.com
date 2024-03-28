import React from "react";

interface ExperienceItem {
  year: string;
  position: string;
  companyName: string;
  details: string;
}

const experienceContent: ExperienceItem[] = [
  {
    year: "September 2023 - prezent",
    position: "Software Engineer",
    companyName: "Genezio",
    details: `I work on product development and improvement, contributing to the evolution of the project and supporting our community.
I initiate and develop new functionality, thus contributing to the improvement of the tools and performing tests for them.`,
  },
  {
    year: "2013 - 2018",
    position: "Full Stack Intern",
    companyName: "Genezio",
    details: `I designed and implemented a system based on a Large Language Model (LLM), using a GPT Chat model that we trained with the company’s
documentation, allowing it to provide responses based on that documentation. This project involved the use of the JavaScript programming
language and a framework called Langchain. Later, I was able to successfully integrate this pattern into a Discord bot, responsible for handling
requests and providing responses via a webhook. Additionally, for the CI/CD (Continuous Integration/Continuous Deployment) aspects, I used
CircleCI.`,
  },
  {
    year: "July 2022 - October 2022",
    position: "Intern System Engineer",
    companyName: "HUAWEI ENTERPRISE ROMANIA GSC",
    details: `During my internship, I learned about the different protocols of servers (x86) and storage systems (SAN and NAS)`,
  },
];

const Experience: React.FC = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.companyName}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
