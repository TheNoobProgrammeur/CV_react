import React from 'react';
import {SkillsTable} from "./skills.table";
import {
    listSkillsArchi,
    listSkillsDevops,
    listSkillsInProgress,
    listSkillsOutils,
    listSkillsPrincipal,
    listSkillsSecondaire,
    listSkillDB
} from "./listes";
export const Skills = () => {

    return <>
        <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="skills">
            <div className="w-100">
                <h2 className="mb-5">Skills</h2>
                <SkillsTable
                    listeSkills={listSkillsPrincipal}
                    titreTab={'Mes principaux Languages/Frameworks de développement '}
                    initOpen={true}
                    type={'success'}
                    projectCol={true}
                />

                <SkillsTable
                    titreTab={'Languages/Frameworks de développement Secondaire'}
                    listeSkills={listSkillsSecondaire}
                    initOpen={false} type={"info"} projectCol={true}
                />

                <SkillsTable
                    titreTab={'Languages/Frameworks que je suis entrain d apprendre'}
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
                    titreTab={'BDD'}
                    listeSkills={listSkillDB}
                    initOpen={false} type={"primary"} projectCol={false}
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
