import { useEffect, useState } from "react";
import Slider from "react-slick";
import { SRLWrapper } from "simple-react-lightbox";

const CustomPagingSlider = (props) => {
const [imageData, setimageData] = useState()

// useEffect(() => {
//   setimageData(props?.galleries)
// }, [props?.galleries])

// console.log(imageData)
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
            props?.details?.galleries?.length > 0 && props?.details?.galleries?.map((photo, i) => (
              // <img  src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${photo?.photo_reference}&key=${API_KEY}`} />
              <>
              <img
                height="400px"
                key={i}
                src={photo.url}
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