import Image from 'next/image';
import Link from 'next/link';
import { useAuthContext } from '@/context/authContext';
import { allStaticContent } from "@/utils/variables/staticContent";
import { DASHBOARD } from "@/utils/variables/allRoutes";

import { HiOutlineTemplate, HiOutlineUserCircle } from "react-icons/hi";

import logo from '@/public/logo.png';
import side from '@/styles/side.module.scss';

export const Sidebar = () => {
  const { signOutFunc } = useAuthContext();

  return (
    <div className={side.app_sidebar}>
      <div className={side.app_logo}>
        <Image
          src={logo}
          alt={allStaticContent.themes.project_title}
          width={150}
          height={29}
        />
      </div>
      <div className={side.app_lists}>
        <ul>
          <li><Link href={DASHBOARD}><HiOutlineTemplate /> Dashboard</Link></li>
          <li><Link href={DASHBOARD}><HiOutlineUserCircle /> User Profile</Link></li>
          <li><Link href={DASHBOARD}><HiOutlineTemplate /> Dashboard</Link></li>
          <li><Link href={DASHBOARD}><HiOutlineTemplate /> Dashboard</Link></li>
          <li><Link href={DASHBOARD}><HiOutlineTemplate /> Dashboard</Link></li>
          <li><Link href={DASHBOARD}><HiOutlineTemplate /> Dashboard</Link></li>
        </ul>
      </div>
      <span onClick={() => signOutFunc()}>Logout</span>
    </div>
  )
}
