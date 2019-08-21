import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 

import Header from './components/layout/Headers'
import Modes from './components/Modes'
import ClusterForm from './components/ClusterForm'
import DesktopForms from './components/DesktopForms'
import ExecutionView from './components/ExecutionView'
import ErrorComponent from './components/ErrorComponent'





class App extends Component {
 
 
    componentDidMount() {
        setInterval(this.hello, 250);
    }
 

 
    render() {

        return (
          <Router>
            <div className="App">
            <Header />
            <div>
              <Switch>
                <Route exact path="/"  render={props=>(<React.Fragment ><Modes /></React.Fragment>)}/>
                <Route exact path="/clustermode" render={props=>(  <ClusterForm/> )}/>
                <Route exact path="/desktopmode" render={props=>(  <DesktopForms/> )}/>
                <Route exact path="/workflow" render={props=>(  <ExecutionView/> )}/>
                <Route exact path="/*" render={props=>(  <ErrorComponent/> )}/>
              </Switch>
            </div>
                
                
          </div>
          <br />
          <br />
          <br />
          </Router>
          
        );
    }
}
 //style={{position:'relative', left:'20%'}}
export default App;