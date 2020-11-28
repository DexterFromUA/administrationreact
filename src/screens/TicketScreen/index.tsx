import React from 'react';

import ScreenView from './view';

export default () => {
  const active = true;
  const [setting, setSetting] = React.useState(false);

  return (
    <ScreenView active={active} setting={setting} setSetting={setSetting} />
  );
};
