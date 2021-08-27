import useSWR from 'swr'
import authServices from "src/services/auth.services";
import { URL_LOGGEDIN_USER } from '@/constants/routes'

const fetcher = url => authServices.requestGET(url).then(res => res.data)

export function userData () {
    const { data, error } = useSWR(URL_LOGGEDIN_USER, fetcher)
  
    return {
      user: data,
      isLoading: !error && !data,
      isError: error
    }
  }
// URL_LOGGEDIN_USER