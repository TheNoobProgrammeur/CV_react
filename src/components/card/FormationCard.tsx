import React from "react";

export const FormationCard = (props : {
    nameDiplome: string,
    ecole:string,
    date: string,
    haveIcone: boolean,
    icone: any
}) => {

    const diplome = props.nameDiplome;
    const ecole = props.ecole;
    const date = props.date;
    const haveIcone = props.haveIcone
    const icone = props.icone

    return <div className="card">
        <div className="card-body">
            <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="resume-content">
                    <h3 className="mb-0">{diplome }{haveIcone ? icone : <></>}</h3>
                    <div className="subheading mb-3">{ecole}</div>
                </div>
                <div className="resume-date text-md-right">
                    <span className="text-primary">{date}</span>
                </div>
            </div>
        </div>
    </div>
}