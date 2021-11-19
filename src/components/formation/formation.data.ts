import {formationType} from "./formation.type";
import {quebecIcone} from "../icons";

const masterFormation: formationType = {
    nameDegree: "Master Informatique ",
    date: "Septembre 2019 - Juillet 2021",
    school: "Université Catholique de Lille",
}

const quebecFormation: formationType = {
    nameDegree:"Baccalauréat informatique ",
    date:"Aout 2018 - Avril 2019",
    school:"Université du Québec A Chicoutimi",
    icon:quebecIcone,
}

const dutFormation: formationType = {
    nameDegree:"DUT Info ",
    date:"septembre 2016 - juin 2018",
    school:"IUT de Vélizy",
}

const lyceeFormation: formationType = {
    nameDegree:"Baccalauréat S - Option SVT - spécialité ISN",
    date:"juin 2016",
    school:"Lycée Saint Exupery",
}

export const allFormations: formationType[] = [
    masterFormation,
    quebecFormation,
    dutFormation,
    lyceeFormation,
]
