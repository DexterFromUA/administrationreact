import {AnyAction, Dispatch} from 'redux';

const SET_SETTING = 'APP/SET_SETTING';

const initialState = {
  settingShowed: false,
};

export default (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case SET_SETTING: {
      return {
        ...state,
        settingShowed: !state.settingShowed,
      };
    }

    default:
      return state;
  }
};

export const setSetting = () => ({
  type: SET_SETTING,
});
