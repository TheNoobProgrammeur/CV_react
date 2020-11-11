import {
    pythonIcon,
    javaIcon,
    phpIcone,
    cppIcon,
    cIcon,
    springIcon,
    githubIcon,
    flaskIcon,
    adroidIcone, kotlinIcon, jsIcone, angularIcone, bashIcon
} from "../icones";

const domaine = {
    languages: "Langage",
    framwork: "Framework",
};

const cadreProjet = {
    perso: 'Projet Personel',
    univeristaire: 'Projet Universitaire',
    rechercheU: 'Projet de recherche universitaire'
};

const urlGitHub = 'https://github.com/TheNoobProgrammeur/';


const projetVide = {
    nom: "",
    cadre: "",
    description: [""],
    link: undefined,
    icone_depot: undefined
}

export const listSkillsPrincipal = [
    {
        icone: pythonIcon,
        name: 'python',
        domaine: domaine.languages,
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
        domaine: domaine.languages,
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
        domaine: domaine.languages,
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
        domaine: domaine.languages,
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
        domaine: domaine.languages,
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
        domaine: domaine.framwork,
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


export const listSkillsSecondaire = [
    {
        icone: springIcon,
        name: 'Spring',
        domaine: domaine.framwork,
        haveProject: true,
        projet: {
            nom: "Alexandrie API",
            cadre: cadreProjet.univeristaire,
            description: [
                "Projet de groupe de M1",
                "Mise en plaxe d'une API pour la gestion de collection de document"],
            link: undefined,
            icone_depot: undefined
        }
    },
    {
        icone: adroidIcone ,
        name: 'Android',
        domaine: domaine.languages,
        haveProject: true,
        projet: {
            nom: "LudoLearn",
            cadre: cadreProjet.univeristaire,
            description: [
                "Projet de groupe Cour android a l'UQAC",
                "Application de peit jeu éducatif"],
            link: urlGitHub+'LudoLearn',
            icone_depot: githubIcon
        }
    },
    {
        icone: kotlinIcon ,
        name: 'Kotlin',
        domaine: domaine.languages,
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
        domaine: domaine.framwork,
        haveProject: true,
        projet: {
            nom: "alexandrie-front",
            cadre: cadreProjet.univeristaire,
            description: [
                "Projet de group Angular",
                "Application pour géré des collection de doc"],
            link: 'https://github.com/enneagone/alexandrie-front',
            icone_depot: githubIcon
        }
    },
    {
        icone: jsIcone ,
        name: 'Javascript',
        domaine: domaine.languages,
        haveProject: false,
        projet: projetVide
    },
    {
        icone: bashIcon ,
        name: 'Bash',
        domaine: domaine.languages,
        haveProject: false,
        projet: projetVide
    },
]