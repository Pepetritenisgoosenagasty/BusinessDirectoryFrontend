import { DashboardCustomCard } from "@/components/CardComponent";
import { DashboardFooter } from "@/components/DashboardFooter";
import { Steps, Button, message, Form } from "antd";
import { useState } from "react";
import AboutContent from "../../components/AboutComponent";
import ContactComponents from "../../components/ContactComponents";
import GalleryComponent from "../../components/GalleryComponent";
import HoursComponent from "../../components/HoursComponent";
import SocialComponent from "../../components/SocialComponent";

const { Step } = Steps;

const steps = [
  {
    title: "About Business",
    content: <AboutContent />
  },
  {
    title: "Business Contact",
    content: <ContactComponents />,
  },
  {
    title: "Gallery",
    content: <GalleryComponent />,
  },
  {
    title: "Social Media Handles",
    content: <SocialComponent />,
  },
  {
    title: "Opening Hours",
    content: <HoursComponent />,
  },
];

const Add = () => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  return (
    <>
      <div className="container-fluid content py-5">
        <div className="row">
          <div className="col-12">
            <DashboardCustomCard>
              <Steps current={current} className="px-3 py-3">
                {steps.map((item) => (
                  <Step key={item.title} title={item.title} />
                ))}
              </Steps>
            </DashboardCustomCard>

            <DashboardCustomCard>
            <div className="steps-content px-3 py-3 mt-3">
            <Form name="control-hooks" onFinish="">
                {steps[current].content}
            </Form>
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
          </div>
        </div>
      </div>
      <DashboardFooter />
    </>
  );
};

export default Add;
