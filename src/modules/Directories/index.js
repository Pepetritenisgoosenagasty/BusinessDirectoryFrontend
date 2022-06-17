import NavigationMenu from "@/components/NavigationMenu";
import axios from "axios";
import { useCallback, useEffect, useMemo, useState } from "react";
import BusinessList from "./components/BusinessList";
import MapContent from "./components/MapContent";
import { useDebounce } from "use-debounce";
import useSWR from 'swr'
import { useGetEntity } from "src/hooks/useGetEntity";
import { URL_GET_BUSINESS } from "@/constants/routes";
import authServices from "src/services/auth.services";
import qs from "qs"

const index = () => {
  const [currentIndex, setcurrentIndex] = useState(2);
  const [searchText, setsearchText] = useState("");

  const [rawData, setrawData] = useState([]);

  //
  const [pageSize, setpageSize] = useState(10);
  const [currentPage, setcurrentPage] = useState(1);



  const handleCenterChange = (cord) => {
    console.log(cord);
  };

   const query = qs.stringify(
    {
      pagination: {
        page: currentPage,
        pageSize: pageSize,
      },
      populate: '*',
    },
    {
      encodeValuesOnly: true,
    },
  )

  const { data, meta } = useGetEntity(URL_GET_BUSINESS + `?${query}`)

  // set search value.
  const setSearchvalue = useCallback((value) => {
    setsearchText(value);
  }, []);


   useMemo(() => {
    ;(async () => {
      const results = await data.filter((p) =>
        p.attributes.name.toLowerCase().includes(searchText.toLowerCase()),
      )
      setrawData([...results])
      setcurrentPage(1)
    })()
  }, [searchText, data])



  const callIndex = useCallback((index) => setcurrentIndex(index), 0);


  return (
    <div>
      <NavigationMenu directory />
      <main className="directory">
        <div className="directory-list">
          <BusinessList
            currentPage={currentPage}
            list={meta}
            pageSize={pageSize}
            businessList={rawData}
            handleIndex={callIndex}
            setSearchvalue={setSearchvalue}
            setcurrentPage={setcurrentPage}
          />
        </div>
        <div className="directory-map">
          <MapContent
            handleCenterChange={handleCenterChange}
            businessList={rawData}
            currentIndex={currentIndex}
          />
        </div>
      </main>
    </div>
  );
};

export default index;