import React, {useState} from 'react';
import {Button, Collapse} from "reactstrap";
import {angleDownIcon, angleUpIcon} from "../icones";

export const SkillsTable = (props: {
    titreTab: string,
    listeSkills: {
        icone: any,
        name: string,
        domaine: string,
        haveProject: boolean,
        projet: {
            nom: string,
            cadre: string,
            description: string[],
            link: string | undefined,
            icone_depot: any | undefined
        },
    }[],
    initOpen: boolean,
    type: string,
    projectCol: boolean
}) => {

    const titreTab = props.titreTab;
    const listeSkill = props.listeSkills;
    const projectCol = props.projectCol;

    const typeTable =  props.type;
    let classCard = 'card border-'+typeTable+' mb-3';
    let classCardHeader = "card-header bg-"+typeTable+" text-white";

    const gift1 = "https://www.animatedimages.org/data/media/202/animated-dog-image-0931.gif";
    const gift2 = "https://www.animatedimages.org/data/media/202/animated-dog-image-0932.gif";


    const [isOpen, setIsOpen] = useState(props.initOpen);



    const [iconeAngle, setIconeAngle] = useState(angleDownIcon)
    const toggle = () => {
            setIsOpen(!isOpen);
            if(isOpen){
                setIconeAngle(angleDownIcon)
            } else {
                setIconeAngle(angleUpIcon)
            }
    }

    return <>
        <div className={classCard}>
            <div className={classCardHeader}>
                <h3>{titreTab}</h3>
                <Button className="navbar-toggler" onClick={toggle}>
                    {iconeAngle}
                </Button>
            </div>
            <Collapse isOpen={isOpen}>
            <table className="table table-bordered card-body">
                <thead className="thead-dark">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Technologie</th>
                    {projectCol ? <th scope="col">Projet</th> : <></> }
                    <th scope="col">Domaine</th>
                </tr>
                </thead>
                <tbody>
                {listeSkill.map(
                    (value,index) => <tr>
                        <td className={"dev-icons"}
                            style={{textAlign: "center", verticalAlign: "middle"}}>
                            {value.icone}
                        </td>
                        <td style={{fontSize: "x-large", textAlign: "center", verticalAlign: "middle"}} >
                            <h3>{value.name}</h3>
                        </td>
                        { projectCol ?
                        <td>
                            { value.haveProject ? <>
                                    <h4>{value.projet.nom}</h4>
                                    cadre du projet : {value.projet.cadre} <br />
                                    description : {value.projet.description.map((value1) =><>{value1}<br /></>)}
                                    <a href={value.projet.link} rel="noreferrer" target="_blank">{value.projet.icone_depot}</a>
                                </> : (index%2===0) ?
                                    <img src={gift1}  alt={"gif de chien"}/> :
                                    <img src={gift2} alt={"gif de chien"}/>
                            }

                        </td>
                        : <></>}
                        <td style={{fontSize: "x-large", textAlign: "center", verticalAlign: "middle"}}>
                            {value.domaine}
                        </td>
                    </tr>
                )}
                </tbody>
            </table>
            </Collapse>
        </div>
    </>

}