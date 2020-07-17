import React from 'react'
import ReactDOM from 'react-dom'
import 'antd/dist/antd.css'
import './app.scss'
import Login from './page/login/index.jsx'
import Home from './page/home/index.jsx'
import Layout from './component/layout/index.jsx'
import './public.scss'
import './relize.scss'

import {
    HashRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
class App extends React.Component {
    render () {
        return (
            <div>
                <Router>
                    <Switch>
                    <Route path="/login" component={Login}></Route>
                        <Route path="/" render={(props) => (
                            <Layout>
                                <Switch>
                                    <Route  exact path="/" component={Home}></Route>
                                    <Route path="/merchandiseManagement" component={Home}></Route>
                                    <Route path="/categoryManagement" component={Home}></Route>
                                    <Route path="/orderManagement" component={Home}></Route>
                                    <Route path="/userManagemen" component={Home}></Route>
                                </Switch>
                            </Layout>
                        )}>
                        </Route>
                    </Switch>
                </Router>
            </div>
        )
    }
}

ReactDOM.render(
<App>
   

</App>,document.getElementById('app'))

