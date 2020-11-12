import {firebaseIcone, mongoDBIcon, mysqlIcon, oracleIcon, postgresqlIcon} from "../../icones";
import {projectDomaine, projetVide} from "./const";

const dbConst = {
    domaine: projectDomaine.db,
    haveProject: false,
    projet: projetVide
}

export const listSkillDB = [
    {
        icone: mysqlIcon,
        name: "MySQL",
        ...dbConst

    },
    {
        icone: postgresqlIcon,
        name: "PostgreSQL",
        ...dbConst

    },
    {
        icone: firebaseIcone,
        name: "Firebase",
        ...dbConst
    },
    {
        icone: oracleIcon,
        name: "Oracle",
        ...dbConst
    },
    {
        icone: mongoDBIcon,
        name: "MongoDB",
        ...dbConst
    },
]