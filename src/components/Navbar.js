import { PAGE_DASHBOARD } from "@/constants/routes";
import Link from "next/link";
import { Menu, Dropdown, message } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { GoCalendar } from "react-icons/go";
import { CgProfile } from "react-icons/cg";
import { BiKey } from "react-icons/bi";
import { FiLock, FiLogOut } from "react-icons/fi";
import { PAGE_LOGIN } from "@/constants/routes";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { performUserLogout } from "src/redux/features/authSlice";
import { Avatar, Image } from "antd";

const Navbar = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const logoutUser = () => {
    dispatch(performUserLogout()).finally(() => {
      router.push(PAGE_LOGIN);
    });
  };

  let { pathname } = router;

  const menu = (
    <Menu>
      <Menu.Item key="1">
        <Link href="#">
          <a>
            <CgProfile style={{ fontSize: 14 }} /> Profile
          </a>
        </Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link href="#">
          <a>
            <FiLock className="" style={{ fontSize: 14 }} /> Change Password
          </a>
        </Link>
      </Menu.Item>
      <Menu.Item key="3">
        <Link href="#">
          <a onClick={() => logoutUser()}>
            <FiLogOut style={{ fontSize: 14 }} /> Logout
          </a>
        </Link>
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
            <div>
            <Avatar
              style={{
                color: "#f56a00",
                backgroundColor: "#fde3cf",
              }}
            >
              U
            </Avatar>
            <a
              className="ant-dropdown-link ml-2"
              onClick={(e) => e.preventDefault()}
            >
              adjalokoedward@gmail.com <DownOutlined />
            </a>
            </div>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
