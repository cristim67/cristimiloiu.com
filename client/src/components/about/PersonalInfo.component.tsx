import React from "react";

interface PersonalInfoItem {
  meta: string;
  metaInfo: string;
}

const personalInfoContent: PersonalInfoItem[] = [
  { meta: "first name", metaInfo: "Steve" },
  { meta: "last name", metaInfo: "Milner" },
  { meta: "Age", metaInfo: "27 Years" },
  { meta: "Nationality", metaInfo: "Tunisian" },
  { meta: "Freelance", metaInfo: "Available" },
  { meta: "Address", metaInfo: "Tunis" },
  { meta: "phone", metaInfo: "+21621184010" },
  { meta: "Email", metaInfo: "you@mail.com" },
  { meta: "Skype", metaInfo: " steve.milner" },
  { meta: "langages", metaInfo: "French, English" },
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
