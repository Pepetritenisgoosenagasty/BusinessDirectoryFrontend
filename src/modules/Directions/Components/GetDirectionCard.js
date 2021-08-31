import styled from "styled-components";
import { BiBusSchool } from "react-icons/bi";
import { FaBicycle, FaMapMarker, FaMapMarkerAlt } from "react-icons/fa";
import { GiDirectionSigns, GiPositionMarker, GiWalk } from "react-icons/gi";
import { Divider } from "antd";
import { AiOutlineCar, AiOutlineMail } from "react-icons/ai";
import { MdTimeline } from "react-icons/md";
import { IoMdTimer } from "react-icons/io";
import { useGetDirections } from "src/hooks/useGetDirections";
import { Spin } from 'antd';
import { useEffect, useState } from "react";
import { BsArrow90DegRight } from "react-icons/bs";
import { Spinner } from "@/components/Spinner";
import { Results } from "@/components/Result";
import { PAGE_HOME } from "@/constants/routes";

const DirectionCardWrapper = styled.div`
  position: fixed;
  top: 100px;
  width: 300px;
  left: 20px;
  height: 70vh;
  background: #fff;
  overflow: hidden;
  overflow-y: auto;
  z-index: 1;
  padding: 9px 16px;
  border-radius: 6px;
  box-shadow: rgb(0 0 0 / 15%) 0px 16px 32px, rgb(0 0 0 / 10%) 0px 3px 8px !important;

  h1 {
    color: #053c5e !important;
    font-size: 1rem;
    font-weight: 700;
  }

  .travelMode {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;

    a {
      padding: 5px 30px;
      border-bottom: 3px solid transparent;
      transition: all 0.3s ease;

      &:hover {
        border-bottom: 3px solid #053c5e;
      }
      svg {
        font-size: 25px;
        fill: #4c5b5c;
      }
    }
  }

  .startingRoute {
    h5 {
      color: #053c5e !important;
      font-size: .8rem;
      font-weight: 600;
    }
    .start {
      border: 1px solid #d8d8d8;
      padding: 10px;
      border-radius: 10px;
      background-color: #f3eaf4;
      font-size: .75rem;
    }
    span {
      font-weight: 500;
      svg {
        fill: #053c5e !important;
      }
    }
  }

  .endRoute {
    h5 {
      color: #8c2f39 !important;
      font-size: .8rem;
      font-weight: 600;
    }

    .end {
      font-size: .75rem;
    }

    span {
      font-weight: 500;
      svg {
        fill: #8c2f39 !important;
      }
    }
  }

  .warning {
    padding: 5px;
    background-color: #dff2d8;

    h6 {
      font-size: 0.8rem;
      margin-bottom: 0 !important;
    }

    
  }
`;

const GetInfo = ({  info, distance, duration }) => (
  <div>
    <div className="d-flex align-items-center">
      <span className="mr-2">
        <GiDirectionSigns style={{ fontSize: 30 }} />
      </span>
      <div>
        <div style={{ fontSize: '.8rem'}} dangerouslySetInnerHTML={{ __html: info }} />
        <span>
          <small className="text-info"> distance: {distance}</small>
          <small className="ml-2 text-info"> duration: {duration}</small>
        </span>
      </div>
    </div>
        <hr />
  </div>
);

export const GetDirectionCard = (props) => {
  // const [data, setData] = useState("");
  const { data, isLoading, isError } = useGetDirections({
    originId: props?.origin?.lat + "," + props?.origin?.lng,
    destinationId: props?.directions?.geometry?.location.lat + "," + props?.directions?.geometry?.location.lng,
  });
  

  // useEffect(() => {
  //   setData(getDirections);
  // }, [getDirections]);
  // console.log(data);

  if (isLoading) return <Spinner />;
  if (isError) return  <Results status="500" title="500" subTitle="Sorry, something went wrong." url={PAGE_HOME}/>;
  return (
    <DirectionCardWrapper>
      <div className="pt-3">
        <h1>Directions </h1>
      </div>
      {/* <div className="travelMode">
        <a>
          <AiOutlineCar />
        </a>
        <a>
          <BiBusSchool />
        </a>
        <a>
          <GiWalk />
        </a>
        <a>
          <FaBicycle />
        </a>
      </div> */}

      <div className="startingRoute mt-3">
        <h5>Starting Point</h5>
        <div className="start">
          <span>
            <FaMapMarkerAlt />
          </span>
          <span className="ml-3">{data?.start_address}</span>
        </div>
      </div>
      <div className="endRoute mt-3">
        <h5>Ending Point</h5>
        <div className="end">
          <span>
            <GiPositionMarker />
          </span>
          <span className="ml-3">{data?.end_address}</span>
        </div>
        <div className="warning my-3 px-2 py-2 text-justify">
          <h6>
            Walking directions are in beta. Use caution – This route may be
            missing sidewalks or pedestrian paths.
          </h6>
        </div>
        <div>
          <p className="end">
            <span>
              <GiPositionMarker />
            </span>
            <span className="ml-3">{data?.end_address}</span>
          </p>
          <p className="end">
            <span>
              <MdTimeline />
            </span>
            <span className="ml-3">Distance: {data?.distance?.text}</span>
          </p>
          <p className="end">
            <span>
              <IoMdTimer />
            </span>
            <span className="ml-3">Duration: {data?.duration?.text}</span>
          </p>
        </div>
        <div>
        <hr/>
          <div className="d-flex align-items-center py-2">
          <AiOutlineCar style={{ fontSize: 30 }} />
          <h5 className="ml-3">Driving Directions</h5>
        
          </div>
          <hr/>
          {data?.steps?.length > 0 &&
            data?.steps.map((step, index) => (
              <>
                <GetInfo
                  key={index}
                  id={index}
                  info={step.html_instructions}
                  distance={step.distance.text}
                  duration={step.duration.text}
                />
              </>
            ))}
        </div>
      </div>
    </DirectionCardWrapper>
  );
};
