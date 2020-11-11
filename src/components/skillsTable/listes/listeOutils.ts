import {projectDomaine, projetVide} from "./const";
import {dockerHubIcone, githubIcon, gitIcone, gitlabIcon, umlIcon} from "../../icones";

const outilConst = {
    domaine: projectDomaine.outil,
    haveProject: false,
    projet: projetVide
}

export const listSkillsOutils= [
    {
        icone: gitIcone ,
        name: "Git",
        ...outilConst
    },
    {
        icone: githubIcon ,
        name: "GitHub",
        ...outilConst
    },
    {
        icone: gitlabIcon ,
        name: "GitLab",
        ...outilConst
    },
    {
        icone: dockerHubIcone ,
        name: "Dpcker Hub",
        ...outilConst
    },
    {
        icone: umlIcon ,
        name: "UML",
        ...outilConst
    }
]