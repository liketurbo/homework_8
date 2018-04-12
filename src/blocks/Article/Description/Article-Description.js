import React, { Fragment } from 'react';
import { decl } from 'bem-react-core';

export default decl({
  block: 'Article',
  elem: 'Description',
  tag: 'div',
  content() {
    return (
      <Fragment />
    );
  }
});