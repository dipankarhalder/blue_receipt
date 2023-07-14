import { ReactNode } from "react";

// core interfaces
export interface IPageChildProps {
  children: ReactNode;
}

// errors interfaces
export interface IErrorProps {
  displayText: boolean | undefined,
  validateText: string | undefined,
};

// services interfaces
export interface ILoginResponse {
  authentication: {
    password?: string,
    salt?: string,
    sessionToken?: string,
  },
  email?: string,
  username?: string
}


// auth interfaces
export interface IAuthInputs {
  email: string,
  password: string,
};
export interface IContextProviderProps {
  children: ReactNode;
}
export interface IAuthContextData {
  res_load: boolean;
  signInFunc: (payload: IAuthInputs) => void;
}

// user interfaces
export interface IUserContextData {
  datas: string;
  // updateData: (newData: string) => void;
}



