import { TabSkillType } from "./skillType"
import {
  listSkillsArchi,
  listSkillsDevops,
  listSkillsInProgress,
  listSkillsOutils,
  listSkillsPrincipal,
  listSkillsSecondaire,
} from "./lists"

const tablePrincipale: TabSkillType = {
  listSkill: listSkillsPrincipal,
  titreTab: "Mes principaux Languages/Frameworks de développement ",
  initOpen: true,
  type: "success",
  projectCol: true,
}

const tableSecondaire: TabSkillType = {
  titreTab: "Languages/Frameworks de développement Secondaire",
  listSkill: listSkillsSecondaire,
  type: "info",
  projectCol: true,
}

const tableInProgress: TabSkillType = {
  titreTab: "Languages/Frameworks que je suis entrain d apprendre",
  listSkill: listSkillsInProgress,
  type: "danger",
  projectCol: true,
}

const tableAPI: TabSkillType = {
  titreTab: "Architecture API",
  listSkill: listSkillsArchi,
  type: "secondary",
}

const tableDevOps: TabSkillType = {
  titreTab: "DevOps",
  listSkill: listSkillsDevops,
  type: "warning",
}

const tableOutils: TabSkillType = {
  titreTab: "Outils de dev",
  listSkill: listSkillsOutils,
  type: "success",
}

export const allSkillTable: TabSkillType[] = [
  tablePrincipale,
  tableSecondaire,
  tableInProgress,
  tableAPI,
  tableDevOps,
  tableOutils,
]
