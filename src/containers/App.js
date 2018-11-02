import React from "react";
import { Router, Route } from 'react-router-dom';
import {connect} from 'react-redux';
import {PortalPage,LoginPage} from '../components'
import {history} from '../util'

export class App extends React.Component {
  render() {
    const { alert } = this.props;
    return (
        <div className="jumbotron">
            <div className="container">
                <div className="col-sm-8 col-sm-offset-2">
                    {/* {alert.message &&
                        <div className={`alert ${alert.type}`}>{alert.message}</div>
                    } */}
                    <Router history={history}>
                        <div>
                            <Route exact path="/" component={LoginPage} />
                            <Route path="/login" component={LoginPage} />
                            <Route path="/PortalPage" component={PortalPage} />
                        </div>
                    </Router>
                </div>
            </div>
        </div>
    );
}
}

// function mapStateToProps(state) {
//   return {
//   };
// }

// const connectedApp = connect(mapStateToProps)(App);
// export { connectedApp as App }; 
