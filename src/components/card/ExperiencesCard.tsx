import React from 'react';

export const ExperiancesCard = (props: {
    titre: string;
    enterprise: string;
    description: string[];
    date: string;
    icons: {
        name: string;
        icon: any;
    }[][]}) => {

    const name = props.titre
    const enterprise = props.enterprise
    const  description = props.description
    const icons = props.icons
    const date = props.date

    return <div className="card">
            <div className="card-body">
                <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div className="resume-content">
                        <h3 className="mb-0">{name}</h3>
                        <div className="subheading mb-3">{enterprise}</div>
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