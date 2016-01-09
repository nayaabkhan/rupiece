import React from "react";
import { Link } from 'react-router';

export default class Application extends React.Component {
  render() {
    return (
      <div>
        <h2>Application</h2>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
        </ul>
        { this.props.children }
      </div>
    );
  }
}
