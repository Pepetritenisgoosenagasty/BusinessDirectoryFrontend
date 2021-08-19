import { DIRECTORIES_PAGE, PAGE_HOME, PAGE_LOGIN, PAGE_REGISTER } from "@/constants/routes";
import Link from "next/link";
import { BiGridAlt } from "react-icons/bi";
import { GoLocation, GoPlus } from "react-icons/go";
import { NavLink } from "./ButtonComponent";
import SearchComponent from "./SearchComponent";

const NavigationMenu = (props) => {
  return (
    <div className={`navigation ${props.show && "nav-white"} ${props.directory && "nav-bar"}`}>
      {/* Navigation Bar */}
      {/* <section className="navigation__content max-width-container">
        <div className="navigation__content-nav">
          <ul>
            <li>
              <div className="navigation__content-left-nav">
                <span></span>
                {props.directory && (<Link href={PAGE_HOME}><a className="mr-5 headerLogo">Business Directory</a></Link>)}
                <Link href={DIRECTORIES_PAGE}>
                  <a>
                    <BiGridAlt style={{ fontSize: 17, verticalAlign: "sub" }} />
                    <span className="mx-2">Browse</span>
                  </a>
                </Link>
                <span></span>
              </div>
            </li>
            <li>
              <div className="navigation__content-left-nav">
                <span></span>
               {
                 props.hasLogo && ( <a>
                  <GoLocation style={{ fontSize: 17, verticalAlign: "sub" }} />
                  <span className="mx-2">Accra Central, Ghana</span>
                </a>)
               }
                <span></span>
              </div>
            </li>
          </ul>
        </div>
        <div className="navigation__content-nav">
          <ul className={`${props.hasLogo ? "": 'd-none'}`}>
            <li>
              <div className="navigation__content-center-nav">
                {props.hasLogo && (<Link href={PAGE_HOME}><a>Business Directory</a></Link>)}
                 
              </div>
            </li>
          </ul>
           <div className={`${props.directory ? 'search_content' : ''}`}>
           {props.directory && ( <SearchComponent />)}
           </div>
        </div>
        <div className="navigation__content-nav">
          <ul className="link-btn">
            <li className="login">
            <NavLink href={PAGE_LOGIN} name="Login" />
            </li>
            <li className="signup">
              <Link href={PAGE_REGISTER}>
                <a>Register Your Business</a>
              </Link>
            </li>
          </ul>
        </div>
      </section> */}
      <section className=" navigation">
       <div className="navigation__content container">
       <div className="navigation__brand">
           <Link href={PAGE_HOME}>
             <a>Business Directory</a>
           </Link>
        </div>
        <div className="navigation__list">
          <ul >
            <li><Link href={PAGE_HOME}><a>Home</a></Link></li>
            <li><Link href={DIRECTORIES_PAGE}><a>Business Listings</a></Link></li>
            {/* <li><Link href={PAGE_HOME}><a>Job Careers</a></Link></li> */}
            <li><Link href={PAGE_HOME}><a>Terms & Conditions</a></Link></li>
            {/* <li><Link href={PAGE_REGISTER}><a>Contact Us</a></Link></li> */}
          </ul>
        </div>

        <div className="navigation__btn">
         <Link href={PAGE_REGISTER}>
         <a><GoPlus/> Add Business</a>
         </Link>
        </div>
       </div>
      </section>
    </div>
  );
};

export default NavigationMenu;
