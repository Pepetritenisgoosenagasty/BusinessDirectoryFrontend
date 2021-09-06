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

const Add = () => {
  const { Step } = Steps;
  const [form] = Form.useForm();

  let inputData = form;

  const steps = [
    {
      key: 1,
      title: "About Business",
      content: <AboutContent />,
    },
    {
      key: 2,
      title: "Business Contact",
      content: <ContactComponents inputData={inputData} />,
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
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const handleFinish = (values) => {
    console.log(values);
  };

  const useLocation = useGetUserLocation();



  return (
    <>
      <div className="container-fluid content py-5">
        <div className="row dashboard__text container-fluid   py-3">
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
        </div>
        <Form form={form} onFinish={handleFinish}>
          <div className="row">
            <div className="col-12">
              <DashboardCustomCard>
                <div className="p-3">
                  <AboutContent />
                </div>
              </DashboardCustomCard>
            </div>
            <div className="col-12 mt-3">
              <DashboardCustomCard>
                <div className="p-3">
                  <ContactComponents inputData={inputData} useLocation={useLocation}/>
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
                style={{
                  background: "#379634",
                  height: 50,
                  width: "100%",
                  borderRadius: 50,
                }}
                type="primary"
                onClick={() => message.success("Processing complete!")}
                htmlType="submit"
              >
                Submit
              </Button>
            </div>

            {/* <StepForm  steps={steps}/> */}
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
