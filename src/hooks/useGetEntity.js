import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { performSelect } from "src/redux/actions/apiActionCreators";

import useSWR from 'swr'
import axios from 'axios'

const fetcher = url => axios.get(url).then(res => res.data)

export function useGetEntity (ApiUrl) {
    const { data, error } = useSWR(`${ApiUrl}`, fetcher)
  
    useEffect(() => {
      refetchEntity();
    }, [ApiUrl]);
  
    const refetchEntity = () => {
      try {
        if(ApiUrl){
          setIsloading(true);
          performSelect(ApiUrl)
            .then((data) => {
              setData({ ...data });
            })
            .catch((err) => console.log(err))
            .finally((err) => setIsloading(false));
        }
      } catch (error) {
        console.log(error);
      }
    };

    return {
      details: data,
      isLoading: !error && !data,
      refetchEntity: refetchEntity,
      isError: error
    }
  }



