import { PAGE_LOGIN } from "@/constants/routes";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import authServices from "src/services/auth.services";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const DashboardLayout = ({ children }) => {
  const { isLogin } = useSelector((state) => state.auth);
  const router = useRouter();

  let hasLoggedIn = authServices.loggedIn();

  useEffect(() => {
    if (!hasLoggedIn) {
      router.push(PAGE_LOGIN);
    }
  }, [isLogin]);

  return (
    <div className="grid-container">
      <Navbar className="header"/>
      <Sidebar className="sidebar"/>  
      <section className="main">
      {children}
      </section>
      {/* Inline Css */}
      <style global jsx>{`
        body {
          background: #e4e9f3ce;
          font-family: "Montserrat", sans-serif;
          overflow-x: hidden;
          //    overflow-y: auto;
        }
      `}</style>
    </div>
  );
};

export default DashboardLayout;
