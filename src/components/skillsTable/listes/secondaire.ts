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
} from "../../icones";
import {cadreProjet, projectDomaine, projetVide, urlGitHub} from "./const";


export const listSkillsSecondaire = [
    {
        icone: springIcon,
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
            icone_depot: undefined
        }
    },
    {
        icone: adroidIcone ,
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
            icone_depot: githubIcon
        }
    },
    {
        icone: kotlinIcon ,
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
            icone_depot: githubIcon
        }
    },
    {
        icone: angularIcone ,
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
            icone_depot: githubIcon
        }
    },
    {
        icone: reactIcon ,
        name: 'React',
        domaine: projectDomaine.framwork,
        haveProject: true,
        projet: {
            nom: "Mon CV",
            cadre: cadreProjet.perso,
            description: [
                "Vous êtes entrain de le lire ^^"],
            link: urlGitHub+"CV_react",
            icone_depot: githubIcon
        }
    },
    {
        icone: jsIcone ,
        name: 'Javascript',
        domaine: projectDomaine.languages,
        haveProject: false,
        projet: projetVide
    },
    {
        icone: bashIcon ,
        name: 'Bash',
        domaine: projectDomaine.languages,
        haveProject: false,
        projet: projetVide
    },
    {
        icone: rIcone ,
        name: 'R',
        domaine: projectDomaine.languages,
        haveProject: false,
        projet: projetVide
    },
    {
        icone: htmlIcone ,
        name: 'HTML',
        domaine: projectDomaine.languages,
        haveProject: false,
        projet: projetVide
    },
    {
        icone: cssIcone ,
        name: 'CSS',
        domaine: projectDomaine.languages,
        haveProject: false,
        projet: projetVide
    },
    {
        icone: latexIcon ,
        name: 'Latex',
        domaine: projectDomaine.languages,
        haveProject: false,
        projet: projetVide
    },
    {
        icone: dataBaseIcon ,
        name: 'SQl',
        domaine: projectDomaine.languages,
        haveProject: false,
        projet: projetVide
    },
    {
        icone: oracleIcon ,
        name: 'PL/SQl',
        domaine: projectDomaine.languages,
        haveProject: false,
        projet: projetVide
    },
]
