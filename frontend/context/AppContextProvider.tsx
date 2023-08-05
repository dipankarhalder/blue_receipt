import { AuthContextProvider } from './authContext';
import { UserContextProvider } from './userContext';
import { combineComponents } from './combineComponents';

const providers = [AuthContextProvider, UserContextProvider];
export const AppContextProvider: any = combineComponents(...providers);