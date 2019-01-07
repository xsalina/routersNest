import React, { Component } from "react";
import { NavLink, Route, Switch } from "react-router-dom";
// import ChangeInfo from './changeinfo.jsx'
// import Address from './address.jsx'
// import Message from './message.jsx'
// import Not404 from '../not404.jsx'
export default class Users extends Component {
  state = {
    arr: []
  };
  componentDidMount() {
    this.setState({
      arr: this.props.data
    });
  }
  render() {
    return (
      <div className="users_con">
        <div className="users_leftNav">
          <ul>
            <li>
              <NavLink exact to={"/users/"}>修改个人信息</NavLink>
            </li>
            <li>
              <NavLink to={"/users/address"}>地址</NavLink>
            </li>
            <li>
              <NavLink to={"/users/msg"}>消息</NavLink>
            </li>
          </ul>
        </div>
        <div className="users_leftcon">
          <Switch>
            {
              this.state.arr.length > 0 && (
                this.state.arr.map((item,index) =>{
                  return <Route  
                    key={index}
                    {...item}
                  />
                })
              )
            }
            {/* 
            <Route exact  path={"/users/"} component={ChangeInfo} />
            <Route   path={"/users/address"} component={Address} />
            <Route   path={"/users/msg"} component={Message} />
            <Route   path={"/users/*"} component={Not404} /> 
            */}
          </Switch>
        </div>
      </div>
    );
  }
}
