import { DashboardCustomCard } from "@/components/CardComponent";
import { useState } from "react";
import OpeningDays from "./OpeningDays";

const HoursComponent = (props) => {

  console.log(props)
  const Days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thunday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  return (
    <div className="addForm container-fluid">
      <DashboardCustomCard>
        <div className="px-4 py-4">
          <div>
            <h5>Business Opening Hours</h5>
            <p>
              {" "}
              Input field with <code>*</code> on lable means field is required.
            </p>
            <p>Example: 08.00am - 5.00pm or 08.00 - 17.00</p>
          </div>
          <div className=" mt-3">
            <div className="wokingHours">
              {Days.map((day, i) => (
                <OpeningDays key={i} days={day} data={props} />
              ))}
            </div>
            {/* <div className="col-lg-6 col-md-12 col-sm-12">
          
           
          </div> */}
          </div>
        </div>
      </DashboardCustomCard>
      {
         props.isActive && (      <div className="d-flex justify-content-between mt-3">
         <button style={{
              margin: "0 8px",
              background: "#fff",
              color: "#004ba8",
              border: "1px solid #004ba8",
              borderRadius: 30,
              width: 150,
              height: 40,
            }} htmlType="button" type="button" onClick={props.previousStep}>
          Previous
        </button>
        <button style={{
              margin: "0 8px",
              background: "#004ba8",
              color: "#fff",
              border: "none",
              borderRadius: 30,
              width: 150,
              height: 40,
            }} htmlType="button" type="button" onClick={props.nextStep}>
          Continue
        </button>
         </div>)
      }

      <style jsx>{`
        h5 {
          color: #000;
          font-size: 0.8rem;
          font-weight: 600;
        }

        label,
        p {
          font-size: 0.7rem;
          font-weight: 600;
        }
      `}</style>
    </div>
  );
};

export default HoursComponent;
