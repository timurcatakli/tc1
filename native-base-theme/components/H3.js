// @flow

import variable from '../variables/platform';

export default (variables /* : * */ = variable) => {
  const h3Theme = {
    fontSize: variables.fontSizeH3,
    lineHeight: variables.lineHeightH3,
    fontFamily: 'Rubik-Medium',
    color: variables.customHeadingColor,
  };

  return h3Theme;
};
