import useSWR from 'swr'
import axios from 'axios'

const fetcher = url => axios.get(url).then(res => res.data)

export function useGetPhotos (photo_reference) {
    const { data, error } = useSWR(`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${photo_reference}&key=${process.env.googleApisKey}`, fetcher)
  
    return {
      photoData: data,
      isLoading: !error && !data,
      isError: error
    }
  }






