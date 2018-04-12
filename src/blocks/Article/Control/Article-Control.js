import React, { Fragment } from 'react';
import { decl } from 'bem-react-core';

export default decl({
  block: 'Article',
  elem: 'Control',
  tag: 'div',
  content() {
    return (
      <Fragment>
        <button>More</button>
        <button>Like</button>
      </Fragment>
    );
  }
});