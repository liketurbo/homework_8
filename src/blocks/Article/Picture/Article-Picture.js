import React, { Fragment } from 'react';
import { decl } from 'bem-react-core';

export default decl({
  block: 'Article',
  elem: 'Picture',
  tag: 'picture',
  willInit() {
    this.importImg();
  },
  importImg() {
    // if (this.props.src) {
    //   this.state.smallImg = require(`../../../images/${this.props.src}`);
    // }
  },
  content() {
    const { src, alt } = this.props;
    return (
      <Fragment>
        <source media="(min-width: 992px)" srcSet="img/1@3x.png" />
        <source media="(min-width: 768px)" srcSet="img/1@2x.png" />
        <img src={src} alt={alt} />
      </Fragment>
    );
  }
});