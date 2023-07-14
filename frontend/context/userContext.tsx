"use client";

import { createContext, useState, useContext, FC } from 'react';
import { IUserContextData, IContextProviderProps } from "@/utils/interface";

const UserContext = createContext<IUserContextData | undefined>(undefined);

export const UserContextProvider: FC<IContextProviderProps> = ({ children }) => {
  const [datas, setData] = useState('Hello from User context');

  const updateData = (username: string, password: string) => {
    console.log(username, password);
  };

  return (
    <UserContext.Provider value={{ datas }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = (): IUserContextData => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUserContext must be used within a UserContextProvider');
  }
  return context;
};
