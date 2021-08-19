import ImagesComponent from "@/components/ImagesComponent";
import NavigationMenu from "@/components/NavigationMenu";
import {
  AiFillSafetyCertificate,
  AiOutlineCheck,
  AiOutlineExclamationCircle,
  AiOutlineStar,
} from "react-icons/ai";
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
import { BiPhoneCall } from "react-icons/bi";
import Reviews from "./components/Reviews";
import DetailsSidebar from "./components/DetailsSidebar";
import CommentComponent from "./components/Comment";
import { Spin } from "antd";
import { useData } from "../../hooks/useDetails";
import { InfomationCard } from "@/components/CardComponent";
import Footer from "@/components/Footer";

const Company = () => {
  const router = useRouter();

  const placeId = router.query.id;

  const { details, isLoading, isError } = useData(placeId);

  // const getDetails = async (url) => {
  //   try {
  //     const res = await axios.get(url);
  //     return setdetails(res.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  if (isLoading) return <Spin size="large" />;
  if (isError) return <div>Error</div>;

  console.log(details);

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
          <Map>
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
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 my-2">
                    <InfomationCard title="Description"></InfomationCard>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <InfomationCard title="Listing Features"></InfomationCard>
                  </div>
                  <div className="col-12 my-2">
                    <InfomationCard title="Gallery/Photos"></InfomationCard>
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
                    <DetailsSidebar data={details} />
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
