import { BsDot } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import styled from "styled-components";

import Link from "next/link";
import { FiPhoneCall } from "react-icons/fi";
import ReactStars from "react-rating-stars-component";

import {  AiOutlineMail } from "react-icons/ai";
import { Collapse } from 'antd';
import { HiOutlineMail } from "react-icons/hi";
import { phoneNumberFormatter } from "src/utils/filterKeyCodes";

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
  // padding: 30px 40px;
  width: 300px;
  height: 300px;
  position: relative;
  border-radius: 12px;
  overflow: hidden;

  &:hover {
    .company-info {
      height: 60%;
    }
  }



  h5 {
    font-size: .8rem;
    font-weight: 700;
    color: #fff;
    padding-bottom: 10px;
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
    font-size: 0.7rem;
    font-weight: 500;
    color: #fff;
  }

  .company-pic {
    img{
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      border-radius: 12px;
      object-fit: cover;
  
    }
  }

  .company-info {
    height: 21%;
    border-radius: 12px;
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    transition: all .3s ease;
  }

  .linkBtn {
    a {
      text-decoration: none;
      font-size: .7rem;
      padding: 5px 10px;
      background-color: transparent;
      border: 1px solid #fff;
      color: #fff;
      border-radius: 20px;
      

      &:hover {
        background-color: #fff;
        border: 1px solid transparent;
        color: #004ba8;
      }
    }

  }


`;

const Badge = styled.span`
position: absolute;
top: 10px;
left: 10px;
  text-align: left;
  padding:5px 10px;
  background-color: #004ba8;
  color: #fff;
  border-radius: 50px;
  font-size: 0.7rem;
  font-weight: 500;
`;
export const CategoriesCard = (props) => {
  return (
    <Wrapper>
      <div className="company-pic">
        <img src={props.img_url} />
        <div className="company-info px-2 py-2">
        <ReactStars
          count={5}
          // onChange={ratingChanged}
          value={props.rating}
          size={15}
          isHalf={true}
          emptyIcon={<i className="far fa-star"></i>}
          halfIcon={<i className="fa fa-star-half-alt"></i>}
          fullIcon={<i className="fa fa-star"></i>}
          activeColor="#ffd700"
          edit={false}
        />
        <div>
        <h5>{props.name}</h5>
          <p><GoLocation style={{ fontSize: 15, color: "#ffc400" }} /> {props.location}</p>
          <p><FiPhoneCall style={{ fontSize: 15, color: "#ffc400" }}/> Phone #: {props.phone}</p>
          <p><HiOutlineMail style={{ fontSize: 15, color: "#ffc400" }}/> Email: {props.email ? props.email : "N/A"}</p>
        </div>
        <div className="mt-2 linkBtn">
          {/* <NavLink href={props.url} name="Show More" isRegisterLink /> */}
          <Link href={props.url}>
          <a>Show More</a>
        </Link>
      </div>
      </div>
      </div>
      <div>
        <Badge>
          {/* <BsDot style={{ fontSize: 50 }} /> */}
          <span>{props.category}</span>
        </Badge>
      </div>
    </Wrapper>
  );
};

const OverviewWrapper = styled.div`

  cursor: pointer;
  background: #fff;
  margin: 40px 30px ;
  width: 45vw;
  border-top: 1px solid #eef1f7;
  
  display: grid;
  border-radius: 10px;
  grid-template-columns: repeat(2, 1fr) !important;
  align-items: center;
  transition: all 0.3s ease;
  box-shadow: rgb(0 0 0 / 15%) 0px 16px 32px, rgb(0 0 0 / 10%) 0px 3px 8px !important;
  z-index: -10;

@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
  width: 100%;
  margin: 10px ;
  grid-template-columns: 100% !important;
}
  &:hover {
    background: aliceblue;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 240px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    object-fit: cover;
  }
`;
const ContentContainer = styled.div`
  width: 100%;
  // margin-left: 30px;
  padding: 20px 30px;
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

export const BusinessListCard = (props) => {
// console.log(props)
  return (
    <Link href={props?.href}>
      <OverviewWrapper onMouseEnter={props?.handleMouseOver}>
        <ImageContainer>
          <img
            src={props?.imgUrl}
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
                      value={props?.star}
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
            {props?.name}
            {/* <span className="ml-1">
              <img src={icon && icon} width="15" height="15" />
            </span> */}
          </h5>
          <div className="d-flex align-items-center">
            {/* <img src="/assets/star-on.png" alt="Picture of rating" width="20" height="20" /> */}
            <span>
              <strong>Users Ratings</strong>:{" "}
              {props?.total_ratings ?? 0}
            </span>
          </div>
          <div className="d-flex justify-content-between mt-2">
            <span>
              <strong>Service:</strong> {props?.services}
            </span>
          </div>
          <div className=" mt-2">
            <div className="d-flex justify-content-between align-items-center">
              <span>
                <FiPhoneCall /> <strong>Phone #</strong>:{" "}

                {props?.phone ?? "N/A"}
              </span>
            </div>
            <div className="mt-1 pr-5">
              {" "}
              <AiOutlineMail />{" "}
              <span className>
                <strong>Email</strong>: {props?.email ?? "N/A"}
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
              <span className="ml-2"> {props?.location} </span>
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

const DashboardWrapper = styled.div`
background: #fff;
border-radius: 10px;
// height: 200px;
box-shadow: rgb(0 0 0 / 15%) 0px 16px 32px, rgb(0 0 0 / 10%) 0px 3px 8px !important;
`

export const DashboardCustomCard = ({children}) => {
  return(
    <DashboardWrapper>
    {children}
    </DashboardWrapper>
  )
}

