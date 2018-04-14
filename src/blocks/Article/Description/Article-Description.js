import React, { Fragment } from 'react';
import { decl } from 'bem-react-core';

import 'm:type=wholebigpic';
import 'm:type=halfbigpic';
import 'm:type=smallpic';
import 'm:type=nopic';

export default decl({
  block: 'Article',
  elem: 'Description',
  tag: 'div',
  didMount() {
    const container = document.querySelector('.Article-Description');
    const lines = container.querySelectorAll('.Article-Description > div');

    const bottomLine = container.getBoundingClientRect().bottom;
    for (const line of lines) {
      if (line.getBoundingClientRect().bottom > bottomLine) {
        container.removeChild(line);
      }
    }
  },
  mods() {
    const { size, image } = this.props;
    
    switch (size) {
      case 'l': 
        return { type: 'wholebigpic' }; 
      case 'm': 
        return { type: 'halfbigpic' };
      default:
        if (image)
          return { type: 'smallpic' };
        else
          return { type: 'nopic' };
    }
  },
  content() {
    return (
      <Fragment>
          {
            this.props.image
            ? this.props.description.slice(0, 100)
            : this.props.description.slice(0, 200)
          }
      </Fragment>
    );
  }
});