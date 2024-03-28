import React from "react";

interface SocialItem {
  iconName: string;
  link: string;
}

const SocialShare: SocialItem[] = [
  {
    iconName: "fa fa-facebook",
    link: "https://www.facebook.com/cristi.miloiu.3",
  },
  { iconName: "fa fa-instagram", link: "https://www.instagram.com/cristi_miloiu" },
  { iconName: "fa fa-github", link: "https://github.com/cristim67" },
  {
    iconName: "fa fa-linkedin",
    link: "https://www.linkedin.com/in/cristi-miloiu-3a174a267/",
  },
];

const SocialComponent: React.FC = () => {
  return (
    <ul className="social list-unstyled pt-1 mb-5">
      {SocialShare.map((val: SocialItem, i: number) => (
        <li key={i}>
          <a href={val.link} target="_blank" rel="noreferrer">
            <i className={val.iconName}></i>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialComponent;
