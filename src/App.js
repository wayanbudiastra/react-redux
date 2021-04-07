import React, { Component } from 'react'
import JumbotronComponent from './components/JumbotronComponent'
import NavbarComponent from './components/NavbarComponent'
import {
  Route,
  BrowserRouter
} from "react-router-dom";
import HomeContainer from './containers/HomeContainer';
import CreateUserContainer from './containers/CreateUserContainer';
import DetailUserContainer from './containers/DetailUserContainer';
import EditUserContainer from './containers/EditUserContainer';

export default class App extends Component {

  state = {
    title: "React Redux",
    users: [
      {
        id:1,
        name:"budi",
        alamat: "Denpasar",
        umur: 31,
        nohp:"09092809182",
      },
      {
        id:2,
        name:"agus",
        alamat: "Denpasar",
        umur: 31,
        nohp:"09092809182",
      },
      {
        id:3,
        name:"Maya",
        alamat: "Denpasar",
        umur: 31,
        nohp:"09092809182",
      },
    ]
  }

  render() {
    return (
      <div>
       <NavbarComponent />
       <JumbotronComponent title={this.state.title} />
       <BrowserRouter>
          <Route path="/" exact>
            <HomeContainer users={this.state.users}/>
          </Route>
          <Route path="/create">
           <CreateUserContainer />
          </Route>
          <Route path="/detail/:id">
            <DetailUserContainer />
          </Route>
          <Route path="/edit/:id">
            <EditUserContainer />
          </Route>
       </BrowserRouter>
       {/* <TableComponent users={this.state.users} /> */}
      </div>
    )
  }
}
