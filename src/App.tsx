import React from 'react';
import {MyNavBare} from './layout/MyNavBare';
import {Presentation, Experiances, Skills} from "./components";


export class App extends React.Component   {
  render() {
    return <div id="page-top">
      <MyNavBare/>
      <div className="container-fluid p-0">
        <Presentation/>
        <hr className="m-0"/>
        <Experiances/>
        <hr className="m-0"/>
        <Skills />
      </div>
    </div>
  }
}

export default App;
