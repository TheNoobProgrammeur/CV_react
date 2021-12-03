import React, { FC } from "react"
import { listeLiens } from "./liste"

export const LiensPartie: FC<{ fun?: () => void }> = ({ fun }) => {
  return (
    <>
      <ul className="navbar-nav">
        {listeLiens.map((value) => (
          <li className="nav-item" key={value.name}>
            <a
              className="nav-link js-scroll-trigger"
              onClick={fun}
              href={value.lien}
            >
              {value.name}
            </a>
          </li>
        ))}
      </ul>
    </>
  )
}
