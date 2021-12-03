import React, { FC } from "react"
import { ExperienceType } from "./experience.type"

export const ExperienceCard: FC<ExperienceType> = ({
  titre,
  company,
  description,
  date,
  icons,
}) => (
  <div className="card">
    <div className="card-body">
      <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
        <div className="resume-content">
          <h3 className="mb-0">{titre}</h3>
          <div className="subheading mb-3">{company}</div>
          <p>
            {description.map((value) => (
              <>
                {value} <br />
              </>
            ))}
          </p>
        </div>
        <div className="resume-date text-md-right">
          <span className="text-primary">{date}</span>
          {icons.map((value, index) => (
            <ul className="list-inline dev-icons" key={`${titre}_icon_${index}`}>
              {value.map((value1, index) => (
                <li
                  title={value1.name}
                  key={`i_${value1.name}_${index}`}
                  className="list-inline-item"
                >
                  {value1.icon}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </div>
  </div>
)
