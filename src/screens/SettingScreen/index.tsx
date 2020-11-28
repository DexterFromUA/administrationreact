import React from 'react';

import ScreenView from './view';

export default () => {
  const [visible, setVisible] = React.useState(false);

  return <ScreenView visible={visible} setVisible={setVisible} />;
};
