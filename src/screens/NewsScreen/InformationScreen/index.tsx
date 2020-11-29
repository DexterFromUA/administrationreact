import React from 'react';
import {useNavigation} from '@react-navigation/native';

import {InformationScreenInterface} from './types';
import ScreenView from './view';

export default ({route}: InformationScreenInterface) => {
  const {title, full} = route.params;
  const {setOptions} = useNavigation();

  React.useEffect(() => {
    setOptions({
      title: title,
      headerRight: null,
    });
  }, [title]);

  return <ScreenView full={full} />;
};
