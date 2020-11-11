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
        name: "Circle (CI)",
        ...outilConst
    },
    {
        icone: githubIcon ,
        name: "Circle (CI)",
        ...outilConst
    },
    {
        icone: gitlabIcon ,
        name: "Heroku (CD)",
        ...outilConst
    },
    {
        icone: dockerHubIcone ,
        name: "Netlify (CD)",
        ...outilConst
    },
    {
        icone: umlIcon ,
        name: "UML",
        ...outilConst
    }
]