import BusinessCategories from '@/components/BusinessCategories'
import { NavLink } from '@/components/ButtonComponent'
import { CardComponent } from '@/components/CardComponent'
import NavigationMenu from '@/components/NavigationMenu'
import SearchComponent from '@/components/SearchComponent'
import { BiBuildings, BiCheckDouble, BiSearchAlt } from 'react-icons/bi'
import { useEffect, useState } from 'react'
import { DIRECTORIES_PAGE, URL_GET_BUSINESS } from '@/constants/routes'
import qs from 'qs'
import companiesData from '@/constants/CompaniesData.json'
import axios from 'axios'
import {
  BrewyValues,
  BusinessValues,
  ConstValues,
  InsuranceValues,
  LegalValues,
  ManuValues,
  SecurityValues,
  SoftwareValues,
  SuppliesValues,
  WasteValues,
} from '@/constants/global'
import authServices from 'src/services/auth.services'
import { useGetEntity } from 'src/hooks/useGetEntity'

const Categories = (props) => {
  // console.log(props)
  return (
    <ul>
      <li>{props.children}</li>
    </ul>
  )
}

const index = () => {
  const [show, setShow] = useState(false)
  const [businessData, setbusinessData] = useState([])
  const [categoryId, setCategoryId] = useState(0)
  // Pagination Settings
  const [pageSize, setpageSize] = useState(6)
  const [currentPage, setcurrentPage] = useState(1)

  const query = qs.stringify(
    {
      pagination: {
        page: currentPage,
        pageSize: pageSize,
      },
      populate: '*',
    },
    {
      encodeValuesOnly: true,
    },
  )

  // Business data
  const { data: results, meta } = useGetEntity(URL_GET_BUSINESS + `?${query}`)

  // categories
  const { data: categories } = useGetEntity('categories')

  useEffect(() => {
    if (results) {
      setbusinessData([...results])
    }
  }, [results])

  const handleAllCategories = () => {
    setbusinessData([...results])
    setCategoryId(0)
  }

  const handleFilter = async (value, id) => {
    const data = await results.filter((p) =>
      p.attributes.category.data.attributes.name
        .toLowerCase()
        .includes(value.toLowerCase()),
    )
    setbusinessData([...data])
    setcurrentPage(1)
    setCategoryId(id)
  }

  // Header Animation
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setShow(true)
      } else {
        setShow(false)
      }
    })

    return () => {
      window.removeEventListener('scroll', () => {
        console.log('Removed')
      })
    }
  }, [])

  return (
    <div>
      <NavigationMenu show={show} hasLogo />
      <main className="content">
        <section className="content__wrapper">
          <div className="overlay"></div>
          <div className="banner__text container px-4">
            <h2>
              Find Any <strong>Private Company</strong> within Accra Central
              with Ease
            </h2>
            <p>
              Get Location, Directions & Information about your desired private
              firm
            </p>

            <div className="search_content">
              <SearchComponent />
            </div>
          </div>
        </section>
        {/* Categories */}
        <section className="companies ">
          <div className="container px-4">
            <div className="companies__title">
              <h5>Private Companies within Accra Central, Ghana</h5>
            </div>
            <div className="logos mt-5">
              <CardComponent url={`assets/logos/logo1.png`} />
              <CardComponent url={`assets/logos/logo2.png`} />
              <CardComponent url={`assets/logos/logo3.png`} />
              <CardComponent url={`assets/logos/logo4.png`} />
              <CardComponent url={`assets/logos/logo5.png`} />
              <CardComponent url={`assets/logos/logo6.png`} />
              <CardComponent url={`assets/logos/logo7.png`} />
              <CardComponent url={`assets/logos/logo8.png`} />
              {/* <CardComponent url={`assets/logos/logo9.png`} />
              <CardComponent url={`assets/logos/logo10.png`} /> */}
            </div>
          </div>
        </section>
        {/* How It works */}
        {/* <section>
          <div className="connection container px-4">
            <div className="connection__text">
             <h5>Connect with your clients</h5>
             <p>Be visible! Obtain new customers and <br /> generate more traffic </p>
             <p id="text">Improve social media shares. Get reviews and grow business reputation online. Your company profile can include contacts and description, products, photo gallery and your business location on the map.</p>
             <div>
               <NavLink href="" name="List Your Business" isRegisterLink/>
             </div>
            </div>
            <div className="connection__img">
              <img src="/assets/connect.jpg" />
            </div>
          </div>
        </section> */}
        {/*  */}
        <section className="work_content">
          <h5>How it works</h5>
          <div className="mini-card container mx-auto">
            <div className="row">
              <div className="col-lg-4 col-md-12 col-sm-12 d-flex">
                <div>
                  <BiSearchAlt style={{ fontSize: 45 }} />
                </div>
                <div className="content-text">
                  <h5>Search for private company</h5>
                  <p>
                    Get Information of your desired private company just by
                    searching by the name of the private company.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12 d-flex">
                <div>
                  <BiCheckDouble style={{ fontSize: 45 }} />
                </div>
                <div className="content-text">
                  <h5>Find private companies</h5>
                  <p>
                    This paltform also provides you with locations and
                    directions to your prefered private company.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12 d-flex">
                <div>
                  <BiBuildings style={{ fontSize: 45 }} />
                </div>
                <div className="content-text">
                  <h5>Register your private company</h5>
                  <p>
                    Let your business reach a wider audience by registering it
                    own this platform.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="categories">
          <div className="categories-title container d-flex justify-content-between align-items-center px-4">
            <h5>
              Explore Various Business <br /> Categories
            </h5>
            <NavLink href={DIRECTORIES_PAGE} name="View All" isBrowse />
          </div>
          <div className="categories-buttons container mt-4">
            <Categories>
              <a
                className={categoryId === 0 && 'activeClass'}
                onClick={() => handleAllCategories()}
              >
                All Categories
              </a>
            </Categories>
            {categories.length > 0 &&
              categories.map((item, i) => (
                <Categories key={i}>
                  <a
                    className={categoryId === item?.id && 'activeClass'}
                    onClick={() =>
                      handleFilter(item?.attributes?.name, item?.id)
                    }
                  >
                    {' '}
                    {item?.attributes?.name}
                  </a>
                </Categories>
              ))}
          </div>
          <div className=" max-container px-5 mt-5">
            <BusinessCategories
              currentPage={currentPage}
              setcurrentPage={setcurrentPage}
              list={meta}
              pageSize={pageSize}
              businessList={businessData}
            />
          </div>
        </section>
        <section className="service">
          <div className="service-content">
            <div className="desktop_text">
              <h5>
                Connect with your desired private company <br /> in Accra
                Central
              </h5>
              <p>
                Be visible! Obtain new customers and generate more traffic.{' '}
                <br /> Improve social media shares. Get reviews and grow
                business reputation online. Your company profile can include
                contacts and description, products, photo gallery and your
                business location on the map.
              </p>
            </div>
            <div className="mobile_text d-none">
              <h5>
                Connect with your desired private company in Accra Central
              </h5>
              <p>
                Be visible! Obtain new customers and generate more traffic.
                Improve social media shares. Get reviews and grow business
                reputation online. Your company profile can include contacts and
                description, products, photo gallery and your business location
                on the map.
              </p>
            </div>
            <div className="mt-5">
              <NavLink
                href={DIRECTORIES_PAGE}
                name="Browse Our Directory"
                isBrowse
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default index
