import React from "react";
import {formationType} from "./formation.type";

export const FormationCard = ({
    nameDegree,
    school,
    date,
    icon
}: formationType) => {

    return <div className="card">
        <div className="card-body">
            <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="resume-content">
                    <h3 className="mb-0">{nameDegree}{icon ? icon : null}</h3>
                    <div className="subheading mb-3">{school}</div>
                </div>
                <div className="resume-date text-md-right">
                    <span className="text-primary">{date}</span>
                </div>
            </div>
        </div>
    </div>
}
