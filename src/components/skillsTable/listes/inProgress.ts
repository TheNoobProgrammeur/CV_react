import {cadreProjet, projectDomaine, projetVide, urlGitHub} from "./const";
import {dotnetIcon, githubIcon, goIcon, nodeIcon} from "../../icones";


export const listSkillsInProgress= [
    {
        icone: goIcon,
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
            icone_depot: githubIcon
        }
    },
    {
        icone: dotnetIcon ,
        name: 'DotNet',
        domaine: projectDomaine.languages,
        haveProject: false,
        projet: projetVide
    },
    {
        icone: nodeIcon ,
        name: 'NodeJS',
        domaine: projectDomaine.framwork,
        haveProject: false,
        projet: projetVide
    },
]