import {
  DIRECTORIES_PAGE,
  PAGE_HOME,
  PAGE_LOGIN,
  PAGE_REGISTER,
} from "@/constants/routes";
import Link from "next/link";
import { GoLocation, GoPlus } from "react-icons/go";
import { useRouter } from "next/router";

const NavigationMenu = (props) => {
  const router = useRouter();
  let { pathname } = router;
  console.log(router);
  return (
    <div
      className={`navigation ${props.show && "nav-white"} ${
        props.directory && "nav-bar"
      }`}
    >
      <section className=" navigation">
        <div className="navigation__content container">
          <div className="navigation__brand">
            <Link href={PAGE_HOME}>
              <a>Business Directory</a>
            </Link>
          </div>
          <div className="navigation__list">
            <ul>
              <li className={`${pathname === '/' ? 'activeClass1' : ''}`}>
                <Link href={PAGE_HOME}>
                  <a>Home</a>
                </Link>
              </li>
              <li className={`${pathname.split('/').includes('directories') ? 'activeClass2' : ''}`}>
                <Link href={DIRECTORIES_PAGE}>
                  <a>Business Listings</a>
                </Link>
              </li>
              {/* <li><Link href={PAGE_HOME}><a>Job Careers</a></Link></li> */}
              {/* <li className={`${pathname === 'termsConditions' ? 'activeClass' : ''}`}>
                <Link href={PAGE_HOME}>
                  <a>Terms & Conditions</a>
                </Link>
              </li> */}
              {/* <li><Link href={PAGE_REGISTER}><a>Contact Us</a></Link></li> */}
            </ul>
          </div>

          <div className="navigation__btn">
            <Link href={PAGE_REGISTER}>
              <a>
                <GoPlus /> Add Business
              </a>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NavigationMenu;
