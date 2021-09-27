import { DashboardCustomCard } from "@/components/CardComponent";
import { DashboardFooter } from "@/components/DashboardFooter";
import { Steps, Button, message, Form } from "antd";
import { useCallback, useState } from "react";
import AboutContent from "../../components/AboutComponent";
import ContactComponents from "../../components/ContactComponents";
import GalleryComponent from "../../components/GalleryComponent";
import HoursComponent from "../../components/HoursComponent";
import SocialComponent from "../../components/SocialComponent";
import { motion } from "framer-motion";
import { BiArrowBack } from "react-icons/bi";
import StepForm from "../StepForm";
import { Marker } from "@react-google-maps/api";
import useGetUserLocation from "src/hooks/useGetUserLocation";
import { PAGE_BUSINESS, PAGE_EDIT_BUSINESS, URL_ADD_BUSINESSES, URL_GET_BUSINESS } from "@/constants/routes";
import { useDispatch } from "react-redux";
import { performCreate } from "src/redux/actions/apiActionCreators";
import { useRouter } from "next/router";
import { userData } from "src/hooks/useLoggInUser";
import { nanoid } from "nanoid";
import useGetEntity from "src/hooks/useGetEntity";
import authServices from "src/services/auth.services";


const Add = () => {
  const { Step } = Steps;
  const [form] = Form.useForm();

  let inputData = form;

  const [images, setImages] = useState([])


  const [isloadingSubmit, setIsloadingSubmit] = useState(false);

  const dispatch = useDispatch();

  const { user } = userData();

  const onFinish = (values) => {
    try {
      setIsloadingSubmit(true);
      dispatch(
        performCreate(URL_ADD_BUSINESSES, {
          ...values,
          user_id: user?.id,
          geometry: {
            lat: values.lat,
            lng: values.lng,
          },
          working_hours: {
            Mondays: values.Monday,
            Tuesdays: values.Tuesday,
            Wednesdays: values.Wednesday,
            Thursdays: values.Thursday,
            Fridays: values.Friday,
            Saturdays: values.Saturday,
            Sunday: values.Sunday,
          },
          social_media_handles: {
            linkedIn: values.linkedin,
            facebook: values.facebook,
            twitter:  values.twitter,
            youtube: values.youtube,
          },
          place_id: nanoid(50),
          published_at: null
        })
      )
        .then((data) => {
          
          if (data == true || data.length > 0) {
           
            // router.push(PAGE_BUSINESS);

            // console.log(data)
            uploadProfileImage(data)
          }
        })
        // .finally(() => {
        //   setIsloadingSubmit(false);
        // });
    } catch (error) {
      console.log(error);
    }
  };



  const uploadProfileImage = (data) => {
    try {
      let data_id = data?.id;

      let new_formdata = new FormData();

      images.forEach(({ originFileObj }) => new_formdata.append(`files`, originFileObj, originFileObj.name))

      // new_formdata.append("files", fileObject);
      new_formdata.append("ref", "businesses");
      new_formdata.append("refId", data_id);
      new_formdata.append("field", "galleries");
      // new_formdata.append("source", "users-permissions");

      setIsloadingSubmit(true);
      authServices
        .requestPOST("upload", new_formdata)
        .then((res) => {
          console.log(res.data)
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setIsloadingSubmit(false);
        });
    } catch (error) {
      console.log(error);
    }
  };


  const useLocation = useGetUserLocation();

  const handleUpload = (data) => {
    
  }

  
  const steps = [
    {
      key: 1,
      title: "About Business",
      content: <AboutContent />,
    },
    {
      key: 2,
      title: "Business Contact",
      content:  <ContactComponents inputData={inputData} useLocation={useLocation}
    />,
    },
    {
      key: 3,
      title: "Social Media Handles",
      content: <SocialComponent />,
    },
    {
      key: 4,
      title: "Opening Hours",
      content: <HoursComponent />,
    },
    {
      key: 5,
      title: "Gallery",
      content: <GalleryComponent handleUpload={handleUpload} />,
    }
  ];


  return (
    <>
      <div className="container-fluid content py-5">
        <Form form={form} onFinish={onFinish}>
          <div className="row">
            <StepForm  steps={steps}/>
          </div>
        </Form>
      </div>
      <DashboardFooter />
    </>
  );
};

export default Add;
