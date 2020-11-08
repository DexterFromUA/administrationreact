import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';

import InformationScreen from '../screens/NewsScreen/InformationScreen';
import NewsScreen from '../screens/NewsScreen';
import Header from '../components/ui/Header';
import ModalComponent from '../components/core/Modal';
import LoadingComponent from '../components/ui/Loading';

const SettingScreen = React.lazy(() => import('../screens/SettingScreen'));

const Stack = createStackNavigator();

const NewsRouter = () => {
  const [modal, setModal] = React.useState(false);

  return (
    <>
      <Stack.Navigator initialRouteName="News" mode="modal">
        <Stack.Screen
          name="News"
          component={NewsScreen}
          options={{
            header: ({scene, previous, navigation}) => {
              const {options} = scene.descriptor;
              const title =
                options.headerTitle ?? options.title ?? scene.route.name;

              return (
                <Header
                  title={title}
                  rightButton={() => setModal(true)}
                  buttonIcon={
                    <Ionicons name="cog-outline" size={35} color="white" />
                  }
                />
              );
            },
          }}
        />
        <Stack.Screen name="More" component={InformationScreen} />
      </Stack.Navigator>
      <ModalComponent
        visible={modal}
        setVisible={() => setModal(!modal)}
        component={
          <React.Suspense fallback={<LoadingComponent />}>
            <SettingScreen />
          </React.Suspense>
        }
      />
    </>
  );
};

export default NewsRouter;
