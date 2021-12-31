import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import MyProjects from './pages/innerPages/myProjects';
import MyCreate from './pages/innerPages/myCreate';
import MyPersonal from './pages/innerPages/myPersonal';
import TaskMarket from './pages/innerPages/taskMarket';
import InnerNav from './components/innerComponents/innerNav';
import PublicProfile from './pages/innerPages/publicProfile';

function InnerApp() {
    return (
        <HashRouter>
            <InnerNav/>
            <div className="innerApp">
                <Route exact path="/" component={PublicProfile} />
                <Route path="/profile" render={() => {
                    return (
                        <PublicProfile/>
                    )
                }} />
                <Route path="/my-projects" render={() => {
                    return (
                        <MyProjects/>
                    )
                }} />
                <Route path="/personal" render={() => {
                    return (
                        <MyPersonal/>
                    )
                }} />
                <Route path="/create" render={() => {
                    return (
                        <MyCreate/>
                    )
                }} />
                <Route path="/task-market" render={() => {
                    return (
                        <TaskMarket/>
                    )
                }} />
            </div>
        </HashRouter>
    )
}
export default InnerApp;