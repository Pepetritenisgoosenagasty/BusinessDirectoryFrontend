import axios from "axios"

export default async function handler(req, res){

    try {
           let {place_id, key} = req.query
    
    const response = await axios.get(
     `https://maps.googleapis.com/maps/api/place/details/json?place_id=${place_id}&key=${key}`)

     
     return res.status(200).json(response.data)
        
    } catch (error) {
        console.log("heading --- ")
        console.log(error)
    }
}