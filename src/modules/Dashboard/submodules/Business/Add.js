import { DashboardCustomCard } from "@/components/CardComponent";
import { DashboardFooter } from "@/components/DashboardFooter";
import { Steps, Button, message, Form } from "antd";
import { useState } from "react";
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
import { PAGE_EDIT_BUSINESS, URL_ADD_BUSINESSES, URL_GET_BUSINESS } from "@/constants/routes";
import { useDispatch } from "react-redux";
import { performCreate } from "src/redux/actions/apiActionCreators";
import { useRouter } from "next/router";
import { userData } from "src/hooks/useLoggInUser";
import { nanoid } from "nanoid";
import useGetEntity from "src/hooks/useGetEntity";


const Add = () => {
  const { Step } = Steps;
  const [form] = Form.useForm();

  let inputData = form;



  const [isloadingSubmit, setIsloadingSubmit] = useState(false);

  const dispatch = useDispatch();

  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const { user, isLoading, isError } = userData();

  const router = useRouter()

  let url = URL_GET_BUSINESS + `?_where[user_id]=${user?.id}`;

  // const object = useGetEntity({
  //   url: url,
  // });

  // console.log(object?.data?.id)


    // if(!_.isEmpty(data)){
    //   form.resetFields()
    //   router.push(PAGE_EDIT_PROJECT+'/'+data.id);
     
    // }



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
            youtube: values.youtube
          },
          place_id: nanoid(50),
        })
      )
        .then((data) => {
          
          if (data == true || data.length > 0) {
            form.resetFields();
            router.push(PAGE_EDIT_BUSINESS+'/'+user?.id);

            console.log(data)
          }
        })
        .finally(() => {
          setIsloadingSubmit(false);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const useLocation = useGetUserLocation();

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
      title: "Gallery",
      content: <GalleryComponent />,
    },
    {
      key: 4,
      title: "Social Media Handles",
      content: <SocialComponent />,
    },
    {
      key: 5,
      title: "Opening Hours",
      content: <HoursComponent />,
    },
  ];


  return (
    <>
      <div className="container-fluid content py-5">
        {/* <div className="row dashboard__text container-fluid   py-3">
          <div>
            <h5>Add New Business</h5>
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
        </div> */}
        <Form form={form} onFinish={onFinish}>
          <div className="row">
            {/* <div className="col-12">
              <DashboardCustomCard>
                <div className="p-3">
                  <AboutContent />
                </div>
              </DashboardCustomCard>
            </div>
            <div className="col-12 mt-3">
              <DashboardCustomCard>
                <div className="p-3">
                  <ContactComponents
                    inputData={inputData}
                    useLocation={useLocation}
                  />
                </div>
              </DashboardCustomCard>
            </div>
            <div className="col-12 mt-3">
              <DashboardCustomCard>
                <div className="p-3">
                  <GalleryComponent />
                </div>
              </DashboardCustomCard>
            </div>
            <div className="col-12 mt-3">
              <DashboardCustomCard>
                <div className="p-3">
                  <SocialComponent />
                </div>
              </DashboardCustomCard>
            </div>
            <div className="col-12 mt-3">
              <DashboardCustomCard>
                <div className="p-3">
                  <HoursComponent />
                </div>
              </DashboardCustomCard>
            </div>

            <div className="col-6 mx-auto mt-3">
              <Button
                loading={isloadingSubmit}
                className="submit-button"
                type="primary"
                onClick={() => message.success("Processing complete!")}
                htmlType="submit"
              >
                Submit
              </Button>
            </div> */}

            <StepForm  steps={steps}/>
            {/* <div className="col-12">
            <DashboardCustomCard>
              <Steps current={current} className="px-3 py-3">
                {steps.map((item) => (
                  <Step key={item.title} title={item.title} />
                ))}
              </Steps>
            </DashboardCustomCard>

            <DashboardCustomCard>
            <div className="steps-content px-3 py-3 mt-3">
                {steps[current].content}
            </div>
            </DashboardCustomCard>
            <div className="steps-action mt-4">
              
             <div>
             {current > 0 && (
                 <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
                  Previous
                </Button>
              )}
             </div>

              <div>
              {current < steps.length - 1 && (
                  <Button type="primary" onClick={() => next()}>
                  Next
                </Button>
              )}
              {current === steps.length - 1 && (
                  <Button
                  style={{ background: '#379634 '}}
                  type="primary"
                  onClick={() => message.success("Processing complete!")}
                  >
                  Submit
                </Button>
              )}
              </div>
            </div>
          </div> */}
          </div>
        </Form>
      </div>
      <DashboardFooter />
    </>
  );
};

export default Add;
