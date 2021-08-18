import { PAGE_DIRECTIONS } from '@/constants/routes';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { GrDirections } from "react-icons/gr";
import { HiOutlineLocationMarker } from "react-icons/hi";
import styled from 'styled-components';
import { Divider } from 'antd';
import { InfomationCard } from '@/components/CardComponent';
import CommentComponent from './Comment';


const CardContainer = styled.div`
background: #fff;
box-shadow: rgb(0 0 0 / 15%) 0px 16px 32px, rgb(0 0 0 / 10%) 0px 3px 8px !important;
border-radius: 13px;
padding: 20px;
// height: 300px;
text-align: center; 
`

const DetailsSidebar = (props) => {
    const [listData, setListData] = useState()

    useEffect(() => {
        setListData(props?.data?.result)
    }, [props, props?.data, props?.data?.result])

    console.log(listData)

  return (
    <div className="list-content py-2">
      <div>
      {listData?.website ? (<a id="website" href={listData?.website} target="_blank">Vist website</a>) : (<h5>Website: N/A</h5>)}
      </div>
      <div className="mt-3">
      <Link href={PAGE_DIRECTIONS + '/' + listData?.place_id}>
             <a id="direction" target="_blank">Get Directions</a>
            
             </Link>
      </div>
     <div className="mt-5">
     {/* <table>
       <tbody>
         <tr>
           <td>
             <Link href={PAGE_DIRECTIONS + '/' + listData?.place_id}>
             <a id="website" href={listData?.website} target="_blank">Get Directions <GrDirections /></a>
            
             </Link>
             <span className="ml-4"></span>
            
             
           </td>
           <td>
             <span><HiOutlineLocationMarker /></span>
             {listData?.vicinity}
           </td>
         </tr>
       </tbody>
     </table> */}

         <div className=" my-2">
                <InfomationCard title="Social Media">

                </InfomationCard>
              </div>
     </div>

     <div className="mt-3">
       <CardContainer>
         <h5>Working Hours</h5>
         {
           
           listData?.opening_hours.weekday_text.map(
             (item) => (
               <>
               <Divider/>
               <p>{item}</p>
                            </>
                          )
                        )
                      }
         {/* <p>No job available at the moment</p>

         <Divider/> */}
       </CardContainer>
     </div>

     <div className=" my-2">
                <InfomationCard title="Write Review">
                <div>
                    <CommentComponent />
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
