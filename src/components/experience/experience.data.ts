import { ExperienceType } from "./experience.type"
import {
  reactIcon,
  pythonIcon,
  flaskIcon,
  dockerIcon,
  bashIcon,
  ubuntuIcon,
  mongoDBIcon,
  vueJsIcon,
  javaIcon,
  graphqlIcon,
  trelloIcon,
  cssIcone,
  htmlIcone,
  nodeIcon,
  wordPressIcone,
} from "../icons"

const atosExperience: ExperienceType = {
  titre: "Developeur Junior",
  company: "Atos",
  description: ["Analyste developeurs chez des client dans le secteur du retail."],
  date: "Septembre 2021 - Aujourd'hui",
  icons: [
    [
      {
        name: "react",
        icon: reactIcon,
      },
      {
        name: "nodeJS",
        icon: nodeIcon,
      },
      {
        name: "java",
        icon: javaIcon,
      },
      {
        name: "graphQL",
        icon: graphqlIcon,
      },
    ],
  ],
}

const atosAlternantExperience: ExperienceType = {
  titre: "Alternance Developeur",
  company: "Atos",
  description: [
    "Apprenti développeur chez Atos.",
    "Projet R&D sur ma piste cyclable connecter",
    "Mise en place de l'agilité dans léquipe",
  ],
  date: "Septembre 2020 - Juillet 2021",
  icons: [
    [
      {
        name: "react",
        icon: reactIcon,
      },
      {
        name: "nodeJS",
        icon: nodeIcon,
      },
    ],
  ],
}

const capensisExperience: ExperienceType = {
  titre: "Apprenti developpeur Back-end",
  company: "Capensis",
  date: "Septembre 2019 - Juillet 2020",
  description: [
    "Apprenti développeur au sein de l'équipe Canopsis.",
    "Programmation d'un SDK pour faciliter l'installation d'un environnement de développement.",
    "Travail sur l'API REST de l'application et sur different connecteur.",
  ],
  icons: [
    [
      {
        name: "python",
        icon: pythonIcon,
      },
      {
        name: "flask",
        icon: flaskIcon,
      },
      {
        name: "docker",
        icon: dockerIcon,
      },
      {
        name: "bash",
        icon: bashIcon,
      },
    ],
    [
      {
        name: "ubuntu",
        icon: ubuntuIcon,
      },
      {
        name: "mongoDB",
        icon: mongoDBIcon,
      },
      {
        name: "vueJs",
        icon: vueJsIcon,
      },
    ],
  ],
}

const uqacExperience: ExperienceType = {
  titre: "Stagiaire - Projet de recherche universitaire",
  company: "Laboratoire d’Informatique Formelle de l’UQAC",
  description: [
    "Stage au sein du Laboratoire d’Informatique Formel de l’UQAC sous tutelle du Pr Fábio Petrillo",
    "Passage du service Swarml Debugging d’une architecture REST à une architecture utilisant Graphql.",
    "Projet fait en agilité avec la rédaction d'un backlog, détermination d'objectifs\n" +
      "pour les sprints de 2 semaines et des rendus réguliers au Pr Petrillo.",
  ],
  date: "Janvier 2019 - Avril 2019",
  icons: [
    [
      {
        name: "java",
        icon: javaIcon,
      },
      {
        name: "graphQL",
        icon: graphqlIcon,
      },
      {
        name: "trello",
        icon: trelloIcon,
      },
    ],
  ],
}

const otcheeExperience: ExperienceType = {
  titre: "Stagiaire - développeur Full-stack",
  company:
    "Stage de DUT chez OTCHEE - prestation pour L’Oréal - Division INFRASTRUCTURE &\n" +
    "OPERATIONS de la Direction des Systèmes Informatiques",
  description: [
    "Réécriture d’un script Bash en Python.",
    "Déploiement du script sur les serveurs de Test.",
    "Création d’outils autour du script. (Éditeur de fichier de configuration,\n" +
      "vérificateur de fichier etc.)",
  ],
  date: "Avril 2018 - Juin 2018",
  icons: [
    [
      { name: "python", icon: pythonIcon },
      { name: "WordPress", icon: wordPressIcone },
      { name: "HTML", icon: htmlIcone },
      { name: "CSS", icon: cssIcone },
    ],
  ],
}

export const experiences: ExperienceType[] = [
  atosExperience,
  atosAlternantExperience,
  capensisExperience,
  uqacExperience,
  otcheeExperience,
]
