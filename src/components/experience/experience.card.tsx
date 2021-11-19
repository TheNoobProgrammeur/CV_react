import React from 'react';
import {ExperienceType} from "./experience.type";

export const ExperienceCard = ({
    titre,
    company,
    description,
    date,
    icons} : ExperienceType) => {

    return <div className="card">
            <div className="card-body">
                <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div className="resume-content">
                        <h3 className="mb-0">{titre}</h3>
                        <div className="subheading mb-3">{company}</div>
                        <p>
                            {description.map(
                                    (value) => <>{value} <br/></>
                                )}
                        </p>
                    </div>
                    <div className="resume-date text-md-right">
                        <span className="text-primary">{date}</span>
                            {icons.map((value, index) =>
                                <ul className="list-inline dev-icons">
                                    {value.map((value1)=>
                                        <li title={value1.name} className="list-inline-item">
                                            {value1.icon}
                                        </li>
                                    )}
                                </ul>
                            )}
                    </div>
                </div>
            </div>
        </div>
}
