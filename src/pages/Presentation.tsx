import  {mailIcon,linkedinIcon,githubIcon,gitlabIcon,userIcon} from '../components/icones/index'
import React from 'react';


export const Presentation = () => {
    return <>
        <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
            <div className="w-100">
                <h1 className="mb-0">Antoine <span className="text-primary">Berthier</span> </h1>
                <div className="resume-date text-md-left">
                    Né le :
                    <span className="text-primary">11 Aout 1997</span>
                </div>
                <div className="subtitre mb-5">
                    {mailIcon} <a
                    href="mailto:aberthier15@gmail.com">aberthier15@gmail.com</a>
                </div>
                <p className="lead mb-5">
                    J'ai commencé l'informatique au lycée, dans le cadre d'une spécialité au Bac S.
                    <br/>
                    J'ai alors découvert un monde où tout est possible et le python m'a montré la voie de la
                    programmation.
                    <br/>
                    Aujourd'hui étudiant en master informatique et véritable passionné, je suis toujours à la recherche
                    de nouveaux défis afin de mettre en pratique mes compétences actuelles.
                    <br/>
                    <span
                        className="subheading">Mon objectif : continuer à progresser pour toujours me surpasser ! </span>
                </p>
                <div className="social-icons">
                    <a href="https://www.linkedin.com/in/antoine-berthier-623365146" rel="noreferrer" target="_blank">
                        {linkedinIcon}
                    </a>
                    <a href="https://github.com/TheNoobProgrammeur" rel="noreferrer" target="_blank">
                        {githubIcon}
                    </a>
                    <a href="https://gitlab.com/The_Noob_Programmeur" rel="noreferrer" target="_blank">
                        {gitlabIcon}
                    </a>
                    <a href={'../assert/data/CV-AntoineBerthier.pdf'} rel="noreferrer" target="_blank">
                        {userIcon}
                    </a>
                </div>
            </div>
        </section>
    </>
}