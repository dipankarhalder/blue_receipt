"use client";

import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { createContext, useState, useContext, FC } from 'react';

import { IAuthContextData, IContextProviderProps, IAuthInputs } from '@/utils/interface';
import { allStaticContent } from "@/utils/variables/staticContent";
import { errorCatch } from '@/utils/helpers/servicesCatch';
import { DASHBOARD } from "@/utils/variables/allRoutes";
import { signin } from '@/utils/services/auth';

const AuthContext = createContext<IAuthContextData | undefined>(undefined);

export const AuthContextProvider: FC<IContextProviderProps> = ({ children }) => {
  const router = useRouter();
  const [res_load, set_res_load] = useState(false);

  const signInFunc = (payload: IAuthInputs) => {
    set_res_load(true);
    signin(payload)
      .then((res) => {
        localStorage.setItem("user_logged_info", JSON.stringify(res));
        localStorage.setItem("user_logged_token", res.authentication.sessionToken);
        setCookie("user_logged_token", res.authentication.sessionToken);
        router.push(DASHBOARD);
        set_res_load(false);
      })
      .catch(error => {
        errorCatch(error);
        set_res_load(false);
      });
  };

  return (
    <AuthContext.Provider value={{ 
      res_load,
      signInFunc 
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = (): IAuthContextData => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error(`useAuthContext ${allStaticContent} AuthContextProvider`);
  }
  return context;
};
