import React from 'react';
import {MyNavBare} from './layout/MyNavBare';
import {Presentation, Experiances, Skills, Hobby, Formation} from "./pages";



export class App extends React.Component   {
  render() {
    return <div id="page-top">
      <MyNavBare/>
      <div className="container-fluid p-0">
        <Presentation/>
        <hr className="m-0"/>
        <Experiances/>
        <hr className="m-0"/>
        <Formation/>
        <hr className="m-0"/>
        <Skills />
        <hr className="m-0"/>
        <Hobby />
      </div>
    </div>
  }
}

export default App;
