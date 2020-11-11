import React from 'react';
import {ExperiancesCard} from "../components/card/ExperiencesCard";
import {
    reactIcon,
    pythonIcon,
    flaskIcon,
    dockerIcon,
    bashIcon,
    ubuntuIcon,
    mongoDBIcon,
    vueJsIcon,
    javaIcon,
    graphqlIcon,
    trelloIcon,
    cssIcone,
    htmlIcone,
    nodeIcon,
    wordPressIcone
} from "../components/icones/index";


export const Experiances = () => {

    return <>
        <section className="resume-section p-3 p-lg-5 d-flex justify-content-center" id="experience">
            <div className="w-100">
                <h2 className="mb-5">Experience</h2>
                    <ExperiancesCard
                        titre={"Alternance Developeur"}
                        enterprise={"Atos"}
                        description={["Apprenti développeur Chez Atos."]}
                        date={"Septembre 2020 - Aujourd'hui"}
                        icons={[
                            [
                                {'name':'react','icon':reactIcon},
                                {'name':'nodeJS','icon':nodeIcon}]
                        ]}
                    />
                <br/>
                <ExperiancesCard
                    titre={'Apprenti developpeur Back-end'}
                    enterprise={'Capensis'}
                    date={"Septembre 2019 - Juillet 2020"}
                    description={["Apprenti développeur au sein de l'équipe Canopsis.",
                        "Programmation d'un SDK pour faciliter l'installation d'un environnement de développement.",
                        "Travail sur l'API REST de l'application et sur different connecteur."]}
                    icons={[
                        [
                            {'name':'python','icon':pythonIcon},
                            {'name':'flask','icon':flaskIcon},
                            {'name':'docker','icon':dockerIcon},
                            {'name':'bash','icon':bashIcon},
                        ],
                        [
                            {'name':'ubuntu','icon':ubuntuIcon},
                            {'name':'mongoDB','icon':mongoDBIcon},
                            {'name':'vueJs','icon':vueJsIcon},
                        ]
                    ]}
                />
                <br/>
                <ExperiancesCard
                    titre={'Stagiaire - Projet de recherche universitaire'}
                    enterprise={'Laboratoire d’Informatique Formelle de l’UQAC'}
                    description={[
                        "Stage au sein du Laboratoire d’Informatique Formel de l’UQAC sous tutelle du Pr Fábio Petrillo",
                        "Passage du service Swarml Debugging d’une architecture REST à une architecture utilisant Graphql.",
                        "Projet fait en agilité avec la rédaction d'un backlog, détermination d'objectifs\n" +
                        "pour les sprints de 2 semaines et des rendus réguliers au Pr Petrillo."
                    ]}
                    date={'Janvier 2019 - Avril 2019'}
                    icons={
                        [
                            [
                                {'name':'java','icon':javaIcon},
                                {'name':'graphQL','icon':graphqlIcon},
                                {'name':'trello','icon':trelloIcon},
                            ]
                        ]
                    }/>
                <br/>
                <ExperiancesCard
                    titre={"Stagiaire - développeur Full-stack"}
                    enterprise={"Stage de DUT chez OTCHEE - prestation pour L’Oréal - Division INFRASTRUCTURE &\n" +
                    "OPERATIONS de la Direction des Systèmes Informatiques"}
                    description={[
                        "Réécriture d’un script Bash en Python.",
                        "Déploiement du script sur les serveurs de Test.",
                        "Création d’outils autour du script. (Éditeur de fichier de configuration,\n" +
                        "vérificateur de fichier etc.)"
                    ]}
                    date={"Avril 2018 - Juin 2018"}
                    icons={
                        [
                            [
                                {'name':'python','icon':pythonIcon},
                                {'name':'WordPress','icon':wordPressIcone},
                                {'name':'HTML','icon':htmlIcone},
                                {'name':'CSS','icon':cssIcone},
                            ]
                        ]
                    }/>
            </div>
        </section>
    </>
}