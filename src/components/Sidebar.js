import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { VscSettings } from "react-icons/vsc";
import { RiProfileLine } from "react-icons/ri";
import { AiOutlineMessage } from "react-icons/ai";
import { AiOutlineLogout } from "react-icons/ai";
import { ImEye } from "react-icons/im";
import { Tooltip } from "antd";
import { PAGE_BUSINESS, PAGE_DASHBOARD, PAGE_LOGIN, PAGE_PROFILE, PAGE_REVIEWS } from "@/constants/routes";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { performUserLogout } from "src/redux/features/authSlice";
import Link from 'next/link'
import { userData } from "src/hooks/useLoggInUser";


const Sidebar = () => {
    const dispatch = useDispatch();
    const router = useRouter();

    const logoutUser = () => {
      dispatch(performUserLogout()).finally(() => {
        router.push(PAGE_LOGIN);
      });
    };

    let {pathname} =router;

    const { user, isLoading, isError } = userData();

   


  return (
    <div className="sidebar">
      <section className="sidebar__content">
        <ul className="items1">
           <Link href={PAGE_DASHBOARD}>
          <Tooltip placement="right" title="Dashboard">
           <li className={`${pathname === '/dashboard' ? "activeMenu" : ''}`}>
              <a>
                <AiOutlineHome />
              </a>
            </li>
          </Tooltip>
           </Link>
          <Link href={PAGE_BUSINESS }>
          <Tooltip placement="right" title="My Business">
          <li className={`${pathname.split('/').includes('business') ? "activeMenu" : ''}`}>
            <a>
              <AiOutlineAppstoreAdd />
            </a>
          </li>
          </Tooltip>
          </Link>
          {/* <Tooltip placement="right" title="Business Lists">
          <li>
            <a>
              <AiOutlineMessage />
            </a>
          </li>
          </Tooltip> */}
          <Link href={PAGE_REVIEWS}>
          <Tooltip placement="right" title="Reviews">
          <li className={`${pathname.split('/').includes('reviews') ? "activeMenu" : ''}`}>
            <a>
              <ImEye />
            </a>
          </li>
          </Tooltip>
          </Link>
          <Link href={PAGE_PROFILE + "/" + user?.id}>
          <Tooltip placement="right" title="Profile">
          <li className={`${pathname.split('/').includes('profile') ? "activeMenu" : ''}`}>
            <a>
              <RiProfileLine />
            </a>
          </li>
          </Tooltip>
          </Link>
          {/* <Tooltip placement="right" title="Settings">
          <li className={`${pathname.split('/').includes('settings') ? "activeMenu" : ''}`}>
            <a>
              <VscSettings />
            </a>
          </li>
          </Tooltip> */}
        </ul>
        <ul className="items2">
        <Tooltip placement="right" title="Logout">
          <li  onClick={() => logoutUser()}>
            <a>
              <AiOutlineLogout />
            </a>
          </li>
          </Tooltip>
        </ul>
      </section>
    </div>
  );
};

export default Sidebar;
