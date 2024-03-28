import React from "react";

interface VolunteeringItem {
  year: string;
  rol: string;
  institute: string;
  details: string;
}

const volunteeringContent: VolunteeringItem[] = [
  {
    year: "October 2023-present",
    rol: "Board Member",
    institute: "League of Electronics Students",
    details: `Representing the students of my year of study in the Board of Directors of the Electronics Students League.
Maintaining constant liaison with the students I represent to find out in a timely manner the problems or concerns they are facing.
Actively participating in all meetings of the Board of Directors`,
  },
  {
    year: "October 2022- October 2023",
    rol: "Assistant Coordinator",
    institute: "League of Electronics Students",
    details: `As an Assistant Coordinator in the IT Department of the Electronic Students League, I worked with volunteers to develop several web applica‑
tions, training them in the fundamentals of web programming. We covered languages  such as JavaScript, TypeScript, using the React frame‑
work, Tailwind, as well as project management on the GitHub platform.`,
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
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Volunteering;
