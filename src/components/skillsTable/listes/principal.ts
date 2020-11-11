import {cIcon, cppIcon, flaskIcon, githubIcon, javaIcon, phpIcone, pythonIcon} from "../../icones";
import {cadreProjet, projectDomaine, urlGitHub} from "./const";

export const listSkillsPrincipal = [
    {
        icone: pythonIcon,
        name: 'python',
        domaine: projectDomaine.languages,
        haveProject: true,
        projet: {
            nom: "Chariot Party",
            cadre: cadreProjet.univeristaire,
            description: [
                "Petit jeu du type mario partie en debut de M1.",
                "Python a était le pricipale langague des mes étude."],
            link: urlGitHub+'Chariot-Party',
            icone_depot: githubIcon
        }
    },
    {
        icone: javaIcon,
        name: 'Java',
        domaine: projectDomaine.languages,
        haveProject: true,
        projet: {
            nom: "SwarmGraphQl",
            cadre: cadreProjet.rechercheU,
            description: [
                "Projet de recherche universitaire sous la direction du Pr Fábio Petrillo",
                "Migration d'une API Rest en architecture GraphQL"],
            link: urlGitHub+'SwarmGraphQl',
            icone_depot: githubIcon
        }
    },
    {
        icone: phpIcone,
        name: 'Php',
        domaine: projectDomaine.languages,
        haveProject: true,
        projet: {
            nom: "Projet de fin IUT",
            cadre: cadreProjet.univeristaire,
            description: [
                "Interface web pour le logiciel Auto Multiple Choice",
                "Gestion de droit utilisateur, Iterface de commande, automatisation"],
            link: undefined,
            icone_depot: undefined
        }
    },
    {
        icone: cppIcon,
        name: 'C++',
        domaine: projectDomaine.languages,
        haveProject: true,
        projet: {
            nom: "Projet CoinCoin",
            cadre: cadreProjet.univeristaire,
            description: ["Mineur de cryptomonet pour l'optimisation des performance"],
            link: urlGitHub+'CoinCoin_M1_Catho',
            icone_depot: githubIcon
        }
    },
    {
        icone: cIcon,
        name: 'C',
        domaine: projectDomaine.languages,
        haveProject: true,
        projet: {
            nom: "Projet Foule",
            cadre: cadreProjet.univeristaire,
            description: ["Projet Foule", "Projet d'algo de S1 pour appliqué les base de la programmation en C"],
            link: urlGitHub+'Projet_Foule',
            icone_depot: githubIcon
        }
    },
    {
        icone: flaskIcon,
        name: 'Flask',
        domaine: projectDomaine.framwork,
        haveProject: true,
        projet: {
            nom: "Projet API Flask",
            cadre: cadreProjet.perso,
            description: ["Mise en place d'une API de gestion d'événement",
                "Projet lab sur les test, CI/CD et d'autre domaine"],
            link: urlGitHub+'api_flask',
            icone_depot: githubIcon
        }
    }
]