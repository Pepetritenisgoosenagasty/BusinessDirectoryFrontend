import { DashboardCustomCard } from "@/components/CardComponent";
import { DashboardFooter } from "@/components/DashboardFooter";
import { Steps, Button, message, Form } from "antd";
import { useState } from "react";
import AboutContent from "../../components/AboutComponent";
import ContactComponents from "../../components/ContactComponents";
import GalleryComponent from "../../components/GalleryComponent";
import HoursComponent from "../../components/HoursComponent";
import SocialComponent from "../../components/SocialComponent";
import StepForm from "../StepForm";


const Add = () => {
  const { Step } = Steps;
  const [form] = Form.useForm();

  let inputData = form;


  
  
  const steps = [
    {
      key: 1,
      title: "About Business",
      content: <AboutContent />
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
   console.log(values)
  }


  return (
    <>
      <div className="container-fluid content py-5">
     <Form form={form}  onFinish={handleFinish}>
        <div className="row">
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
