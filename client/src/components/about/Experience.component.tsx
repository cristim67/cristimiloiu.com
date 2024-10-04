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
    details: `- Worked on product development and improvement, contributing to the evolution of the project and supporting the community.\n- Initiated and developed new functionalities, enhancing tools and performing tests for them. Examples of introduced functionalities include user management and integration of queues.\n- Implemented an out-of-the-box authentication system for users with GoogleAuth and Email&Password.\n- Worked with various database management systems, focusing on MongoDB and PostgreSQL, using ORMs such as Prisma, Sequelize, and Mongoose.\n- Used the GitHub platform to propose changes (pull requests) and perform reviews for team collaboration. Additionally, for task flow management and internal communication, relied on tools such as Jira and Slack.\n- Wrote articles, sample projects, and documentation for the community.\n- Developed integration tests and resolved various issues in the dashboard.`,
  },
  {
    year: "July 2023 - September 2023",
    position: "Full Stack Intern",
    companyName: "Genezio",
    details: `
  - Designed and implemented a system based on a Large Language Model (LLM), using a GPT Chat model trained with the company’s documentation, allowing it to provide responses based on that documentation. This project involved the use of the JavaScript programming language and a framework called Langchain.
  - Successfully integrated this pattern into a Discord bot, responsible for handling requests and providing responses via a webhook. Additionally, for the CI/CD aspects, used CircleCI.
  - Designed and developed a quiz web application in TypeScript, using key technologies such as React, MySQL, and Prisma ORM.
  - Successfully implemented an example webhook in TypeScript and published a package to the npm platform.
  - Developed integration tests in Python and unit tests in TypeScript. These tests are essential for maintaining the stability of the tool and for identifying bugs during updates from one version to another.
`  },
  {
    year: "October 2022 - July 2024",
    position: "Technical Coordinator",
    companyName: "League of Electronics Students (LSE)",
    details: `In my role as a Technical Coordinator within the IT Department of the Electronic Students League, I collaborated with volunteers to develop various web applications while providing training in web programming fundamentals. We focused on languages such as JavaScript and TypeScript, leveraging the React framework and Tailwind for responsive design, as well as utilizing GitHub for effective project management.

Key Projects:

- Lsebucuresti: Developed a presentation site for the organization.
- Reservation Platform: Created a website for managing laundry reservations in dormitories.
- BBETTI: Built a voting site for freshman prom.
- APV: Designed a site for presenting cross-country events.
- Electron: Developed a site for a hackathon presentation.

This experience not only honed my technical skills but also enhanced my ability to mentor and guide teams in delivering impactful digital solutions.`
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
          <p
            className="open-sans-font"
            dangerouslySetInnerHTML={{ __html: val.details.replace(/\n/g, "<br />") }}
          ></p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
