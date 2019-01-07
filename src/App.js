import React, { Component } from "react";
import { BrowserRouter as Router,
        NavLink,
        Switch,
        Route

} from "react-router-dom";
import "./App.css";
// import Index from './components/index.jsx'
// import News from './components/news.jsx'
// import Users from './components/users/users.jsx'
// import Not404 from './components/not404.jsx'
import Routes from './components/routers/index.js'
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App" >
          <div className="NavTop">
            <ul>
              <li><NavLink exact to={'/'}>首页</NavLink></li>
              <li><NavLink to={'/news'}>新闻</NavLink></li>
              <li><NavLink to={'/users'}>用户中心</NavLink></li>
            </ul>
          </div>
          <hr/>
          <div className="NavTop_con">
              <Switch>
                  {
                    Routes.length > 0 && (
                      Routes.map((item,index) => {
                        return (
                          <Route   
                            key = {index}
                            exact = {item.exact}
                            path = {item.path}
                            render = {props =>{
                              return <item.component data = {item.routres} />
                            }}
                          />
                        )
                      })
                    )
                  }
                  
                  {/* 
                  <Route exact path={'/'}  component={Index} />
                  <Route path={'/news'}  component={News} />
                  <Route path={'/users'}  component={Users} />
                  <Route path={'*'}  component={Not404} /> 
                  */}
              </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
