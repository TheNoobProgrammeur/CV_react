import {
    adroidIcone,
    angularIcone,
    bashIcon, cssIcone, dataBaseIcon,
    githubIcon,
    htmlIcone,
    jsIcone,
    kotlinIcon, latexIcon, oracleIcon, reactIcon,
    rIcone,
    springIcon
} from "../../icons";
import {cadreProjet, projectDomaine, projetVide, urlGitHub} from "./const";


export const listSkillsSecondaire = [
    {
        icon: springIcon,
        name: 'Spring',
        domaine: projectDomaine.framwork,
        haveProject: true,
        projet: {
            nom: "Alexandrie API",
            cadre: cadreProjet.univeristaire,
            description: [
                "Projet de groupe de M1",
                "Mise en place d'une API pour la gestion de collection de documents"],
            link: undefined,
            icon_depot: undefined
        }
    },
    {
        icon: adroidIcone ,
        name: 'Android',
        domaine: projectDomaine.languages,
        haveProject: true,
        projet: {
            nom: "LudoLearn",
            cadre: cadreProjet.univeristaire,
            description: [
                "Projet de groupe cour android a l'UQAC",
                "Application de petit jeu éducatif"],
            link: urlGitHub+'LudoLearn',
            icon_depot: githubIcon
        }
    },
    {
        icon: kotlinIcon ,
        name: 'Kotlin',
        domaine: projectDomaine.languages,
        haveProject: true,
        projet: {
            nom: "Birudroid",
            cadre: cadreProjet.univeristaire,
            description: [
                "Projet de group pour le cour de dev mobile à la catho",
                "Application de notation de biére. Utilisation de firebase pour la partie BDD et auth"],
            link: urlGitHub+'birudroid',
            icon_depot: githubIcon
        }
    },
    {
        icon: angularIcone ,
        name: 'Angular',
        domaine: projectDomaine.framwork,
        haveProject: true,
        projet: {
            nom: "alexandrie-front",
            cadre: cadreProjet.univeristaire,
            description: [
                "Projet de group Angular",
                "Application pour géré des collections de documents"],
            link: 'https://github.com/enneagone/alexandrie-front',
            icon_depot: githubIcon
        }
    },
    {
        icon: reactIcon ,
        name: 'React',
        domaine: projectDomaine.framwork,
        haveProject: true,
        projet: {
            nom: "Mon CV",
            cadre: cadreProjet.perso,
            description: [
                "Vous êtes entrain de le lire ^^"],
            link: urlGitHub+"CV_react",
            icon_depot: githubIcon
        }
    },
    {
        icon: jsIcone ,
        name: 'Javascript',
        domaine: projectDomaine.languages,
        haveProject: false,
        projet: projetVide
    },
    {
        icon: bashIcon ,
        name: 'Bash',
        domaine: projectDomaine.languages,
        haveProject: false,
        projet: projetVide
    },
    {
        icon: rIcone ,
        name: 'R',
        domaine: projectDomaine.languages,
        haveProject: false,
        projet: projetVide
    },
    {
        icon: htmlIcone ,
        name: 'HTML',
        domaine: projectDomaine.languages,
        haveProject: false,
        projet: projetVide
    },
    {
        icon: cssIcone ,
        name: 'CSS',
        domaine: projectDomaine.languages,
        haveProject: false,
        projet: projetVide
    },
    {
        icon: latexIcon ,
        name: 'Latex',
        domaine: projectDomaine.languages,
        haveProject: false,
        projet: projetVide
    },
    {
        icon: dataBaseIcon ,
        name: 'SQl',
        domaine: projectDomaine.languages,
        haveProject: false,
        projet: projetVide
    },
    {
        icon: oracleIcon ,
        name: 'PL/SQl',
        domaine: projectDomaine.languages,
        haveProject: false,
        projet: projetVide
    },
]
