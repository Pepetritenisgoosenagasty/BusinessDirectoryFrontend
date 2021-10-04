import ImagesComponent from "@/components/ImagesComponent";
import NavigationMenu from "@/components/NavigationMenu";
import {
  AiFillSafetyCertificate,
  AiOutlineCheck,
  AiOutlineExclamationCircle,
  AiOutlineStar,
} from "react-icons/ai";
import { Rate, Tag, Image } from 'antd';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import {
  FaBookOpen,
  FaParking,
  FaTransgenderAlt,
  FaAddressCard,
} from "react-icons/fa";
import { RiBikeLine } from "react-icons/ri";
import ReactStars from "react-rating-stars-component";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { GOOGLE_MAP_API_KEY } from "@/constants/global";
import axios from "axios";
import Map from "@/components/Map";
import { Marker } from "@react-google-maps/api";
import { FiPhoneCall } from "react-icons/fi";
import { BiEnvelope, BiMap, BiPhoneCall } from "react-icons/bi";
import Reviews from "./components/Reviews";
import DetailsSidebar from "./components/DetailsSidebar";
import CommentComponent from "./components/Comment";
import { Spinner } from "@/components/Spinner";
import { useData } from "../../hooks/useDetails";
import { InfomationCard } from "@/components/CardComponent";
import Footer from "@/components/Footer";
import { Results } from "@/components/Result";
import { PAGE_HOME, URL_GET_BUSINESS, URL_REVIEWS } from "@/constants/routes";
import { useGetPhotos } from "src/hooks/useGetPhotos";
import { SRLWrapper } from "simple-react-lightbox";
import CustomPagingSlider from "@/components/ImagesComponent"
import authServices from "src/services/auth.services";
import { useGetEntity } from "src/hooks/useGetEntity";
import { phoneNumberFormatter } from "src/utils/filterKeyCodes";

const Company = () => {
  const router = useRouter();
  const [photos, setPhotos] = useState([])

  const API_KEY = process.env.googleApisKey;

  const placeId = router.query.id;

  const { details, isLoading, isError } = useData(URL_GET_BUSINESS + `?_where[place_id]=`+placeId);
  const [visible, setVisible] = useState(false);

  const reviews = useGetEntity(URL_REVIEWS + `?_where[business_id]=`+placeId);
  
  // console.log(reviews)





  if (isLoading) return <Spinner />;
  if (isError) return  <Results status="500" title="500" subTitle="Sorry, something went wrong." url={PAGE_HOME}/>;

  // console.log(details);

  // useEffect(() => {

  // }, [placeId]);

  //    Marker
  const MarkerContent = () => {
    const position = {
      lat: details?.geometry?.lat,
      lng: details?.geometry?.lng,
    };

    return (
      <>
        <Marker
          position={position}
          animation={google.maps.Animation.BOUNCE}
          icon={{
            url: "https://img.icons8.com/glyph-neue/64/000000/marker.png",
            scaledSize: new window.google.maps.Size(80, 80),
          }}
        />
      </>
    );
  };


  return (
    <div>
      <NavigationMenu directory />
      <main className="company">
        <section className="map-section">
          <Map zoom={12} apiKey={API_KEY}>
            <MarkerContent />
          </Map>
        </section>

        <section className="details ">
          <div className="container">
            <div className="row ">
              <div className="col-lg-8 col-md-12 col-sm-12">
                <div className="row">
                  <div className="col-lg-12 ">
                    <div className="info-container">
                      <h1>{details?.name}</h1>
                    </div>
                    <div>
                      <span> <BiMap style={{ color: "#004ba8", fontSize: 20}} /> {details?.address}</span>
                    </div>
                    <div>
                      <span> <BiPhoneCall style={{ color: "#004ba8", fontSize: 20}}/> {"+" + phoneNumberFormatter(details?.phone_number)}</span>
                    </div>
                    <div>
                      <span> <BiEnvelope style={{ color: "#004ba8", fontSize: 20}}/> {details?.email}</span>
                    </div>
                    <div>
                      <span> <Rate disabled value={details?.rate} /></span>
                    </div>
                    <div className="mb-5">
                      {details?.result?.opening_hours?.open_now ? (<Tag color="green">Open Now</Tag>) : ( <Tag color="volcano">Closed</Tag>)}
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 my-2">
                    <InfomationCard title="Description">
                     <div className="text-muted">
                     {/* <h5><strong>About {details?.name}</strong></h5> */}
                      <article className="text-muted">
                      {/* {details?.description} */}
                      <div style={{ fontSize: '.8rem'}} dangerouslySetInnerHTML={{ __html: details?.description }} />
                      </article>

                     </div>
                     
                    </InfomationCard>
                  </div>
                </div>
                <div className="row">
                  {/* <div className="col-12">
                    <InfomationCard title="Listing Features"></InfomationCard>
                  </div> */}
                  <div className="col-12 my-2">
                    <InfomationCard title="Galleries/Photos">
                    <div className="pb-4">
                     {details?.galleries?.length > 0 && (<CustomPagingSlider details={details}/>)}
                    </div>
                    </InfomationCard>
                   
                  </div>
                  <div className="col-12 my-2 mt-4">
                    <InfomationCard title="Reviews">
                      <div>
                        {reviews?.details?.data?.length > 0 ? (
                          <Reviews data={reviews?.details} />
                        ) : (
                          <h5>No Reviews</h5>
                        )}
                      </div>
                    </InfomationCard>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="row">
                  <div className="col-12">
                    <DetailsSidebar data={details} reviews={reviews} placeId={placeId}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <style jsx>{`
        #close_now,
        #open_now {
          color: #fff;
          padding: 10px;
          border-radius: 5px;
          font-size: 0.7rem;
          font-weight: 600;
        }

        #open_now {
          background: #33ca7f;
        }

        #close_now {
          background: #ec4067;
        }
      `}</style>
    </div>
  );
};

export default Company;
