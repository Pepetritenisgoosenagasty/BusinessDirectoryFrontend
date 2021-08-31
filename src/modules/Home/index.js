import BusinessCategories from "@/components/BusinessCategories";
import { NavLink } from "@/components/ButtonComponent";
import { CardComponent } from "@/components/CardComponent";
import NavigationMenu from "@/components/NavigationMenu";
import SearchComponent from "@/components/SearchComponent";
import { BiBuildings, BiCheckDouble, BiSearchAlt } from "react-icons/bi";
import { useEffect, useState } from "react";
import { DIRECTORIES_PAGE } from "@/constants/routes";
import axios from "axios";
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
} from "@/constants/global";

const Categories = ({ children }) => {
  return (
    <ul>
      <li>{children}</li>
    </ul>
  );
};

const index = () => {
  const [show, setShow] = useState(false);
  const [currentIndex, setcurrentIndex] = useState(2);
  const [isActive, setIsActive] = useState(false);

  const [businessList, setBusinessList] = useState([]);
  const [rawData, setrawData] = useState([]);
  // Pagination Settings
  const [pageSize, setpageSize] = useState(6);
  const [currentPage, setcurrentPage] = useState(1);
  const [currentOffset, setCurrentOffset] = useState(6);

  const [data, setData] = useState([]);

  // Pagination Function
  const onPageChange = (current, size) => {
    setcurrentPage(current);
  };

  const getListData = async (url) => {
    try {
      const res = await axios.get(url);

      // do map change filter here
      setrawData(res.data);
      setData([...res.data]);
      setcurrentPage(1);
      return true;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    let result = rawData.slice(
      currentOffset * currentPage - currentOffset,
      currentOffset * currentPage
    );
    setBusinessList([...result]);
  }, [rawData, currentPage]);

  useEffect(() => {
    getListData("/Data/Data.json");
  }, []);

  // Filter Functions
  const handleFilter = async (values) => {
    let newData = [];

    data.filter((data) => {
      if (values.includes(data.category)) {
        newData.push(data);
      }
      return data;
    });
    setcurrentPage(1);
    setrawData([...newData]);
    setIsActive(true);

    // console.log(res);
  };

  // All Categories Function
  const handleAllCategories = () => {
    setrawData([...data]);
  };

  // Header Animation
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    });

    return () => {
      window.removeEventListener("scroll", () => {
        console.log("Removed");
      });
    };
  }, []);

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
                  <h5>Search for your preferred private company</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12 d-flex">
                <div>
                  <BiCheckDouble style={{ fontSize: 45 }} />
                </div>
                <div className="content-text">
                  <h5>Find preferred private company</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="categories">
          <div className="categories-title container d-flex justify-content-between align-items-center px-4">
            <h5>
              Explore Various Private Businesses <br /> category
            </h5>
            <NavLink href={DIRECTORIES_PAGE} name="View All" isBrowse />
          </div>
          <div className="categories-buttons container mt-4">
            <Categories>
              <a
                className="activeClass"
                onClick={() => handleAllCategories()}
              >
                All Categories
              </a>
            </Categories>
            <Categories>
              <a
                onClick={() => handleFilter(BusinessValues)}
              >
                {" "}
                Business & Finance
              </a>
            </Categories>
            <Categories>
              <a onClick={() => handleFilter(ManuValues)}>
                Manufacturing Services
              </a>
            </Categories>
            <Categories>
              <a onClick={() => handleFilter(SoftwareValues)}>
                Software Services
              </a>
            </Categories>
            <Categories>
              <a onClick={() => handleFilter(LegalValues)}>Legal Services</a>
            </Categories>
            <Categories>
              <a onClick={() => handleFilter(BrewyValues)}>Brewery Agencies</a>
            </Categories>
            <Categories>
              <a onClick={() => handleFilter(WasteValues)}>
                Waste Managt. & Recycling{" "}
              </a>
            </Categories>
            <Categories>
              <a onClick={() => handleFilter(SecurityValues)}>
                Security Services{" "}
              </a>
            </Categories>
            <Categories>
              <a onClick={() => handleFilter(SuppliesValues)}>
                Equipment Supplies
              </a>
            </Categories>
            <Categories>
              <a onClick={() => handleFilter(ConstValues)}>
                Construction Services
              </a>
            </Categories>
            <Categories>
              <a onClick={() => handleFilter(InsuranceValues)}>
                Insurance Services
              </a>
            </Categories>
          </div>
          <div className=" max-container px-5 mt-5">
            <BusinessCategories
              currentPage={currentPage}
              onPageChange={onPageChange}
              list={rawData}
              pageSize={pageSize}
              businessList={businessList}
            />
          </div>
        </section>
        <section className="service">
          <div className="service-content">
            <h5>Connect with your desired Company</h5>
            <p className="">
              Be visible! Obtain new customers and generate more traffic. <br />{" "}
              Improve social media shares. Get reviews and grow business
              reputation online. Your company profile can include contacts and
              description, products, photo gallery and your business location on
              the map.
            </p>
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
  );
};

export default index;
