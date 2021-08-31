import OpeningDays from "./OpeningDays"

const HoursComponent = () => {

  const Days = ["Monday", "Tuesday", "Wednesday", "Thunday", "Friday", "Saturday", "Sunday"]
  
    return (
        <div className="addForm container-fluid">
        <div>
          <h5>Business Opening Hours</h5>
         <p> Input field with <code>*</code> on lable means field is required.</p>
          <p>Example: 08.00am - 5.00pm or 08.00 - 17.00</p>
        </div>
        <div className=" mt-3">
          <div className="wokingHours">
         
           {
             Days.map((day, i) => (
               <OpeningDays key={i} days={day} />
             ))
           }
          </div>
          {/* <div className="col-lg-6 col-md-12 col-sm-12">
          
           
          </div> */}
        </div>
  
     
  
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
    )
}

export default HoursComponent
