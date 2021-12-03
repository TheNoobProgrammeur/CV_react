import React, { FC, useEffect, useState } from "react"
import { Button, Collapse } from "reactstrap"
import { angleDownIcon, angleUpIcon } from "../icons"
import { TabSkillType } from "./skillType"

export const SkillTable: FC<TabSkillType> = ({
  titreTab,
  listSkill,
  initOpen,
  type,
  projectCol,
}) => {
  const classCard = "card border-" + type + " mb-3"
  const classCardHeader = "card-header bg-" + type + " text-white"

  const gift1 =
    "https://www.animatedimages.org/data/media/202/animated-dog-image-0931.gif"
  const gift2 =
    "https://www.animatedimages.org/data/media/202/animated-dog-image-0932.gif"

  const [isOpen, setIsOpen] = useState(initOpen)

  const [iconAngle, setIconAngle] = useState<React.ReactElement>()

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  useEffect(
    () => (isOpen ? setIconAngle(angleUpIcon) : setIconAngle(angleDownIcon)),
    [isOpen]
  )

  return (
    <>
      <div className={classCard}>
        <div className={classCardHeader}>
          <h3>{titreTab}</h3>
          <Button className="navbar-toggler" onClick={toggle}>
            {iconAngle}
          </Button>
        </div>
        <Collapse isOpen={isOpen}>
          <table className="table table-bordered card-body">
            <thead className="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Technologie</th>
                {projectCol ? <th scope="col">Projet</th> : <></>}
              </tr>
            </thead>
            <tbody>
              {listSkill.map((value, index) => (
                <tr key={value.name}>
                  <td
                    className={"dev-icons"}
                    style={{ textAlign: "center", verticalAlign: "middle" }}
                  >
                    {value.icon}
                  </td>
                  <td
                    style={{
                      fontSize: "x-large",
                      textAlign: "center",
                      verticalAlign: "middle",
                    }}
                  >
                    <h3>{value.name}</h3>
                  </td>
                  {projectCol ? (
                    <td style={{ paddingLeft: 50 }}>
                      {value.projet ? (
                        <>
                          <h4>{value.projet.nom}</h4>
                          cadre du projet : {value.projet.cadre} <br />
                          description :{" "}
                          {value.projet.description.map((value1) => (
                            <>
                              {value1}
                              <br />
                            </>
                          ))}
                          <a
                            href={value.projet.link}
                            rel="noreferrer"
                            target="_blank"
                          >
                            {value.projet.iconDepot}
                          </a>
                        </>
                      ) : index % 2 === 0 ? (
                        <img
                          src={gift1}
                          alt={"gif de chien"}
                          style={{ paddingLeft: "25%" }}
                        />
                      ) : (
                        <img
                          src={gift2}
                          alt={"gif de chien"}
                          style={{ paddingLeft: "25%" }}
                        />
                      )}
                    </td>
                  ) : (
                    <></>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </Collapse>
      </div>
    </>
  )
}
