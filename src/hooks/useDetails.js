import useSWR from 'swr'
import authServices from 'src/services/auth.services'

const fetcher = url => authServices.requestGETBusiness(url)

export function useData (value) {
    const { data, error } = useSWR(value, fetcher)
  
    return {
      details: data?.data[0],
      isLoading: !error && !data,
      isError: error
    }
  }
