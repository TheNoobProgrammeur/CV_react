import React from 'react';
import {MyNavBare} from './layout';
import {Resume} from "./pages/resume";



export class App extends React.Component   {
  render() {
    return <div id="page-top">
      <MyNavBare/>
      <Resume />
    </div>
  }
}

export default App;
