import React, { Fragment } from 'react';
import { decl } from 'bem-react-core';

export default decl({
  block: 'App',
  elem: 'Header',
  tag: 'header',
  content() {
    return (
      <Fragment>
        <picture>
          <source media="(min-width: 992px)" srcSet={require("../../../images/zen_logo@3x.png")} alt="Zen Logo" />
          <source media="(min-width: 768px)" srcSet={require("../../../images/zen_logo@2x.png")} alt="Zen Logo" />
          <img src={require("../../../images/zen_logo.png")} alt="Zen Logo" />
        </picture>
      </Fragment>
    );
  }
});
