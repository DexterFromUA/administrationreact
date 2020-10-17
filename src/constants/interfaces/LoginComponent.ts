export interface ILoginComponent {
  tempUri: string;
  loginUser: () => void;
  loginUserCallback: (url: string) => void;
  loading: boolean;
}
