import React from 'react';
import {ExperienceCard} from "./experience.card";
import {experiences} from "./experience.data";


export const Experiences = () => <section className="resume-section p-3 p-lg-5 d-flex justify-content-center" id="experience">
    <div className="w-100">
        <h2 className="mb-5">Experience</h2>
        {experiences.map((experience) => <>
            <ExperienceCard
                titre={experience.titre}
                company={experience.company}
                description={experience.description}
                date={experience.date}
                icons={experience.icons} />
            <br />
        </>)}
    </div>
</section>
