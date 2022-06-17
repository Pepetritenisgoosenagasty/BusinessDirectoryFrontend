import { GoLocation } from "react-icons/go";
import { IoIosArrowBack } from "react-icons/io";
import { useRouter } from "next/router";
import { BusinessListCard } from "@/components/CardComponent";
import { DIRECTORIES_PAGE } from "@/constants/routes";
import { useEffect, useState } from "react";
import axios from "axios";
import { Pagination, Empty } from 'antd';
import { Input, Space } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import { useDebounce } from "use-debounce";



const { Search } = Input;

const BusinessList = (props) => {
  const [listData, setListData] = useState([])
  const [searchText, setsearchText] = useState("");

	const [deboucedValue] = useDebounce(searchText, 500);
  
  const router = useRouter();

  const handleClick = () => {
    router.back();
  };

  

  useEffect(() => {
    setListData(props.businessList)
  }, [props.businessList])




const onSearch = async value => {
  try {

    props.setSearchvalue(value)
    // setsearchText(value)
    // const res = await listData.filter(item => value.includes(item.name))
    // setListData(res)
  } catch (error) {
    console.log(error)
  }
};


  // function showTotal(total) {
  //   return `Total ${total} items`;
  // }

  return (
    <div className="">
   <div className="searchBox-content">
   <div className="list-header container px-5 pt-5 pb-3">
        <div className="d-flex justify-content-between flex-wrap-reverse align-items-center">
          <p>
            {" "}
            <GoLocation style={{ fontSize: 17, verticalAlign: "sub" }} />
            Private Companies in Accra Central
          </p>
          <a onClick={handleClick}>
            {" "}
            <IoIosArrowBack /> Go Back
          </a>
        </div>
        <h1>Explore All Private Companies Here</h1>
      </div>
      <div className="row">
     <div className="container px-5 businessSearch pb-5">
     <Search placeholder="Enter Company`s name" onSearch={onSearch} style={{ width: '100%' }} />
     </div>
      </div>
   </div>
   {
     listData.length > 0 ? (
      <div className="list-content mt-5">
      {listData && listData.length > 0 && listData.map((result, index ) => (
        <BusinessListCard
          hoverId={props.hoverId}
          key={index}
          handleMouseOver={() => props.handleIndex(index)}
          name={result.attributes.name}
          services={result.attributes.category.data.attributes.name}
          // category={result.business_status.toLowerCase()}
          email={result.attributes.email}
          phone={"+" + result.attributes.phone_number}
          star={result.attributes.rate}
          location={result.attributes.address}
          imgUrl={result.attributes.image ?? result.attributes.galleries[0]?.url}
          total_ratings={result.attributes.user_rating}
          href={DIRECTORIES_PAGE + "/" + result.attributes.place_id}
          data={result.attributes.galleries}
        />
      ))}
    </div>
     ) : (
       <div className="list-content mt-5" style={{ height: '100vh'}}>
         <Empty description="Not Found" />
       </div>
     )
   }
     
     <div className="text-center py-5 pagination-btn"  style={{ width: '60vw'}}>
       <button className={props?.currentPage === 1 && 'disabled-btn'} disabled={props?.currentPage === 1} onClick={() => props?.setcurrentPage(props?.currentPage - 1)}>Previous</button>
        <button className={props?.currentPage === props?.list?.pagination?.pageCount && 'disabled-btn'} disabled={props?.currentPage === props?.list?.pagination?.pageCount} onClick={() => props?.setcurrentPage(props?.currentPage + 1)}>Next</button>
        <span className="ml-5">{props?.currentPage} of {props?.list?.pagination?.pageCount}</span>
     </div>
     
    </div>
  );
};

export default BusinessList;