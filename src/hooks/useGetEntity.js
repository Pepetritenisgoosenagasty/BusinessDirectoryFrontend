import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { performSelect } from "src/redux/actions/apiActionCreators";

import useSWR from 'swr'
import axios from 'axios'
import authServices from "src/services/auth.services";

const fetcher = url => authServices.requestGETBusiness(url).then(res => res.data)

export function useGetEntity (ApiUrl) {
  const [isloading, setIsloading] = useState(true);
  const [newData, setNewData] = useState([]);
  const [meta, setMeta] = useState({})
  // const { data, error } = useSWR(ApiUrl, fetcher)
   
  //   useEffect(() => {
  //     setNewData(data)
  //   }, [data])


    useEffect(() => {
      refetchEntity();
    }, [ApiUrl]);
  
    const refetchEntity = () => {
      try {
        if(ApiUrl){
         authServices.requestGETBusiness(ApiUrl)
         .then((res) => {
          setNewData(res.data?.data);
          setMeta(res.data?.meta);

        })
        .catch((err) => console.log(err))
        .finally((err) => setIsloading(false));
        }
      } catch (error) {
        console.log(error);
      }
    };


    return {
      data: newData,
      isLoading: isloading,
      refetchEntity,
      meta
    }
  }



