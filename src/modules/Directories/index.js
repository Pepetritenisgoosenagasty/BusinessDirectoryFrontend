import NavigationMenu from "@/components/NavigationMenu";
import axios from "axios";
import { useCallback, useEffect, useMemo, useState } from "react";
import BusinessList from "./components/BusinessList";
import MapContent from "./components/MapContent";
import { useDebounce } from "use-debounce";

const index = () => {
  const [currentIndex, setcurrentIndex] = useState(2);
  const [searchText, setsearchText] = useState("");

  const [deboucedValue] = useDebounce(searchText, 500);
  const [businessList, setBusinessList] = useState([]);
  const [rawData, setrawData] = useState([]);

  //contains actual data from api.
  const [actualData, setActualData] = useState([]);

  //
  const [pageSize, setpageSize] = useState(20);
  const [currentPage, setcurrentPage] = useState(1);
  const [currentOffset, setCurrentOffset] = useState(20);

  const onPageChange = (current, size) => {
    setcurrentPage(current);
  };

  const handleCenterChange = (cord) => {
    console.log(cord);
  };

  const getListData = async (url) => {
    try {
      const res = await axios.get(url);

      // do map change filter here
      setrawData(res.data);
      setActualData([...res.data]);
    } catch (error) {
      console.log(error);
    }
  };

  // set search value.
  const setSearchvalue = useCallback((value) => {
    setsearchText(value);
    console.log(value);
  }, []);

  useEffect(() => {
    try {
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

        setcurrentPage(1);
        setrawData([...results]);

        console.log(results);
      } else {
        setcurrentPage(1);
        setrawData([...actualData]);
      }
    } catch (error) {
      console.log(error);
    }
  }, [deboucedValue]);

  // const handleSearchList = (value) => {

  // }
  useEffect(() => {
    let result = rawData.slice(
      currentOffset * currentPage - currentOffset,
      currentOffset * currentPage
    );
    setBusinessList([...result]);
  }, [rawData, currentPage]);

  useEffect(() => {
    getListData("/Data/Data.json");
  }, []);
  const callIndex = useCallback((index) => setcurrentIndex(index), 0);

  const handleIndex = (index) => {
    console.log(index);
    setcurrentIndex(index);
  };
  return (
    <div>
      <NavigationMenu directory />
      <main className="directory">
        <div className="directory-list">
          <BusinessList
            currentPage={currentPage}
            onPageChange={onPageChange}
            list={rawData}
            pageSize={pageSize}
            businessList={businessList}
            handleIndex={callIndex}
            setSearchvalue={setSearchvalue}
          />
        </div>
        <div className="directory-map">
          <MapContent
            handleCenterChange={handleCenterChange}
            businessList={businessList}
            currentIndex={currentIndex}
          />
        </div>
      </main>
    </div>
  );
};

export default index;
