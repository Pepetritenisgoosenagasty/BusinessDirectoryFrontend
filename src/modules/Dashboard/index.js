import { DashboardCustomCard } from "@/components/CardComponent";
import { DashboardFooter } from "@/components/DashboardFooter";
import { Link } from "@material-ui/core";
import { RiAddLine } from "react-icons/ri";
import dynamic from 'next/dynamic';
import { motion } from "framer-motion";
import { PAGE_ADD_BUSINESS, URL_BSUINESS_STAT, URL_GET_BUSINESS, URL_REVIEWS_STAT } from "@/constants/routes";
import CalendarComponent from "@/components/CalendarComponent";
import ReactWeather, { useOpenWeather } from "react-open-weather";
import ReviewLists from "./components/Table/ReviewLists";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { userData } from "src/hooks/useLoggInUser";
import { performGetAll } from "src/redux/actions/apiActionCreators";

const VisitorsChart = dynamic(() => import('./components/Chart/VisitorsChart'), {
  ssr: false,
});

const index = () => {
  const [count, setCount] = useState()
  const [businessData, setBusinessData] = useState()
  const [reviewData, setReviewData] = useState()
  const dispatch = useDispatch();

  const router = useRouter();
  let { query:{id} } = router;
  const { user } = userData(id);

  const fetchBusinessId = async () => {
    let businessData = await  dispatch(performGetAll(URL_GET_BUSINESS + '?_where[user_id]='+user?.id))
    setBusinessData(businessData[0]?.place_id)
  }

  // console.log(businessData)
  
  const fetchAllBusiness = async () => {
    let count = await  dispatch(performGetAll(URL_BSUINESS_STAT + '?_where[place_id]='+ businessData))
    setCount(count)
  }

  const fetchReviews = async () => {
    let reviews = await  dispatch(performGetAll(URL_REVIEWS_STAT + '?_where[business_id]='+ businessData))
    setReviewData(reviews)

  }

  useEffect(() => {
    if(user) {
      fetchBusinessId()
    }
  }, [user])

  useEffect(() => {
    if(businessData) {
      fetchAllBusiness()
    }
  }, [businessData])

  useEffect(() => {
    if(businessData) {
      fetchReviews()
    }
  }, [businessData])

  const { data, isLoading, errorMessage } = useOpenWeather({
    key: "8cf32592cbe1014b3d55d37707a9a9c5",
    lat: "5.603717",
    lon: "-0.186964",
    lang: "en",
    unit: "metric", // values are (metric, standard, imperial)
  });

  return (
    <>
      <div className="dashboard container-fluid content py-5">
        <div className="row dashboard__text  px-5 py-3">
          <div>
            <h5>Dashboard</h5>
            <p>Welcome to Business Directory Dashboard</p>
          </div>
          {/* <div className="addBtn">
            <Link href={PAGE_ADD_BUSINESS}>
              <motion.button
                whileHover={{
                  scale: 1.1,
                  textShadow: "0px 0px 4px gray",
                }}
              >
                <RiAddLine /> Add New Business
              </motion.button>
            </Link>
          </div> */}
        </div>
        <div className="row px-4">
          <div className="col-lg-4 col-md-12 col-sm-12">
            <DashboardCustomCard>
              <div className="p-2">
                <CalendarComponent />
              </div>
            </DashboardCustomCard>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12">
            <DashboardCustomCard>
              <div className="">
                <ReactWeather
                  isLoading={isLoading}
                  errorMessage={errorMessage}
                  data={data}
                  lang="en"
                  locationLabel="Accra"
                  unitsLabels={{ temperature: "C", windSpeed: "Km/h" }}
                  showForecast
                />
              </div>
            </DashboardCustomCard>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12">
            <div className="row">
              <div className="col-12">
                <DashboardCustomCard>
                  <div className="p-2 statistics ">
                    <div className="img-responsive">
                      <img src="/assets/reviews.svg" width="100%" height="100%"/>
                    </div>
                    <div className="text">
                      <h1>{reviewData ?? 0}</h1>
                      <h6>Reviews</h6>
                    </div>
                  </div>
                </DashboardCustomCard>
              </div>
            </div>
            <div className="row">
              <div className="col-12 mt-4 ">
                <DashboardCustomCard>
                <div className="p-2 statistics ">
                    <div className="img-responsive">
                      <img src="/assets/business.svg" width="100%" height="80%"/>
                    </div>
                    <div className="text">
                      <h1 className="text-success">{count ?? 0}</h1>
                      <h6>Registered Business</h6>
                    </div>
                  </div>
                </DashboardCustomCard>
              </div>
            </div>
          </div>
        </div>
        <div className="row px-4 mt-4">
          {/* <div className="col-lg-8 col-md-12 col-sm-12">
            <DashboardCustomCard>
            <div className="p-3 ">
              <VisitorsChart />
            </div>
            </DashboardCustomCard>
          </div> */}
          <div className="col-lg-6 col-md-12 col-sm-12 mx-auto">
            <DashboardCustomCard>
              <ReviewLists />
            </DashboardCustomCard>
          </div>
        </div>
      </div>
      <DashboardFooter />
    </>
  );
};

export default index;
