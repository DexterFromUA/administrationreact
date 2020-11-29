import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

import IconButton from '../IconButton';

export default () => {
  return (
    <IconButton
      icon={<Ionicons name="cog-outline" size={35} color="white" />}
      onClick={() => console.log('setting touched')}
    />
  );
};
