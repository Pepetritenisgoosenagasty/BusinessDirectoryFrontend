import axios from "axios"

export default async function handler(req, res){

    try {
           let {originId, destinationId} = req.query
    
    const response = await axios.get(
     `https://maps.googleapis.com/maps/api/directions/json?origin=${originId}&destination=${destinationId}&key=${process.env.googleApisKey}`)

     
     return res.status(200).json(response.data)
        
    } catch (error) {
        console.log("heading --- ")
        console.log(error)
    }
}