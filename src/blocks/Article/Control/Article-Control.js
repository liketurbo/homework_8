import React, { Fragment } from 'react';
import { decl } from 'bem-react-core';

import 'm:type=wholebigpic';
import 'm:type=halfbigpic';
import 'm:type=smallpic';
import 'm:type=nopic';

export default decl({
  block: 'Article',
  elem: 'Control',
  tag: 'div',
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
        <button><img src={require('../../../images/Actions.png')} alt="More" /></button>
        <button><img src={require('../../../images/Heart.png')} alt="Like" /></button>
      </Fragment>
    );
  }
});