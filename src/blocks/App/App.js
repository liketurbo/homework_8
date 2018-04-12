import React, { Fragment } from 'react';
import { decl } from 'bem-react-core';

import Header from 'e:Header';
import Body from 'e:Body';
import Footer from 'e:Footer';

export default decl({
  block: 'App',
  tag: 'main',
  content() {
    return (
      <Fragment>
        <Header />
        <Body />
        <Footer />
      </Fragment>
    );
  }
});
