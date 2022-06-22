import { PAGE_DIRECTIONS } from '@/constants/routes';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { GrDirections } from "react-icons/gr";
import { HiOutlineLocationMarker } from "react-icons/hi";
import styled from 'styled-components';
import { Divider } from 'antd';
import { InfomationCard } from '@/components/CardComponent';
import CommentComponent from './Comment';
import { SiFacebook, SiTwitter, SiInstagram, SiYoutube, SiLinkedin, SiWhatsapp } from "react-icons/si";
import { formatTime } from '@/constants/DateFormat';
import { Empty } from 'antd';


const CardContainer = styled.div`
background: #fff;
box-shadow: rgb(33 33 52 / 10%) 0px 1px 4px !important;
border-radius: 5px;
padding: 20px 40px;
// height: 300px;
text-align: left; 
`

const DetailsSidebar = (props) => {
  const [listData, setListData] = useState()

  // console.log(props)

  useEffect(() => {
    setListData(props?.data[0])
  }, [props, props?.data, props?.reviews])

  // console.log(props)

  return (
    <div className="list-content py-2">
      <div>
        {listData?.attributes?.website ? (<a id="website" href={listData?.attributes?.website} target="_blank">Vist website</a>) : (<h5>Website: N/A</h5>)}
      </div>
      <div className="mt-3">
        <Link href={PAGE_DIRECTIONS + '/' + listData?.attributes?.place_id}>
          <a id="direction" target="_blank">Get Directions</a>

        </Link>
      </div>
      <div className="mt-5">

        <div className=" my-2">
          <InfomationCard title="Social Media">
            <div className="d-flex justify-content-center px-3">
              {!listData?.attributes?.social_media_handles && (<Empty description="Not Provided "/>)}
              {listData?.attributes?.social_media_handles?.facebook && (<a href={listData?.attributes?.social_media_handles?.facebook} target="_blank" className="mr-4"><SiFacebook style={{ fontSize: 30 }} /></a>)}
              {listData?.attributes?.social_media_handles?.twitter && (<a href={listData?.attributes?.social_media_handles?.twitter} target="_blank" className="mr-4"><SiTwitter style={{ fontSize: 30 }} /></a>)}
              {listData?.attributes?.social_media_handles?.instagram && (<a href={listData?.attributes?.social_media_handles?.instagram} target="_blank" className="mr-4"><SiInstagram style={{ fontSize: 30 }} /></a>)}
              {listData?.attributes?.social_media_handles?.youtube && (<a href={listData?.attributes?.social_media_handles?.youtube} target="_blank" className="mr-4"><SiYoutube style={{ fontSize: 30 }} /></a>)}
              {listData?.attributes?.social_media_handles?.linkedIn && (<a href={listData?.attributes?.social_media_handles?.linkedin} target="_blank" className="mr-4"><SiLinkedin style={{ fontSize: 30 }} /></a>)}
              {listData?.attributes?.social_media_handles?.whatsapp && (<a href={listData?.attributes?.social_media_handles?.whatsapp} target="_blank"><SiWhatsapp style={{ fontSize: 30 }} /></a>)}
            </div>
          </InfomationCard>
        </div>
      </div>

      <div className="my-3">
        <CardContainer>
          <h5>Working Hours</h5>
          <Divider />
           {JSON.stringify(listData?.attributes?.working_hours)  !== '{}' ? (
            <>
               <p>Modays:  {listData?.attributes?.working_hours?.Monday}
          </p>
          <Divider />
          <p>Tuesdays:  {listData?.attributes?.working_hours?.Tuesday}
          </p>
          <Divider />
          <p>Wednesdays:  {listData?.attributes?.working_hours?.Wednesday}
          </p>
          <Divider />
          <p>Thursdays:  {listData?.attributes?.working_hours?.Thursday}
          </p>
          <Divider />
          <p>Fridays:  {listData?.attributes?.working_hours?.Friday}
          </p>
          <Divider />
          <p>Saturdays:  {listData?.attributes?.working_hours?.Saturday}
          </p>
          <Divider />
          <p>Sundays:  {listData?.attributes?.working_hours?.Sunday}
          </p>
            </>
           ): (
           <Empty description="Not Provided "/>
           )}
          {/* {
           
           listData?.working_hours?.map(
             (item) => (
               <>
               <Divider/>
               <p>{item}</p>
                            </>
                          )
                        )
                      } */}
          {/* <p>No job available at the moment</p>

         <Divider/> */}
        </CardContainer>
      </div>

      <div className=" my-2">
        <InfomationCard title="Write Review">
          <div>
            <CommentComponent placeId={props.placeId} reviews={props?.reviews}/>
          </div>
        </InfomationCard>
      </div>


      <style jsx>{`
       table {
         background: #fff;
         width: 100%;
         text-align: center;
        }
        
        table tr td{
         border: 1px solid #DCE2C8;

       }

       table tr td{
         padding: 10px 20px;
         display: flex;
         text-align: center;
         justify-content: center;
         cursor: pointer;
       }

       p {
         font-size: .9rem;
         font-weight: 500;
       }

      

       #website {
         width: 100%;
         text-decoration: none;
         background: #33CA7F;
         color: #fff;
         padding: 10px 100px;
         border-radius: 5px;
         font-size: .8em;
         font-weight: 600;
       }

       #direction {
        width: 100%;
        text-decoration: none;
        background: #004ba8;
        color: #fff;
        padding: 10px 95px;
        border-radius: 5px;
        font-size: .8em;
        font-weight: 600;
      }

       h5{
         margin-bottom: 0 !important;
         text-align: center;
         font-size: .8em;
         font-weight: 600;
       }

       #website:hover {
         opacity: .8
       }
      `}</style>
    </div>
  );
};

export default DetailsSidebar;
