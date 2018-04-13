import React, { Fragment } from 'react';
import { decl } from 'bem-react-core';

import 'm:type=wholebigpic';
import 'm:type=halfbigpic';
import 'm:type=smallpic';
import 'm:type=nopic';

export default decl({
  block: 'Article',
  elem: 'Picture',
  tag: 'picture',
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
    const { image, title } = this.props;
    
    const largeImgSrc = `${/(.+?)(\.[^.]*$|$)/g.exec(image)[1]}@3x${/(.+?)(\.[^.]*$|$)/g.exec(image)[2]}`;
    const mediumImgSrc = `${/(.+?)(\.[^.]*$|$)/g.exec(image)[1]}@2x${/(.+?)(\.[^.]*$|$)/g.exec(image)[2]}`;
    
    return (
      <Fragment>
        <source media="(min-width: 992px)" srcSet={require(`../../../images/${largeImgSrc}`)} alt={title} />
        <source media="(min-width: 768px)" srcSet={require(`../../../images/${mediumImgSrc}`)} alt={title} />
        <img src={require(`../../../images/${image}`)} alt={title} />
      </Fragment>
    );
  }
});