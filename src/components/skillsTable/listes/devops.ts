import {projectDomaine, projetVide} from "./const";
import {circleIcon, dockerIcon, herokuIcon, netlifyIcon, travisIcon, vagrantIcon,} from "../../icones";

const devopsConst = {
    domaine: projectDomaine.devops,
    haveProject: false,
    projet: projetVide
}

export const listSkillsDevops= [
    {
        icone: circleIcon ,
        name: "Circle (CI)",
        ...devopsConst
    },
    {
        icone: travisIcon ,
        name: "Travis (CI)",
        ...devopsConst
    },
    {
        icone: herokuIcon ,
        name: "Heroku (CD)",
        ...devopsConst
    },
    {
        icone: netlifyIcon ,
        name: "Netlify (CD)",
        ...devopsConst
    },
    {
        icone: dockerIcon ,
        name: "Docker",
        ...devopsConst
    },
    {
        icone: vagrantIcon ,
        name: "Vagrant",
        ...devopsConst
    },
]
