import React, { Fragment } from 'react';
import { decl } from 'bem-react-core';

import Title from 'e:Title';
import Picture from 'e:Picture';
import Description from 'e:Description';
import Control from 'e:Control';

import 'm:type=wholebigpic';
import 'm:type=halfbigpic';
import 'm:type=smallpic';
import 'm:type=nopic';

export default decl({
  block: 'Article',
  tag: 'article',
  didMount() {
    
  },
  mods({ type }) {
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
    const { image, description } = this.props;
    return (
      <Fragment>
        <Title {...this.props} />
        {image ? <Picture {...this.props} /> : ''}
        {description ? <Description {...this.props} /> : ''}
        <Control {...this.props} />
      </Fragment>
    );
  },
});