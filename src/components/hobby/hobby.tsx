import React, { FC } from "react"
import { HobbyCard } from "./hobby.card"

export const Hobby: FC = () => (
  <section
    className="resume-section p-3 p-lg-5 d-flex align-items-center"
    id="hobby"
  >
    <div className="w-100">
      <h2 className="mb-5">Hobby</h2>
      <HobbyCard />
    </div>
  </section>
)
