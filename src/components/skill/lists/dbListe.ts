import {
  firebaseIcone,
  mongoDBIcon,
  mysqlIcon,
  oracleIcon,
  postgresqlIcon,
} from "../../icons"
import { projectDomaine } from "./const"

const dbConst = {
  domaine: projectDomaine.db,
  haveProject: false,
}

export const listSkillDB = [
  {
    icon: mysqlIcon,
    name: "MySQL",
    ...dbConst,
  },
  {
    icon: postgresqlIcon,
    name: "PostgreSQL",
    ...dbConst,
  },
  {
    icon: firebaseIcone,
    name: "Firebase",
    ...dbConst,
  },
  {
    icon: oracleIcon,
    name: "Oracle",
    ...dbConst,
  },
  {
    icon: mongoDBIcon,
    name: "MongoDB",
    ...dbConst,
  },
]
