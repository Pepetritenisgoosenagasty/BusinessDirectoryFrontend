import {
  DIRECTORIES_PAGE,
  PAGE_HOME,
  PAGE_LOGIN,
  PAGE_REGISTER,
} from '@/constants/routes'
import Link from 'next/link'
import { GoLocation, GoPlus } from 'react-icons/go'
import { useRouter } from 'next/router'
import { slide as Menu } from 'react-burger-menu'

const NavigationMenu = (props) => {
  const router = useRouter()
  let { pathname } = router
  // console.log(router)
  return (
    <div
      className={`navigation ${props.show && 'nav-white'} ${
        props.directory && 'nav-bar'
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
              <li
                className={`${
                  pathname.split('/').includes('directories')
                    ? 'activeClass2'
                    : ''
                }`}
              >
                <Link href={DIRECTORIES_PAGE}>
                  <a>Listings</a>
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
            <div className="navigation__btn">
              <Link href={PAGE_REGISTER}>
                <a>
                  <GoPlus /> Add Business
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Menu pageWrapId={ "page-wrap" }>
        <div className="navigation__brand">
          <Link href={PAGE_HOME}>
            <a>Business Directory</a>
          </Link>
        </div>
        <div className="mobile_menu">
          <Link href={PAGE_HOME}>
            <a id="home" className="menu-item">
            Home
          </a>
          </Link>
          <Link href={DIRECTORIES_PAGE}>
          <a id="about" className="menu-item">
            Listings
          </a>

          </Link>
          <Link href={PAGE_REGISTER}>
            <a id="contact" className="menu-item btn">
            {' '}
            <GoPlus /> Add Business
          </a>
          </Link>
        </div>
        {/* <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a> */}
      </Menu>
    </div>
  )
}

export default NavigationMenu
