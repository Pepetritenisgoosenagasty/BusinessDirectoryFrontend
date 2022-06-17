import { useEffect, useState } from "react";
import Slider from "react-slick";
import { SRLWrapper } from "simple-react-lightbox";

const CustomPagingSlider = (props) => {
const [imageData, setimageData] = useState()

// useEffect(() => {
//   setimageData(props?.galleries)
// }, [props?.galleries])



// console.log(props)
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true
  };
    return (
         <div className="">
        <div>
          <SRLWrapper>
          
        <Slider {...settings}>
        {
            props?.details?.attributes?.galleries?.data?.map((photo, i) => (
              // <img  src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${photo?.photo_reference}&key=${API_KEY}`} />
              <>
              <img
              width="100%"
                height="400px"
                key={i}
                src={photo.attributes.url}
              />
            </>
            ))
          }
        </Slider>
                      </SRLWrapper>
      </div>
      </div>
    )
}

export default CustomPagingSlider