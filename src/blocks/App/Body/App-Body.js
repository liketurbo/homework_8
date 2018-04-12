import React, { Fragment } from 'react';
import { decl } from 'bem-react-core';

import articles from '../../../data/articles.json';

import Article from 'b:Article';

export default decl({
  block: 'App',
  elem: 'Body',
  tag: 'section',
  content() {
    return (
      <Fragment>
        {articles.map((article, index) => <Article key={index} {...article} />)}
      </Fragment>
    );
  }
});