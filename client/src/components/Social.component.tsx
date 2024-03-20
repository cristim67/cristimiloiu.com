import React from "react";

interface SocialItem {
  iconName: string;
  link: string;
}

const SocialShare: SocialItem[] = [
  {
    iconName: "fa fa-facebook",
    link: "https://www.facebook.com/",
  },
  { iconName: "fa fa-twitter", link: "https://twitter.com/" },
  {
    iconName: "fa fa-youtube",
    link: "https://www.youtube.com/",
  },
  { iconName: "fa fa-dribbble", link: "https://dribbble.com/" },
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
