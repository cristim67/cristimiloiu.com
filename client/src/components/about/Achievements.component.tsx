import React from "react";

interface AchievementItem {
  title: string;
  subTitle1: string;
  subTitle2: string;
}

const achievementsContent: AchievementItem[] = [
  { title: "2", subTitle1: "years of", subTitle2: "experience" },
  { title: "1000", subTitle1: "Happy Users", subTitle2: "that use my apps" },
];

const Achievements: React.FC = () => {
  return (
    <div className="row mt-5">
      {achievementsContent.map((val, i) => (
        <div className="col-6" key={i}>
          <div className="box-stats with-margin">
            <h3 className="poppins-font position-relative">{val.title}</h3>
            <p className="open-sans-font position-relative text-uppercase">
              {val.subTitle1} <span className="d-block">{val.subTitle2}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Achievements;
