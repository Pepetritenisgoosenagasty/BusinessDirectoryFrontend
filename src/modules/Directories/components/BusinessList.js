import { GoLocation } from "react-icons/go";
import { IoIosArrowBack } from "react-icons/io";
import { useRouter } from "next/router";
import { BusinessListCard } from "@/components/CardComponent";
import { DIRECTORIES_PAGE } from "@/constants/routes";
import { useEffect, useState } from "react";
import axios from "axios";
import { Pagination } from 'antd';
import { Input, Space } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import { useDebounce } from "use-debounce";



const { Search } = Input;

const BusinessList = (props) => {
  const [listData, setListData] = useState('')
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


  function showTotal(total) {
    return `Total ${total} items`;
  }

  return (
    <div className="">
   <div className="searchBox-content">
   <div className="list-header container px-5 pt-5 pb-3">
        <div className="d-flex justify-content-between align-items-center">
          <p>
            {" "}
            <GoLocation style={{ fontSize: 17, verticalAlign: "sub" }} /> 300+
            Private Companies in Accra Central
          </p>
          <a onClick={handleClick}>
            {" "}
            <IoIosArrowBack /> Go Back
          </a>
        </div>
        <h1>Explore All 300+ Private Companies</h1>
      </div>
      <div className="row">
     <div className="container px-5 businessSearch pb-5">
     <Search placeholder="Enter Company`s name" onSearch={onSearch} style={{ width: '100%' }} />
     </div>
      </div>
   </div>
      <div className="list-content mt-5">
        {listData && listData.length > 0 && listData.map((result, index ) => (
          <BusinessListCard
            hoverId={props.hoverId}
            key={index}
            handleMouseOver={() => props.handleIndex(index)}
            name={result.name}
            services={result.category}
            category={result.business_status.toLowerCase()}
            email={result.emails}
            phone={result.formatted_phone_number}
            star={result.rating}
            location={result.formatted_address}
            url={result.image}
            total_ratings={result.user_ratings_total}
            icon="/assets/claimed.jpeg"
            href={DIRECTORIES_PAGE + "/" + result.place_id}
          />
        ))}
      </div>
     <div className="text-center py-5" style={{ width: '60vw'}}>
      <Pagination current={props.currentPage} onChange={props.onPageChange} pageSize={props.pageSize} showSizeChanger={false} size="small" total={props.list.length} defaultPageSize="10"  hideOnSinglePage={true}  defaultCurrent="1"  />
     </div>
    </div>
  );
};

export default BusinessList;
