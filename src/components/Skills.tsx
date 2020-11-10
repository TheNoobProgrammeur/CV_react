import React from 'react';
import {SkillsTable} from "./skillsTable/SkillsTable";
import ReactTooltip from "react-tooltip";
import {infoIcon} from "./icones";

export const Skills = () => {


    return <>
        <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="skills">
            <div className="w-100">
                <h2 className="mb-5">Skills
                <span style={{fontSize: '30%'}}
                      data-iscapture="true"
                      data-tip={"Ce tableau est une idée général de mes compétance. Il est basé sur un jugement personel."}>
                            {infoIcon}
                </span> <ReactTooltip type={"info"} place={'right'}/>
                </h2>
                <SkillsTable/>
            </div>
        </section>
    </>

}