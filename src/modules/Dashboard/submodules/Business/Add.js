import { DashboardCustomCard } from "@/components/CardComponent";
import { DashboardFooter } from "@/components/DashboardFooter";
import { Steps, Button, message, Form } from "antd";
import { useCallback, useEffect, useState } from "react";
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
import { PAGE_BUSINESS, PAGE_EDIT_BUSINESS, PAGE_MSG, URL_ADD_BUSINESSES, URL_GET_BUSINESS } from "@/constants/routes";
import { useDispatch } from "react-redux";
import { performCreate } from "src/redux/actions/apiActionCreators";
import { useRouter } from "next/router";
import { userData } from "src/hooks/useLoggInUser";
import { nanoid } from "nanoid";
import useGetEntity from "src/hooks/useGetEntity";
import authServices from "src/services/auth.services";
import StepWizard from "react-step-wizard";



const Add = () => {
  const { Step } = Steps;
  const [form] = Form.useForm();
  const [description, setDescription] = useState('')

const router = useRouter();
  let inputData = form;

  const [images, setImages] = useState([])
  let { query:{id} } = router;

  const [isloadingSubmit, setIsloadingSubmit] = useState(false);

  const dispatch = useDispatch();

  const { user } = userData(id);

  const useLocation = useGetUserLocation();

  useEffect(() => {
    form.setFieldsValue({
      lat: useLocation?.lat,
      lng: useLocation?.lng,
    })
    
   }, [useLocation])

  const onFinish = (values) => {
    try {
      values['description'] = description
      
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
          
          if (data) {
           

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
      new_formdata.append("ref", "business");
      new_formdata.append("refId", data_id);
      new_formdata.append("field", "galleries");

      setIsloadingSubmit(true);
      authServices
        .requestUPLOAD("upload", new_formdata)
        .then((res) => {
          router.push(PAGE_MSG);
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


  

  const handleUpload = (data) => {

    console.log(data)
    setImages([...data])
  }



  return (
    <>
      <div className="container-fluid content py-5">
        <div className="row px-3 mb-5">
         <div className="col-12">
         <DashboardCustomCard>
            <div className="px-3  py-3 d-flex justify-content-between">
              <div className="row dashboard__text container-fluid ">
                <div>
                  <h6 className="m-0">Add New Business</h6>
                </div>

                <div className="addBtn">
                  <motion.button
                    whileHover={{
                      scale: 1.1,
                      textShadow: "0px 0px 4px gray",
                    }}
                    onClick={() => router.back()}
                  >
                    <BiArrowBack /> Go Back
                  </motion.button>
                </div>
              </div>
            </div>
          </DashboardCustomCard>
         </div>
        </div>
        <Form form={form} onFinish={onFinish}>
          <div className="row">
            {/* <StepForm  steps={steps}/> */}
           <div className="col-12">
           <StepWizard>
              <AboutContent description={description}
setDescription={setDescription} />
              <ContactComponents inputData={inputData} useLocation={useLocation}/>
              <SocialComponent />
              <HoursComponent />
              <GalleryComponent isloadingSubmit={isloadingSubmit} handleUpload={handleUpload} />
           </StepWizard>
           </div>
          </div>
        </Form>
      </div>
      <DashboardFooter />
    </>
  );
};

export default Add;
