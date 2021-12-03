import React, { FC } from "react"
import { MyNavBare } from "./layout"
import { Resume } from "./pages/resume"

export const App: FC = () => {
  return (
    <div id="page-top">
      <MyNavBare />
      <Resume />
    </div>
  )
}

export default App
