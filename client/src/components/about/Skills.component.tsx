import React from "react";

interface SkillContent {
  skillClass: string;
  skillPercent: string;
  skillName: string;
}

const skillsContent: SkillContent[] = [
  { skillClass: "p75", skillPercent: "75", skillName: "TYPESCRIPT" },
  { skillClass: "p60", skillPercent: "60", skillName: "PYTHON" },
  { skillClass: "p60", skillPercent: "60", skillName: "C/C++" },
  { skillClass: "p45", skillPercent: "45", skillName: "GO" },
  { skillClass: "p80", skillPercent: "80", skillName: "REACT" },
  { skillClass: "p86", skillPercent: "86", skillName: "TAILWIND" },
  { skillClass: "p75", skillPercent: "75", skillName: "POSTGRESQL" },
  { skillClass: "p70", skillPercent: "70", skillName: "MONGO" },
];

const Skills: React.FC = () => {
  return (
    <>
      {skillsContent.map((val: SkillContent, i: number) => (
        <div className="col-6 col-md-3 mb-3 mb-sm-5" key={i}>
          <div className={`c100 ${val.skillClass}`}>
            <span>{val.skillPercent}%</span>
            <div className="slice">
              <div className="bar"></div>
              <div className="fill"></div>
            </div>
          </div>
          <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
            {val.skillName}
          </h6>
        </div>
      ))}
    </>
  );
};

export default Skills;
