import useSWR from 'swr'
import axios from 'axios'

const fetcher = url => axios.get(url).then(res => res.data)

export function useCategories () {
    const { data, error } = useSWR(`/Data/Data.json`, fetcher)
  
    return {
      details: data,
      isLoading: !error && !data,
      isError: error
    }
  }