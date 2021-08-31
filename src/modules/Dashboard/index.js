import { DashboardCustomCard } from "@/components/CardComponent";
import { DashboardFooter } from "@/components/DashboardFooter";


const index = () => {
 
  return (
    <>
    <div className="dashboard container-fluid content mb-5">
      <div className="row dashboard__text d-block px-5 py-3"> 
        <h5>Dashboard</h5>
        <p>Welcome to Business Directory Dashboard</p>
      </div>
      <div className="row px-4">
          <div className="col-lg-4 col-md-12 col-sm-12">
           <DashboardCustomCard >
        
           </DashboardCustomCard>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12">
          <DashboardCustomCard >
        
        </DashboardCustomCard>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12">
            <div className="row">
              <div className="col-12">
              <DashboardCustomCard >
        
              </DashboardCustomCard>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
              {/* <DashboardCustomCard >
        
      </DashboardCustomCard> */}
              </div>
            </div>
          </div>
      </div>
      <div className="row px-4 mt-4">
       <div className="col-lg-8 col-md-12 col-sm-12">
       <DashboardCustomCard >
        
        </DashboardCustomCard>
       </div>
       <div className="col-lg-4 col-md-12 col-sm-12">
       <DashboardCustomCard >
        
        </DashboardCustomCard>
       </div>
      </div>
  
     
    </div>
      <DashboardFooter />
      </>
  );
};

export default index;
