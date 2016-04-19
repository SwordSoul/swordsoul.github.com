import { Link } from 'react-router';
import React, { Component } from 'react';
import pages from './pages.js';


export default class Contents extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul>
        {
          pages.map((page, i) => {
            const url = `/${page.name}`;

            return (
                <li key={i}>
                  <Link to={url}>
                    {page.name}
                  </Link>
                </li>
            );
          })
        }
      </ul>
    );
  }
}
