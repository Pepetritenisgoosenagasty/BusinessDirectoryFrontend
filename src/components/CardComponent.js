import { BsDot } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import styled from "styled-components";
import { NavLink } from "./ButtonComponent";

import Link from "next/link";
import { FiPhoneCall } from "react-icons/fi";
import ReactStars from "react-rating-stars-component";

import {  AiOutlineMail } from "react-icons/ai";
import { Collapse } from 'antd';

const { Panel } = Collapse;




const CardWrapper = styled.div`
  border: none;
  width: 251px;
  height: 251px;
  padding: 20px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: rgb(0 0 0 / 8%) 0px 1px 12px;
`;

export const CardComponent = ({ url }) => {
  return (
    <CardWrapper>
      <img src={url} width="200" />
    </CardWrapper>
  );
};

const Wrapper = styled.div`
  background-color: #fff;
  padding: 30px 40px;
  width: 350px;



  h5 {
    font-size: 1rem;
    font-weight: 700;
    color: #000;
  }

  h6 {
    font-size: 0.8rem;
    color: #83858c;
  }

  h4 {
    font-size: .8rem;
    font-weight: 600;
  }

  .logo {
    display: flex;
    align-items: center;
  }

  p {
    font-size: 0.8rem;
    font-weight: 500;
  }
`;

const Badge = styled.span`
  text-align: left;
  padding: 10px 15px;
  background-color: #004ca836;
  color: #004ba8;
  border-radius: 5px;
  font-size: 0.7rem;
  font-weight: 500;
`;
export const CategoriesCard = ({
  category,
  name,
  location,
  logo,
  business_status,
  phone,
  email,
  url,
  rating
}) => {
  return (
    <Wrapper>
      <div>
        <Badge>
          {/* <BsDot style={{ fontSize: 50 }} /> */}
          <span>{category}</span>
        </Badge>
      </div>
      <div className="mt-3">
        <h5>{name}</h5>
      </div>
      <div className="mt-3">
        <h6>
          <GoLocation style={{ fontSize: 17, color: "#ffc400" }} /> {location}
        </h6>
      </div>
      <div className="logo mt-4">
        <span className="mr-3">
          <img src={logo} width="50" />
        </span>
        <h4>Business Status: {business_status}</h4>
      </div>
      <div className="mt-2 d-flex justify-content-between align-items-center">
        <div>
          <p>Phone #: {phone}</p>
          <p>Email: {email ? email : "N/A"}</p>
        </div>
        <div>
          <img src="/assets/claimed.jpeg" width="60" />
        </div>
      </div>
      <div>
        <ReactStars
          count={5}
          // onChange={ratingChanged}
          value={rating}
          size={30}
          isHalf={true}
          emptyIcon={<i className="far fa-star"></i>}
          halfIcon={<i className="fa fa-star-half-alt"></i>}
          fullIcon={<i className="fa fa-star"></i>}
          activeColor="#ffd700"
          edit={false}
        />
      </div>
      <div className="mt-3">
        <div>
          <NavLink href={url} name="Show More" isRegisterLink />
        </div>
      </div>
    </Wrapper>
  );
};

const OverviewWrapper = styled.div`
  // height: 190px ;
  cursor: pointer;
  background: transparent;
  width: 60vw;
  border-top: 1px solid #eef1f7;
  // border-bottom: 1px solid #EEF1F7;
  padding: 30px 40px;
  display: grid;
  grid-template-columns: repeat(2, 1fr) !important;
  align-items: center;
  transition: all 0.3s ease;
  z-index: -10;

  &:hover {
    background: aliceblue;
  }
`;

const ImageContainer = styled.div`
  width: 340px;
  height: 200px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }
`;
const ContentContainer = styled.div`
  width: 100%;
  margin-left: 10px;
  h5 {
    font-size: 1rem;
    font-weight: 600;
    color: #495159;
  }

  span {
    font-size: 0.8rem;
    color: #495159;
  }
`;

const BadgeSpan = styled.span`
  padding: 5px 10px;
  background-color: #98ce00;
  color: #fff !important;
  border-radius: 5px;
  font-size: 0.7rem !important;
  font-weight: 600;
`;

export const BusinessListCard = ({
  url,
  icon,
  href,
  name,
  star,
  services,
  category,
  location,
  email,
  total_ratings,
  phone,
  handleMouseOver,
}) => {
  return (
    <Link href={href}>
      <OverviewWrapper onMouseEnter={handleMouseOver}>
        <ImageContainer>
          <img
            src={url}
            alt="Picture of the company"
            width={300}
            height={100}
          />
        </ImageContainer>
        <ContentContainer>
            <div className="mr-3" style={{ color: "#1B998B" }}>
               <ReactStars
                      count={5}
                      // onChange={ratingChanged}
                      value={star}
                      size={15}
                      isHalf={true}
                      emptyIcon={<i className="far fa-star"></i>}
                      halfIcon={<i className="fa fa-star-half-alt"></i>}
                      fullIcon={<i className="fa fa-star"></i>}
                      activeColor="#ffd700"
                      edit={false}
                    />
            </div>
          <h5>
            {name}
            <span className="ml-1">
              <img src={icon && icon} width="15" height="15" />
            </span>
          </h5>
          <div className="d-flex align-items-center">
            {/* <img src="/assets/star-on.png" alt="Picture of rating" width="20" height="20" /> */}
            <span>
              <strong>Users Ratings</strong>:{" "}
              {total_ratings ? total_ratings : 0}
            </span>
          </div>
          <div className="d-flex justify-content-between mt-2">
            <span>
              <strong>Service:</strong> {services}
            </span>
          </div>
          <div className=" mt-2">
            <div className="d-flex justify-content-between align-items-center">
              <span>
                <FiPhoneCall /> <strong>Phone #</strong>:{" "}
                {phone ? phone : "N/A"}
              </span>
            </div>
            <div className="mt-1 pr-5">
              {" "}
              <AiOutlineMail />{" "}
              <span className>
                <strong>Email</strong>: {email ? email : "n/a"}
              </span>
            </div>
            <div className="mt-1">
              <span>
                <GoLocation
                  style={{
                    fontSize: 17,
                    verticalAlign: "sub",
                    color: "#F46036",
                  }}
                />
              </span>
              <span className="ml-2"> {location} </span>
            </div>
          </div>
        </ContentContainer>
      </OverviewWrapper>
    </Link>
  );
};

const AuthCardWrapper = styled.div`
  background: #fff;
  max-width: 800px;
  margin-inline: auto;
  //  height: 700px;
  border-radius: 50px;
  //  box-shadow: 10px 10px 10px rgb(46 54 68 / 3%);
  box-shadow: rgb(0 0 0 / 15%) 0px 16px 32px, rgb(0 0 0 / 10%) 0px 3px 8px !important;
`;

// Authentication Page
export const AuthCard = ({ children }) => {
  return <AuthCardWrapper>{children}</AuthCardWrapper>;
};


export const InfomationCard = ({children, title}) => {
  return (
    <Collapse defaultActiveKey={['1']} expandIconPosition="right">
    <Panel header={title} key="1">
      {children}
    </Panel>
  </Collapse>
  )
}

