import MapComponent from "@/components/Map";
import { useState } from "react";
import { DirectionsRenderer, DirectionsService } from "@react-google-maps/api";
import useGetUserLocation from "src/hooks/useGetUserLocation";
import { useRouter } from "next/router";
import { useGetPlaceDetails } from "src/hooks/useGetPlaceDetails";
import { useEffect } from "react";
import NavigationMenu from "@/components/NavigationMenu";
import { GetDirectionCard } from "./Components/GetDirectionCard";
import { Spin } from 'antd';
import { Spinner } from "@/components/Spinner";
import { Results } from "@/components/Result";
import { PAGE_HOME } from "@/constants/routes";

const index = () => {
  const [directions, setDirections] = useState({});
  const [travelMode, setTravelMode] = useState("DRIVING");
  const [origin, setOrigin] = useState({});
  const [destination, setDestination] = useState({});
  const [directionResponse, setDirectionResponse] = useState(null);
  const API_KEY = process.env.googleApisKey;

  const router = useRouter();

  const useLocation = useGetUserLocation();

  const { data, isLoading, isError } = useGetPlaceDetails({
    place_id: router.query.id,
    apiKey: `${API_KEY}`,
  });

  useEffect(() => {
    setDestination({ ...data?.geometry?.location });
  }, [data?.geometry?.location]);

  useEffect(() => {
    setDirections({ ...data });
  }, [data]);

  useEffect(() => {
    setOrigin({ ...useLocation });
  }, [useLocation]);

  const directionsCallback = (value) => {
    setDirectionResponse(value);
  };

  if (isLoading) return <Spinner />;
  if (isError) return  <Results status="500" title="500" subTitle="Sorry, something went wrong." url={PAGE_HOME}/>;
  return (
    <div>
      <NavigationMenu directory />
      <section style={{ height: "100vh", marginTop: 70 }}>
        <div className="">
          <GetDirectionCard directions={directions} origin={origin} />
        </div>
        <MapComponent
          centerPin={origin}
          apiKey={`${API_KEY}`}
        >
          <>
            <DirectionsRenderer
              options={{
                directions: directionResponse,
              }}
            />

            <DirectionsService
              // required
              options={{
                destination: destination,
                origin: origin,
                travelMode: travelMode,
              }}
              // required
              callback={directionsCallback}
            />
          </>
        </MapComponent>
      </section>
    </div>
  );
};

export default index;
