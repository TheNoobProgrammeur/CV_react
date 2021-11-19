import {cadreProjet, projectDomaine, projetVide, urlGitHub} from "./const";
import {dotnetIcon, githubIcon, goIcon, nodeIcon} from "../../icons";


export const listSkillsInProgress= [
    {
        icon: goIcon,
        name: 'Go',
        domaine: projectDomaine.languages,
        haveProject: true,
        projet: {
            nom: "Bot Discord",
            cadre: cadreProjet.perso,
            description: [
                "Bot Discord qui me sert de lab en go",
            ],
            link: urlGitHub+'GoBot',
            icon_depot: githubIcon
        }
    },
    {
        icon: dotnetIcon ,
        name: 'DotNet',
        domaine: projectDomaine.languages,
        haveProject: false,
        projet: projetVide
    },
    {
        icon: nodeIcon ,
        name: 'NodeJS',
        domaine: projectDomaine.framwork,
        haveProject: false,
        projet: projetVide
    },
]
