import React, { Component } from 'react';
import pages from './pages.js';
import _ from 'lodash';
import ReactMarkdown from 'react-markdown';

export default class Page extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const name = this.props.params.name;
    const text = _.find(pages, (page) => {return page.name === name}).text;
    console.log(text);
    return (
      <ReactMarkdown source={text} escapeHTML={true}/>
    );
  }
}
