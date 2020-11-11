import React from 'react';
import {SkillsTable} from "./skillsTable/SkillsTable";
import {
    listSkillsArchi,
    listSkillsDevops,
    listSkillsInProgress,
    listSkillsOutils,
    listSkillsPrincipal,
    listSkillsSecondaire
} from "./skillsTable/listes/";
export const Skills = () => {

    return <>
        <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="skills">
            <div className="w-100">
                <h2 className="mb-5">Skills</h2>
                <SkillsTable
                    listeSkills={listSkillsPrincipal}
                    titreTab={'Programming Languages/Frameworks Principal'}
                    initOpen={true}
                    type={'success'}
                    projectCol={true}
                />

                <SkillsTable
                    titreTab={'Programming Languages/Frameworks Secondaire'}
                    listeSkills={listSkillsSecondaire}
                    initOpen={false} type={"info"} projectCol={true}
                />

                <SkillsTable
                    titreTab={'Programming Languages/Frameworks In Progress'}
                    listeSkills={listSkillsInProgress}
                    initOpen={false} type={"danger"} projectCol={true}
                />

                <SkillsTable
                    titreTab={'Architecture API'}
                    listeSkills={listSkillsArchi}
                    initOpen={false} type={"secondary"} projectCol={false}
                />

                <SkillsTable
                    titreTab={'Devops'}
                    listeSkills={listSkillsDevops}
                    initOpen={false} type={"warning"} projectCol={false}
                />
                <SkillsTable
                    titreTab={'Outils de dev'}
                    listeSkills={listSkillsOutils}
                    initOpen={false} type={"success"} projectCol={false}
                />
            </div>
        </section>
    </>

}