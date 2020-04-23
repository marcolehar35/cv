import React from 'react';
import Emoji from 'react-emoji-render';

const addLineBreaks = (string) => string.split('\n').map((text) => (
  <React.Fragment key={`${text}`}>
    <Emoji text={text} />
    <br />
  </React.Fragment>
));

export default addLineBreaks;
