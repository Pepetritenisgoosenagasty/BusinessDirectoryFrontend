
import { BsSearch } from "react-icons/bs";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { GOOGLE_MAP_API_KEY } from "@/constants/global";
import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { DIRECTORIES_PAGE } from "@/constants/routes";
import { Input, AutoComplete } from 'antd';
import { useDebounce } from "use-debounce";
import axios from "axios";



const SearchComponent = () => {
  const [value, setValue] = useState(null);
  const [searchText, setsearchText] = useState("");

  const [deboucedValue] = useDebounce(searchText, 300);
  const [isloading , setisloading  ] = useState(false);
  const [rawData, setrawData] = useState([]);

  

  //contains actual data from api.
  const [actualData, setActualData] = useState([]);

  const router = useRouter();
  // let place_id = route.query.id;

  const handleSelect = async value => {
    // router.push(DIRECTORIES_PAGE + '/' + value?.place_id)
  };

  const [options, setOptions] = useState([]);

  const handleSearchResults = (list) => {

    try {

      let results = []

      if(list.length > 0){
        

        list.map((business) => {
          results.push({
            value: business?.place_id,
            label: business?.name,
          })
          return business
        })


      }else{
  
        return results
      }

      return results
      
    } catch (error) {
      console.log(error)
      return []
    }
    
   
  } 
  

  const handleSearch = (value) => {
    setSearchvalue(value)
  };

  const onSelect = (place_id) => {
        router.push(DIRECTORIES_PAGE + '/' + place_id)
  };


  const getListData = async (url) => {
    try {
      const res = await axios.get(url);
      setrawData(res.data);
      setActualData([...res.data]);
    } catch (error) {
      console.log(error);
    }
  };

  // // set search value.
  const setSearchvalue = useCallback((value) => {
    setsearchText(value);
  }, []);

  useEffect(() => {
    try {
      setisloading(true)
      if (deboucedValue != "") {
        let results = [];
        actualData.filter((item) => {
          if (
            item.name
              .toLocaleLowerCase()
              .includes(deboucedValue.toLocaleLowerCase())
          ) {
            console.log(item.name);

            results.push(item);
          }

          return item;
        });

        // setrawData([...results]);

        setOptions(results.length > 0 ?  handleSearchResults(results) :  [{
          value: 0,
          label: 'Not Found',
          disabled: true
        }])

      } else {
       
        setOptions([])
      }
    } catch (error) {
      
      console.log(error);
    } finally {
      setisloading(false)
    }
  }, [deboucedValue]);

 

  useEffect(() => {
    getListData("/Data/Data.json");
  }, []);


  return (
    <div className="search-container">
      <AutoComplete
      dropdownMatchSelectWidth={352}
      style={{
        width: 300,
      }}

      // filterOption={(input, option) => {
      //   console.log(option)
      //   return input
      // }

      filterOption={(input,option) => { 
        console.log('filter',option?.label)
        return option?.label
      }}
      value={searchText}
      options={options}
      onSelect={onSelect}
      onSearch={handleSearch}
    >
      <Input.Search loading={isloading }  size="large" placeholder="Search by companies name" enterButton />
    </AutoComplete>
    </div>
  )
  // return (
  //   <div className="search-container">
  //     {/* <div className="category-container">
  //             <div className="d-flex align-items-center">
  //                 <CategorySvg style={{ fontSize: 10 }}/>
  //                 <span className="mx-2">Category</span>
  //                 <BiCaretDown className="mt-1"/>
  //             </div>
  //           </div> */}
  //     <div className="search-box d-flex pl-5">
  //       <span className="search-icon">
  //         <BsSearch />
  //       </span>
  //       <div
  //         style={{
  //           width: "100%"
  //         }}
  //       >
  //         <GooglePlacesAutocomplete
  //           apiKey={`${GOOGLE_MAP_API_KEY}`}
  //           selectProps={{
  //             placeholder: "Search",
  //             value,
  //             onChange: setValue,
  //             onSelect: handleSelect(value),
  //           }}
  //         />
  //       </div>
  //       <input className="ml-2" type="submit" value="Search" />
  //     </div>
  //   </div>
  // );
};

export default SearchComponent;
