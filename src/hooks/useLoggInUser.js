import useSWR from 'swr'
import authServices from "src/services/auth.services";
import { URL_UPDATE_USER } from '@/constants/routes'
import { useSelector } from 'react-redux';


const fetcher = url => authServices.requestGET(url).then(res => res.data)

export function userData (id) {
  const { user } = useSelector((state) => state.auth);

    const { data, error } = useSWR(URL_UPDATE_USER + "/" + user?.id, fetcher)
  
    return {
      user: data,
      isLoading: !error && !data,
      isError: error
    }
  }
// URL_UPDATE_USER