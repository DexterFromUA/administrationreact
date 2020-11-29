export interface SettingScreenViewInterface {
  visible: boolean;
  setVisible: (flag: boolean) => void;
  setSetting: () => void;
}

export interface SettingScreenInterface {
  setSetting: () => void;
}
