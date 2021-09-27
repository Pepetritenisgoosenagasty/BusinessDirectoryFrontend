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
import { BiMap, BiPhoneCall } from "react-icons/bi";
import Reviews from "./components/Reviews";
import DetailsSidebar from "./components/DetailsSidebar";
import CommentComponent from "./components/Comment";
import { Spinner } from "@/components/Spinner";
import { useData } from "../../hooks/useDetails";
import { InfomationCard } from "@/components/CardComponent";
import Footer from "@/components/Footer";
import { Results } from "@/components/Result";
import { PAGE_HOME } from "@/constants/routes";
import { useGetPhotos } from "src/hooks/useGetPhotos";

const Company = () => {
  const router = useRouter();
  const [photos, setPhotos] = useState([])

  const API_KEY = process.env.googleApisKey;

  const placeId = router.query.id;

  const { details, isLoading, isError } = useData(placeId);
  const [visible, setVisible] = useState(false);


  

  const fetchPhotos = async () => {
  const data =  await details?.result?.photos;
  setPhotos(data)
  }

  useEffect(() => {
    fetchPhotos()
  }, [])




  if (isLoading) return <Spinner />;
  if (isError) return  <Results status="500" title="500" subTitle="Sorry, something went wrong." url={PAGE_HOME}/>;

  // console.log(details);

  // useEffect(() => {

  // }, [placeId]);

  //    Marker
  const MarkerContent = () => {
    const position = {
      lat: details?.result?.geometry.location.lat,
      lng: details?.result?.geometry.location.lng,
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
                      <h1>{details?.result?.name}</h1>
                    </div>
                    <div>
                      <span> <BiMap style={{ color: "#004ba8", fontSize: 20}} /> {details?.result?.formatted_address}</span>
                    </div>
                    <div>
                      <span> <BiPhoneCall style={{ color: "#004ba8", fontSize: 20}}/> {details?.result?.international_phone_number}</span>
                    </div>
                    <div>
                      <span> <Rate disabled value={details?.result?.rating} /></span>
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
                     <h5><strong>History</strong></h5>
                      <article className="text-muted">
                      Techmaaxx (established in 1994) having more than 15 years of experience in catering construction requirements of the Sugar Industry such as Installation and commissioning of Boilers, Turbogenerators, and Sugar plant machinery. Exhausted, but committed corporate chief executives wanted to do the same in different ways. Guided by the individuals who had crossed the same phase with fanfare caused the creation of Techmaaxx International Limited (TiL). Started structurally from the second half of FY 2014, TiL, is the flagship company of Techmaaxx Projects and services Limited, Chennai, India, is registered in Ghana.
                      </article>

                     </div>
                     



                      <div className="text-muted mt-2">
                      <h5><strong>Our Vision</strong></h5>
                      <ul>
                        <li>By 2019 POS Unit Established</li>
                        <li>By 2020 expansion of POS gadgets</li>
                        <li>5 African, 1 European, 1 Middle East and Asian Countries</li>
                        <li>By 2021 establishing franchises in 10 countries outside Ghana and increase our staff strength to 300
</li>
                      </ul>
                      </div>
                      
                     

                   <div className="text-muted mt-2">
                   <h5><strong>Our Values</strong></h5>
                      <article>
                      Our values define who we are. Our commitment to integrity, quality, and teamwork fosters trust with clients and other stakeholders. This commitment allows us to provide excellence in all our deliverables.
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
                    <InfomationCard title="Gallery/Photos">
                      {
                       photos?.length > 0 && photos?.map((photo, i) => (
                          // <img  src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${photo?.photo_reference}&key=${API_KEY}`} />
                          <>
                          <Image
                            preview={{ visible: false }}
                            width={330}
                            height={300}
                            key={1}
                            src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${photo?.photo_reference}&key=${API_KEY}`}
                            onClick={() => setVisible(true)}
                          />
                          <div style={{ display: 'none' }}>
                            <Image.PreviewGroup preview={{ visible, onVisibleChange: vis => setVisible(vis) }}>
                              <Image key={1} src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${photo?.photo_reference}&key=${API_KEY}`} />
                            
                            </Image.PreviewGroup>
                          </div>
                        </>
                        ))
                      }
                    </InfomationCard>
                  </div>
                  <div className="col-12 my-2">
                    <InfomationCard title="Reviews">
                      <div>
                        {details?.result?.reviews ? (
                          <Reviews data={details} />
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
                    <DetailsSidebar data={details} placeId={placeId}/>
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
