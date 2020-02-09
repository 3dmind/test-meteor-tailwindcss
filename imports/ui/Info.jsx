import React, { Component } from 'react';

export class Info extends Component {
  render() {
    const links = this.props.links.map(
      link => this.makeLink(link),
    );

    return (
      <div className={'3dmind-w-full sm:3dmind-w-1/2'}>
        <h2
          className={'3dmind-font-sans 3dmind-text-2xl 3dmind-font-bold 3dmind-mb-2'}>
          Learn Meteor!
        </h2>
        <ul className={'3dmind-list-disc 3dmind-list-outside 3dmind-ml-6'}>
          {links}
        </ul>
      </div>
    );
  }

  makeLink(link) {
    return (
      <li key={link._id}>
        <a href={link.url} target="_blank">{link.title}</a>
      </li>
    );
  }
}
