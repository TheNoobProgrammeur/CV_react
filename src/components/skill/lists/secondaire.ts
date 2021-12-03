import {
  adroidIcone,
  angularIcone,
  bashIcon,
  cssIcone,
  dataBaseIcon,
  githubIcon,
  htmlIcone,
  jsIcone,
  kotlinIcon,
  latexIcon,
  oracleIcon,
  reactIcon,
  rIcone,
  springIcon,
} from "../../icons"
import { cadreProjet, projectDomaine, urlGitHub } from "./const"
import { SkillType } from "../skillType"

export const listSkillsSecondaire: SkillType[] = [
  {
    icon: springIcon,
    name: "Spring",
    domaine: projectDomaine.framwork,
    projet: {
      nom: "Alexandrie API",
      cadre: cadreProjet.univeristaire,
      description: [
        "Projet de groupe de M1",
        "Mise en place d'une API pour la gestion de collection de documents",
      ],
    },
  },
  {
    icon: adroidIcone,
    name: "Android",
    domaine: projectDomaine.languages,
    projet: {
      nom: "LudoLearn",
      cadre: cadreProjet.univeristaire,
      description: [
        "Projet de groupe cour android a l'UQAC",
        "Application de petit jeu éducatif",
      ],
      link: urlGitHub + "LudoLearn",
      iconDepot: githubIcon,
    },
  },
  {
    icon: kotlinIcon,
    name: "Kotlin",
    domaine: projectDomaine.languages,
    projet: {
      nom: "Birudroid",
      cadre: cadreProjet.univeristaire,
      description: [
        "Projet de group pour le cour de dev mobile à la catho",
        "Application de notation de biére. Utilisation de firebase pour la partie BDD et auth",
      ],
      link: urlGitHub + "birudroid",
      iconDepot: githubIcon,
    },
  },
  {
    icon: angularIcone,
    name: "Angular",
    domaine: projectDomaine.framwork,
    projet: {
      nom: "alexandrie-front",
      cadre: cadreProjet.univeristaire,
      description: [
        "Projet de group Angular",
        "Application pour géré des collections de documents",
      ],
      link: "https://github.com/enneagone/alexandrie-front",
      iconDepot: githubIcon,
    },
  },
  {
    icon: reactIcon,
    name: "React",
    domaine: projectDomaine.framwork,
    projet: {
      nom: "Mon CV",
      cadre: cadreProjet.perso,
      description: ["Vous êtes entrain de le lire ^^"],
      link: urlGitHub + "CV_react",
      iconDepot: githubIcon,
    },
  },
  {
    icon: jsIcone,
    name: "Javascript",
    domaine: projectDomaine.languages,
  },
  {
    icon: bashIcon,
    name: "Bash",
    domaine: projectDomaine.languages,
  },
  {
    icon: rIcone,
    name: "R",
    domaine: projectDomaine.languages,
  },
  {
    icon: htmlIcone,
    name: "HTML",
    domaine: projectDomaine.languages,
  },
  {
    icon: cssIcone,
    name: "CSS",
    domaine: projectDomaine.languages,
  },
  {
    icon: latexIcon,
    name: "Latex",
    domaine: projectDomaine.languages,
  },
  {
    icon: dataBaseIcon,
    name: "SQl",
    domaine: projectDomaine.languages,
  },
  {
    icon: oracleIcon,
    name: "PL/SQl",
    domaine: projectDomaine.languages,
  },
]
