import React from "react";

interface VolunteeringItem {
  year: string;
  rol: string;
  institute: string;
  details: string;
}

const volunteeringContent: VolunteeringItem[] = [
  {
    year: "March 2024 - present",
    rol: "Student Advisor",
    institute: "Faculty of Electronics, Telecommunications and Information Technology",
    details: ``,
  },
  {
    year: "October 2023-present",
    rol: "Board Member",
    institute: "League of Electronics Students",
    details: `Representing the students of my year of study in the Board of Directors of the Electronics Students League.
Maintaining constant liaison with the students I represent to find out in a timely manner the problems or concerns they are facing.
Actively participating in all meetings of the Board of Directors`,
  },
];

const Volunteering: React.FC = () => {
  return (
    <ul>
      {volunteeringContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.rol}
            <p className=" open-sans-font">{val.institute}</p>
          </h5>
          <p className="open-sans-font"
             dangerouslySetInnerHTML={{ __html: val.details }}
          />
        </li>
      ))}
    </ul>
  );
};

export default Volunteering;
