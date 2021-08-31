import { AiOutlineHome } from "react-icons/ai";
import { RiDashboardLine } from "react-icons/ri";
import { VscSettings } from "react-icons/vsc";
import { RiProfileLine } from "react-icons/ri";
import { AiOutlineMessage } from "react-icons/ai";
import { AiOutlineLogout } from "react-icons/ai";
import { ImEye } from "react-icons/im";
import { Tooltip } from "antd";
import { PAGE_LOGIN } from "@/constants/routes";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { performUserLogout } from "src/redux/features/authSlice";

const Sidebar = () => {

    const dispatch = useDispatch();
    const router = useRouter();
  
    const logoutUser = () => {
      dispatch(performUserLogout()).finally(() => {
        router.push(PAGE_LOGIN);
      });
    };


  return (
    <div className="sidebar">
      <section className="sidebar__content">
        <ul className="items1">
          <Tooltip placement="right" title="Dashboard">
            <li>
              <a>
                <AiOutlineHome />
              </a>
            </li>
          </Tooltip>
          <Tooltip placement="right" title="Business Lists">
          <li>
            <a>
              <RiDashboardLine />
            </a>
          </li>
          </Tooltip>
          <Tooltip placement="right" title="Business Lists">
          <li>
            <a>
              <AiOutlineMessage />
            </a>
          </li>
          </Tooltip>
          <Tooltip placement="right" title="Reviews">
          <li>
            <a>
              <ImEye />
            </a>
          </li>
          </Tooltip>
          <Tooltip placement="right" title="Profile">
          <li>
            <a>
              <RiProfileLine />
            </a>
          </li>
          </Tooltip>
          <Tooltip placement="right" title="Settings">
          <li>
            <a>
              <VscSettings />
            </a>
          </li>
          </Tooltip>
        </ul>
        <ul className="items2">
        <Tooltip placement="right" title="Logout">
          <li  onClick={(e) => e.preventDefault()}>
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
