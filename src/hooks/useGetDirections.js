import useSWR from 'swr'
import axios from 'axios'

const fetcher = url => axios.get(url).then(res => res.data)

export function useGetDirections ({ originId, destinationId }) {
    const { data, error } = useSWR(`http://localhost:3000/api/directions?originId=${originId}&destinationId=${destinationId}`, fetcher)
    return {
      data: data?.routes[0]?.legs[0],
      isLoading: !error && !data,
      isError: error
    }
  }
