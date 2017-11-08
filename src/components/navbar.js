import React, { Component } from 'react';
import {Navbar, NavItem, Button, Icon} from 'react-materialize'

export default class Example extends Component {
  render(){
    return(
      <Navbar brand='Sablemen' right>
        <NavItem href='#'><Icon>search</Icon></NavItem>
        <NavItem href='#'><Icon>view_module</Icon></NavItem>
        <NavItem href='#'><Icon>refresh</Icon></NavItem>
        <NavItem href='#'><Icon>more_vert</Icon></NavItem>
      </Navbar>
    )
  }
}
