import React, { FC } from "react"
import { SkillTable } from "./skill.table"
import { allSkillTable } from "./skill.table.data"

export const Skill: FC = () => (
  <>
    <section
      className="resume-section p-3 p-lg-5 d-flex align-items-center"
      id="skills"
    >
      <div className="w-100">
        <h2 className="mb-5">Skills</h2>

        {allSkillTable.map((listSkill) => (
          <SkillTable
            key={listSkill.titreTab}
            titreTab={listSkill.titreTab}
            listSkill={listSkill.listSkill}
            initOpen={listSkill.initOpen}
            type={listSkill.type}
            projectCol={listSkill.projectCol}
          />
        ))}
      </div>
    </section>
  </>
)
