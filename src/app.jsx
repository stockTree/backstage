import React from 'react'
import ReactDOM from 'react-dom'
import 'antd/dist/antd.css'
import './app.scss'
import Login from './page/login/index.jsx'
import Home from './page/home/index.jsx'
import UserManagement from './page/userManagement/index.jsx'
import DataManagement from './page/dataManagement/index.jsx'
import MerchandiseManagement from './page/merchandise/merchandiseManagement/index.jsx'
import Layout from './component/layout/index.jsx'
import Error from './page/error/index.jsx'
import Saves from './page/merchandise/merchandiseManagement/save.jsx'
import './public.scss'
import './relize.scss'

import {
    HashRouter as Router,
    Switch,
    Route,
    Redirect
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
                                    <Route path="/merchandiseManagement/save/:pid" component={Saves}></Route>
                                    <Route path="/merchandiseManagement/index" component={MerchandiseManagement}></Route>
                                    <Redirect exact from="/merchandiseManagement" to="/merchandiseManagement/index"></Redirect>
                                    {/* <Route path="/categoryManagement" component={Home}></Route> */}
                                    <Route path="/dataManagement" component={DataManagement}></Route>
                                    <Route path="/userManagement" component={UserManagement}></Route>
                                    <Route component={Error}></Route>
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

