import React from "react";

interface PersonalInfoItem {
  meta: string;
  metaInfo: string;
}

const personalInfoContent: PersonalInfoItem[] = [
  { meta: "first name", metaInfo: "Cristi" },
  { meta: "last name", metaInfo: "Miloiu" },
  { meta: "Age", metaInfo: "21 Years" },
  { meta: "Nationality", metaInfo: "Romanian" },
  { meta: "Address", metaInfo: "Bucharest" },
  { meta: "phone", metaInfo: "+40791423994" },
  { meta: "Email", metaInfo: "miloiuc4@gmail.com" },
  { meta: "languages", metaInfo: "English, French" },
];

const PersonalInfo: React.FC = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val: PersonalInfoItem, i: number) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
