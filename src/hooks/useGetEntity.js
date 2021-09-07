import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { performSelect } from "src/redux/actions/apiActionCreators";

export default function useGetEntity({ url }) {
  const [isloading, setIsloading] = useState(true);
  const [data, setData] = useState({});

  const dispatch = useDispatch();
  
  useEffect(() => {
    refetchEntity();
  }, [url]);

  const refetchEntity = () => {
    try {
      if(url){
        setIsloading(true);
        performSelect(url)
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
    loading: isloading,
    refetchEntity: refetchEntity,
    data,
  };
}
