import React from "react";

interface AchievementItem {
  title: string;
  subTitle1: string;
  subTitle2: string;
}

const achievementsContent: AchievementItem[] = [
  { title: "1", subTitle1: "years of", subTitle2: "experience" },
  { title: "50", subTitle1: "completed", subTitle2: "projects" },
  { title: "500", subTitle1: "Happy", subTitle2: "users" },
  { title: "2", subTitle1: "awards", subTitle2: "won" },
];

const Achievements: React.FC = () => {
  return (
    <div className="row">
      {achievementsContent.map((val, i) => (
        <div className="col-6" key={i}>
          <div className="box-stats with-margin">
            <h3 className="poppins-font position-relative">{val.title}</h3>
            <p className="open-sans-font m-0 position-relative text-uppercase">
              {val.subTitle1} <span className="d-block">{val.subTitle2}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Achievements;
