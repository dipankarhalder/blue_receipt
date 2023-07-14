import axios from 'axios';

import { IAuthInputs } from '@/utils/interface';
import { login } from '@/utils/config';

export const signin = async (payload: IAuthInputs) => {
  const response = await axios.post(login, payload);
  return response.data;
}