import { projectDomaine } from "./const"
import {
  dockerHubIcone,
  githubIcon,
  gitIcone,
  gitlabIcon,
  umlIcon,
} from "../../icons"

const outilConst = {
  domaine: projectDomaine.outil,
}

export const listSkillsOutils = [
  {
    icon: gitIcone,
    name: "Git",
    ...outilConst,
  },
  {
    icon: githubIcon,
    name: "GitHub",
    ...outilConst,
  },
  {
    icon: gitlabIcon,
    name: "GitLab",
    ...outilConst,
  },
  {
    icon: dockerHubIcone,
    name: "Dpcker Hub",
    ...outilConst,
  },
  {
    icon: umlIcon,
    name: "UML",
    ...outilConst,
  },
]
