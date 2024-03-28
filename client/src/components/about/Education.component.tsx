import React from "react";

interface EducationItem {
  year: string;
  degree: string;
  institute: string;
  details: string;
}

const educationContent: EducationItem[] = [
  {
    year: "2021-present",
    degree: "Computer Science",
    institute: "Faculty of Electronics, Telecommunications and Information Technology",
    details: `
Courses: Computer Programming, Data Structures and Algorithms, Object Oriented Programming, Artificial Intelligence Systems Engineering,
Digital Integrated Circuits, Microprocessor Architecture, Probability Theory and Mathematical Statistics, Android Programming`,
  },
];

const Education: React.FC = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.degree}<p className=" open-sans-font">{val.institute}</p>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Education;
