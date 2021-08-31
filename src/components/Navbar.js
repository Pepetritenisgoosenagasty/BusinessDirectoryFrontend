import { PAGE_DASHBOARD } from "@/constants/routes";
import Link from "next/link";
import { Menu, Dropdown, message } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { GoCalendar } from "react-icons/go";
import { CgProfile } from "react-icons/cg";
import { BiKey } from "react-icons/bi";
import { FiLogOut } from "react-icons/fi";
import { PAGE_LOGIN } from "@/constants/routes";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { performUserLogout } from "src/redux/features/authSlice";

const Navbar = () => {

    const dispatch = useDispatch();
    const router = useRouter();
  
    const logoutUser = () => {
      dispatch(performUserLogout()).finally(() => {
        router.push(PAGE_LOGIN);
      });
    };

    
  const menu = (
    <Menu>
      <Menu.Item key="1">
        <CgProfile style={{ fontSize: 15 }} /> Profile
      </Menu.Item>
      <Menu.Item key="2">
        <BiKey style={{ fontSize: 18 }} /> Change Password
      </Menu.Item>
      <Menu.Item key="3" onClick={() => logoutUser()}>
        <FiLogOut style={{ fontSize: 16 }} /> Logout
      </Menu.Item>
    </Menu>
  );
  return (
    <div className="header">
      <div className="header__header">
        <div className="header__logo">
          <Link href={PAGE_DASHBOARD}>
            <a>Business Directory</a>
          </Link>
        </div>
        <div className="header__date">
          <span>
            <GoCalendar />
          </span>
          <span className="ml-2 mt-3">
            Today <strong>August 29</strong>
          </span>
        </div>
        <div className="header__dropdown">
          <Dropdown overlay={menu}>
            <a
              className="ant-dropdown-link"
              onClick={(e) => e.preventDefault()}
            >
              adjalokoedward@gmail.com <DownOutlined />
            </a>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
