import React from 'react';
import {FormationCard} from "./formation.card";
import {allFormations} from "./formation.data";

export const Formation = () => {
    return <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="formation">
        <div className="w-100">
            <h2 className="mb-5">Formation</h2>
            {allFormations.map((formation) => <>
                <FormationCard
                    nameDegree={formation.nameDegree}
                    date={formation.date}
                    school={formation.school}
                    icon={formation.icon}/>
                <br />
            </>)}
        </div>
    </section>
}
