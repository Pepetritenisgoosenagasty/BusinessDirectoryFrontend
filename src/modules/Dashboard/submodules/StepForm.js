import { DashboardCustomCard } from "@/components/CardComponent";
import { Button, Form, Steps, message } from "antd";
import React, { useState } from "react";
import { motion } from "framer-motion";

import { FiChevronLeft } from "react-icons/fi";
import { BiArrowBack } from "react-icons/bi";
import { useRouter } from "next/router";

const { Step } = Steps;

export default function StepForm(props) {
  const [current, setCurrent] = useState(0);

  const router = useRouter();

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  
  const renderContent = () => {
    try {
      return props.steps[current].content
      
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="container-fluid">
         <div className="row">
          <div className="col-12">
            <DashboardCustomCard>
              <Steps current={current} className="px-3 py-3 d-none">
                {/* {steps.map((item) => (
                  <Step key={item.title} title={item.title} />
                ))} */}
                {props.steps.map((item,i) => (
            <div
              key={i}
          className={`steps-content ${
            item.step !== current + 1 && "hidden"
          }`}
        >
          {item.content}
        </div>
      ))}
              </Steps>
            </DashboardCustomCard>

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

            <DashboardCustomCard>
            <div className="steps-content px-3 py-3 mt-3">
            {renderContent()}
            </div>
            </DashboardCustomCard>
            <div className="steps-action mt-4 d-flex justify-content-between">
              
             <div>
             {current > 0 && (
                 <Button className="previous-btn" type="primary" style={{ margin: "0 8px", background: '#004BA8', border: 'none', borderRadius: 30, width: 150 }} onClick={() => prev()}>
                  Previous
                </Button>
              )}
             </div>

              <div>
              {current < props.steps.length - 1 && (
                  <Button type="primary" className="next-btn" style={{ margin: "0 8px", background: '#004BA8', border: 'none', borderRadius: 30, width: 150 }} onClick={() => next()}>
                  Next
                </Button>
              )}
              {current === props.steps.length - 1 && (
                  <Button
                  htmlType="submit"
                  type="primary"
                   className="submit-btn"
                   style={{ margin: "0 8px", background: '#379634', border: 'none', borderRadius: 30, width: 150 }}
                  >
                  Submit
                </Button>
              )}
              </div>
            </div>
          </div>
        </div>
 
    </div>
  );
}
