import { useEffect, useState } from "react";
import { Descriptions, Badge, Tag } from "antd";
import {
  SiFacebook,
  SiTwitter,
  SiInstagram,
  SiYoutube,
  SiLinkedin,
  SiWhatsapp,
} from "react-icons/si";
import { formatTime } from "@/constants/DateFormat";
import  Image  from 'next/image';
import { SRLWrapper } from "simple-react-lightbox";
import { phoneNumberFormatter } from "src/utils/filterKeyCodes";

const View = (props) => {
  const [data, setData] = useState();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setData(props?.record);
  }, [props?.record]);

  console.log(data);
  return (
    <div>
      <Descriptions title="" layout="vertical" bordered>
        <Descriptions.Item label="Business Name">
          {data?.attributes?.name}
        </Descriptions.Item>
        <Descriptions.Item label="Category">{data?.attributes?.category?.data?.attributes?.name}</Descriptions.Item>
        <Descriptions.Item label="Email">{data?.attributes?.email}</Descriptions.Item>
        <Descriptions.Item label="Phone Number">
          {data?.attributes?.phone_number}
        </Descriptions.Item>
        <Descriptions.Item label="Amenities" span={2}>
          {data?.attributes?.amenities?.length > 0
            ? data?.attributes?.amenities?.join(", ")
            : "Not Available"}
        </Descriptions.Item>
        <Descriptions.Item label="Description" span={2}>
          {/* <Badge status="processing" text="Running" /> */}
          {data?.description}
          <div style={{ fontSize: '.8rem'}} dangerouslySetInnerHTML={{ __html: data?.attributes?.description }} />
        </Descriptions.Item>
        {/* <Descriptions.Item label="Status" span={1}>
          {data?.attributes?.published_at ? (
            <Tag color="green">Published</Tag>
          ) : (
            <Tag color="red">Not Published</Tag>
          )}
        </Descriptions.Item> */}
        <Descriptions.Item label="City">{data?.attributes?.city}</Descriptions.Item>
        <Descriptions.Item label="Address">{data?.attributes?.address}</Descriptions.Item>
        <Descriptions.Item label="Official Website">
          <a href={data?.attributes?.website} target="_blank">
            {data?.attributes?.website}
          </a>
        </Descriptions.Item>
        <Descriptions.Item label="Working Hours" span={2}>
           Mondays:{" "}
          {data?.attributes?.working_hours?.Mondays?.length > 0
            ? formatTime(data?.attributes?.working_hours?.Mondays[0]) +
              " - " +
              formatTime(data?.attributes?.working_hours?.Mondays[1])
            : "Closed"}
          <br />
          Tuesdays:{" "}
          {data?.attributes?.working_hours?.Tuesdays?.length > 0
            ? formatTime(data?.attributes?.working_hours?.Tuesdays[0]) +
              " - " +
              formatTime(data?.attributes?.working_hours?.Tuesdays[1])
            : "Closed"}
          <br />
          Wednesdays:
          {data?.attributes?.working_hours?.Wednesdays?.length > 0
            ? formatTime(data?.attributes?.working_hours?.Wednesdays[0]) +
              " - " +
              formatTime(data?.attributes?.working_hours?.Wednesdays[1])
            : "Closed"}
          <br />
          Thursdays:{" "}
          {data?.attributes?.working_hours?.Thursdays?.length > 0
            ? formatTime(data?.attributes?.working_hours?.Thursdays[0]) +
              " - " +
              formatTime(data?.attributes?.working_hours?.Thursdays[1])
            : "Closed"}
          <br />
          Fridays:{" "}
          {data?.attributes?.working_hours?.Fridays?.length > 0
            ? formatTime(data?.attributes?.working_hours?.Fridays[0]) +
              " - " +
              formatTime(data?.attributes?.working_hours?.Fridays[1])
            : "Closed"}
          <br />
          Saturdays:{" "}
          {data?.attributes?.working_hours?.Saturdays?.length > 0
            ? formatTime(data?.attributes?.working_hours?.Saturdays[0]) +
              " - " +
              formatTime(data?.attributes?.working_hours?.Saturdays[1])
            : "Closed"}{" "}
          <br />
          Sundays:{" "}
          {data?.attributes?.working_hours?.Sundays?.length > 0
            ? formatTime(data?.attributes?.working_hours?.Sundays[0]) +
              " - " +
              formatTime(data?.attributes?.working_hours?.Sundays[1])
            : "Closed"}
        </Descriptions.Item> 
        <Descriptions.Item label="Social Media Handles">
          {/* {data?.attributes?.social_media_handles} */}
          <br />
          <div className="d-flex justify-content-between px-3">
            {data?.attributes?.social_media_handles?.facebook && (
              <a href={data?.attributes?.social_media_handles?.facebook} target="_blank">
                <SiFacebook style={{ fontSize: 25 }} />
              </a>
            )}
            {data?.attributes?.social_media_handles?.twitter && (
              <a href={data?.attributes?.social_media_handles?.twitter} target="_blank">
                <SiTwitter style={{ fontSize: 25 }} />
              </a>
            )}
            {data?.attributes?.social_media_handles?.youtube && (
              <a href={data?.attributes?.social_media_handles?.youtube} target="_blank">
                <SiYoutube style={{ fontSize: 25 }} />
              </a>
            )}
            {data?.attributes?.social_media_handles?.linkedIn && (
              <a href={data?.attributes?.social_media_handles?.linkedIn} target="_blank">
                <SiLinkedin style={{ fontSize: 25 }} />
              </a>
            )}
          </div>
        </Descriptions.Item>
        <Descriptions.Item span={3} label="Gallery">
        <SRLWrapper>
         {
           data?.attributes?.galleries?.data?.map((item) => (
            <>
            <img
           width="200"
           height="200"
           src={item.url}
         
         />
            </>
           ))
         }
          </SRLWrapper>
        </Descriptions.Item>
      </Descriptions>
    </div>
  );
};

export default View;
