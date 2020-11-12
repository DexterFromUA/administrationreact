export interface ILoginComponent {
  tempUri: string;
  codeUri: string;
  loginUser: () => void;
  loginUserCallback: (url: string) => void;
  loading: boolean;
  loginGetResponseUri: (url: string) => void;
  close: (status: boolean) => void;
}
