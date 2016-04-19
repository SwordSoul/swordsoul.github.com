import React, { Component } from 'react';
import pages from './pages.js';
import _ from 'lodash';

export default class Page extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const name = this.props.params.name;
    const text = _.find(pages, (page) => {return page.name === name}).text;
    return (
      <span>
        <h1>
          {name}
        </h1>
        <p>
          {text}
        </p>
      </span>
    );
  }
}
