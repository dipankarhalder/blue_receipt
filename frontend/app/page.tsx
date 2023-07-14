"use client"

import Image from 'next/image';
import { FC, useEffect } from 'react';
import { getCookie } from 'cookies-next';
import { useForm } from "react-hook-form";
import { Toaster } from 'react-hot-toast';
import { useRouter } from "next/navigation";
import { yupResolver } from '@hookform/resolvers/yup';

import ErrorText from "@/utils/components/ErrorText";
import { authSchema } from "@/utils/helpers/validation";
import { IAuthInputs } from "@/utils/interface";
import { allStaticContent } from "@/utils/variables/staticContent";
import { HOME, DASHBOARD } from "@/utils/variables/allRoutes";
import { useAuthContext } from '@/context/authContext';

import logo from '@/public/logo.png';
import auth from '@/styles/auth.module.scss';

const Home: FC = () => {
  const router = useRouter();
  const user_logged_token = getCookie('user_logged_token');
  const { res_load, signInFunc } = useAuthContext();

  const {
    register, handleSubmit, reset, 
    formState: { errors }
  } = useForm<IAuthInputs | any>({
    resolver: yupResolver(authSchema),
  });

  const onSubmit = (payload: IAuthInputs) => {
    signInFunc(payload);
    reset();
  }

  useEffect(() => {
    if(user_logged_token) {
      router.push(DASHBOARD);
    } else {
      router.push(HOME);
    }
  }, [router, user_logged_token])

  return (
    <div className={auth.app_wrapper}>
      <div className={auth.app_content_cover}>
        <div className={auth.app_logo}>
          <Image
            src={logo}
            alt={allStaticContent.themes.project_title}
            width={150}
            height={29}
          />
        </div>
        <div className={auth.app_heading_wrap}>
          <h1>{allStaticContent.auth.page_heading}</h1>
          <p>{allStaticContent.auth.page_desc}</p>
        </div>
        <div className={auth.app_auth_form}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={auth.app_field}>
              <input 
                type="email" 
                {...register("email")} 
              />
              <ErrorText 
                displayText={errors.email && true}
                validateText={errors.email?.message?.toString()} 
              />
            </div>
            <div className={auth.app_field}>
              <input 
                type="password" 
                {...register("password")} 
              />
              <ErrorText 
                displayText={errors.password && true}
                validateText={errors.password?.message?.toString()} 
              />
            </div>
            <div className={auth.app_field_btn}>
              {res_load ? 
                <span>{allStaticContent.common.wait}</span> : 
                <button type="submit">{allStaticContent.inputs_text.btn_submit}</button>
              }
            </div>
          </form>
        </div>
      </div>
      <Toaster toastOptions={{ className: 'app_toast error' }} />
    </div>
  )
}

export default Home;