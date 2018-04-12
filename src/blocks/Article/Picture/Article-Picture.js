import React, { Fragment } from 'react';
import { decl } from 'bem-react-core';

export default decl({
  block: 'Article',
  elem: 'Picture',
  tag: 'picture',
  content() {
    const { src, alt } = this.props;
    
    const largeImgSrc = `${/(.+?)(\.[^.]*$|$)/g.exec(src)[1]}@3x${/(.+?)(\.[^.]*$|$)/g.exec(src)[2]}`;
    const mediumImgSrc = `${/(.+?)(\.[^.]*$|$)/g.exec(src)[1]}@2x${/(.+?)(\.[^.]*$|$)/g.exec(src)[2]}`;
    
    return (
      <Fragment>
        <source media="(min-width: 992px)" srcSet={require(`../../../images/${largeImgSrc}`)} alt={alt} />
        <source media="(min-width: 768px)" srcSet={require(`../../../images/${mediumImgSrc}`)} alt={alt} />
        <img src={require(`../../../images/${src}`)} alt={alt} />
      </Fragment>
    );
  }
});