import { cadreProjet, projectDomaine, urlGitHub } from "./const"
import { dotnetIcon, githubIcon, goIcon, nodeIcon } from "../../icons"

export const listSkillsInProgress = [
  {
    icon: goIcon,
    name: "Go",
    domaine: projectDomaine.languages,
    haveProject: true,
    projet: {
      nom: "Bot Discord",
      cadre: cadreProjet.perso,
      description: ["Bot Discord qui me sert de lab en go"],
      link: urlGitHub + "GoBot",
      iconDepot: githubIcon,
    },
  },
  {
    icon: dotnetIcon,
    name: "DotNet",
    domaine: projectDomaine.languages,
  },
  {
    icon: nodeIcon,
    name: "NodeJS",
    domaine: projectDomaine.framwork,
  },
]
