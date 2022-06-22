import useSWR from 'swr'
import axios from 'axios'

const fetcher = url => axios.get(url ).then(res => res.data)

export function useGetPlaceDetails ({ place_id, apiKey }) {
    const { data, error } = useSWR(`http://localhost:3000/api/places?place_id=${place_id}&key=${apiKey}`, fetcher)
  
    return {
      data: data?.result,
      isLoading: !error && !data,
      isError: error
    }
  }

