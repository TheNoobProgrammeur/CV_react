/* eslint-disable react/no-unescaped-entities */
import { globIcon } from "../icons"
import React, { FC, useState } from "react"
import { Collapse } from "reactstrap"

export const HobbyCard: FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggel = () => setIsOpen(!isOpen)

  const gif = "https://giphy.com/embed/3oGRFlpAW4sIHA02NW"
  const gifTitre = "gif"

  return (
    <div className="card">
      <div className="card-header">
        <h3> {globIcon} Pour parler plus de moi </h3>
      </div>

      <div className="card-body">
        <p className="card-text">
          Ma curiosité ne se borne pas au seul domaine des nouvelles technologies.
          L'Histoire est par exemple un sujet qui me passionne, notamment l'Histoire
          du XVIIe siècle.
        </p>
        <p className="card-text">
          Parisien d'origine, j'aime découvrir d'autres cultures et régions du monde
          : de la Tunisie à l'Écosse et du Québec à l'Ouest Américain je n'hésite pas
          à partir à l'aventure dès que j'en ai l'occasion.
        </p>
        <p className="card-text">
          J'aime lire tout type de roman ou BD. Grand passionné de jeux de société,
          je peux passer sans sourciller cinq heures à jouer, tant que l'ambiance est
          conviviale et que la partie est prenante.
        </p>
        <p>
          Au Québec j'ai pu m'initier aux JDR et j'aimerais retenter l’expérience ici
          en France. Je suis preneur de toute adresse ou bon plan qui me permettrait
          à nouveau de connaître le plaisir de m'immerger dans le monde des{" "}
          <span onClick={toggel}> dés </span> à 30 faces et des fiches personnages.
          Plus largement, j'aime échanger de manière détendue au détour d'un verre,
          échanger des éclats de rire, surtout lors des soirées qui se prolongent
          jusqu'au petit matin.
        </p>
      </div>

      <Collapse isOpen={isOpen}>
        <iframe
          src={gif}
          title={gifTitre}
          width="480"
          height="480"
          frameBorder="0"
          allowFullScreen
        />
      </Collapse>
    </div>
  )
}
