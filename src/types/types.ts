export enum RoutesType {
  login = "login",
  home = "home",
}

export type UserModelContextType = {
  userData: UserDataType;
  isLogged: boolean;
  authToken: string | null;
  setUserData: React.Dispatch<React.SetStateAction<UserDataType>>;
  setIsLogged: React.Dispatch<React.SetStateAction<boolean>>;
};

export interface UserModelContextProviderProps extends React.PropsWithChildren {}

export type UserDataType = {
  password?: string;
  username?: string;
};

export type LoginFromType = {
  handleOnSubmit: (e: React.SyntheticEvent) => Promise<void>;
  pending: boolean;
};
