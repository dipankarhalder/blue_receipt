import { getCookie } from 'cookies-next';
import { HOME } from "@/utils/variables/allRoutes";

export const validate_user = () => {
  const user_logged_token = getCookie('user_logged_token');

  if(!user_logged_token) {
    window.location.href = HOME;
  }
};
