import {projectDomaine, projetVide} from "./const";
import {circleIcon, dockerIcon, herokuIcon, netlifyIcon, travisIcon, vagrantIcon,} from "../../icons";

const devopsConst = {
    domaine: projectDomaine.devops,
    haveProject: false,
    projet: projetVide
}

export const listSkillsDevops= [
    {
        icon: circleIcon ,
        name: "Circle (CI)",
        ...devopsConst
    },
    {
        icon: travisIcon ,
        name: "Travis (CI)",
        ...devopsConst
    },
    {
        icon: herokuIcon ,
        name: "Heroku (CD)",
        ...devopsConst
    },
    {
        icon: netlifyIcon ,
        name: "Netlify (CD)",
        ...devopsConst
    },
    {
        icon: dockerIcon ,
        name: "Docker",
        ...devopsConst
    },
    {
        icon: vagrantIcon ,
        name: "Vagrant",
        ...devopsConst
    },
]
