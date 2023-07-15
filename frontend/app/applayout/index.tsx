import { IPageChildProps } from '@/utils/interface';
import { Sidebar } from "@/components/sidebar";

import app from '@/styles/app.module.scss';

const AppLayout = ({ children }: IPageChildProps) => {
  return (
    <div className={app.app_main_wrapper}>
      <Sidebar />
      <div className="sfkhjhsd">{children}</div>
    </div>
  )
}

export default AppLayout;