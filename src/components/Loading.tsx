import React from 'react';
import {ActivityIndicator} from 'react-native';

type ILoading = {
  size?: any;
  color?: string;
};

const Loading = ({size, color}: ILoading) => {
  return <ActivityIndicator size={size} color={color} />;
};

export default Loading;
