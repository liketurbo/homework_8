import React, { Fragment } from 'react';
import { decl } from 'bem-react-core';

export default decl({
  block: 'Article',
  elem: 'Title',
  tag: 'h2',
  content() {
    return (
      <Fragment />
    );
  }
});