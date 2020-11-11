import React from 'react';
import {FormationCard} from "../components/card/FormationCard";
import {quebecIcone} from "../components/icones";


export const Formation = () => {
    return <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="formation">
        <div className="w-100">
            <h2 className="mb-5">Formation</h2>
            <FormationCard nameDiplome={"Master Informatique "}
                           date={"Septembre 2019 - Aujourd'hui"}
                           ecole={"Université Catholique de Lille"}
                           haveIcone={false} icone={undefined}
            />
            <br />
            <FormationCard nameDiplome={"Baccalauréat informatique "}
                           date={"Aout 2018 - Avril 2019"}
                           ecole={"Université du Québec A Chicoutimi"}
                           haveIcone={true} icone={quebecIcone}
            />
            <br />
            <FormationCard nameDiplome={"DUT Info "}
                           date={"septembre 2016 - juin 2018"}
                           ecole={"IUT de Vélizy"}
                           haveIcone={false} icone={undefined}
            />
            <br />
            <FormationCard nameDiplome={"Baccalauréat S - Option SVT - spécialité ISN"}
                           date={"juin 2016"}
                           ecole={"Lycée Saint Exupery"}
                           haveIcone={false} icone={undefined}
            />

        </div>
    </section>
}