import { Presentation } from "../components/presentation/presentation"
import { Skill } from "../components/skill/skill"
import { Hobby } from "../components/hobby/hobby"
import React, { FC } from "react"
import { Experiences } from "../components/experience/experiences"
import { Formation } from "../components/formation/formation"

export const Resume: FC = () => (
  <div className="container-fluid p-0">
    <Presentation />
    <hr className="m-0" />
    <Experiences />
    <hr className="m-0" />
    <Formation />
    <hr className="m-0" />
    <Skill />
    <hr className="m-0" />
    <Hobby />
  </div>
)
