import {pythonIcon, javaIcon, phpIcone, cppIcon, cIcon, springIcon} from "../icones";

const lab = {
    padding: 5,
    color: 'white',
    fontWeight: 'bold'
}

const styleGeneric = {
    height: '100%',
    borderRadius: 'inherit',
    textAlign: 'right'
}

const domaine = {
    languages: "Languages",
    framwork: "Framwork",
}

export const listSkills = [
    {
        icone: pythonIcon,
        name: 'python',
        domaine: domaine.languages,
        style: {
            width: '90%',
            backgroundColor: '#6a1b9a',
            ...styleGeneric,
        },
        labelStyles: lab
    },
    {
        icone: javaIcon,
        name: 'Java',
        domaine: domaine.languages,
        style: {
            width: '80%',
            backgroundColor: '#ff4d4d',
            ...styleGeneric,
        },
        labelStyles: lab
    },
    {
        icone: phpIcone,
        name: 'Php',
        domaine: domaine.languages,
        style: {
            width: '80%',
            backgroundColor: 'blue',
            ...styleGeneric,
        },
        labelStyles: lab
    },
    {
        icone: cppIcon,
        name: 'C++',
        domaine: domaine.languages,
        style: {
            width: '75%',
            backgroundColor: '#3366ff',
            ...styleGeneric,
        },
        labelStyles: lab
    },
    {
        icone: cIcon,
        name: 'C',
        domaine: domaine.languages,
        style: {
            width: '75%',
            backgroundColor: '#3366ff',
            ...styleGeneric,
        },
        labelStyles: lab
    },
    {
        icone: springIcon,
        name: 'Spring',
        domaine: domaine.framwork,
        style: {
            width: '60%',
            backgroundColor: 'green',
            ...styleGeneric,
        },
        labelStyles: lab
    }
]