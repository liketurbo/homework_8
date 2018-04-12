import React, { Fragment } from 'react';
import { declMod } from 'bem-react-core';

import Title from 'e:Title';
import Description from 'e:Description';
import Control from 'e:Control';

export default declMod({ type: 'wholebigpic' }, {
  block: 'Article',
  tag: 'article',
  _render() {
    return (
      <Fragment>
        <Title />
        <Description />
        <Control />
      </Fragment>
    );
  },
});