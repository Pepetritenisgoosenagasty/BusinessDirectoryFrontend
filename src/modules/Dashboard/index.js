import { DashboardCustomCard } from "@/components/CardComponent";
import { DashboardFooter } from "@/components/DashboardFooter";
import { Link } from "@material-ui/core";
import { RiAddLine } from "react-icons/ri";
import { motion } from "framer-motion";
import { ADD_BUSINESS } from "@/constants/routes";

const index = () => {
  return (
    <>
      <div className="dashboard container-fluid content py-5">
        <div className="row dashboard__text  px-5 py-3">
          <div>
            <h5>Dashboard</h5>
            <p>Welcome to Business Directory Dashboard</p>
          </div>
          <div className="addBtn">
            <Link href={ADD_BUSINESS}>
              <motion.button
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "#004ca894",
                }}
                transition={{ duration: 0.5, yoyo: Infinity }}
              >
                <RiAddLine /> Add New Business
              </motion.button>
            </Link>
          </div>
        </div>
        <div className="row px-4">
          <div className="col-lg-4 col-md-12 col-sm-12">
            <DashboardCustomCard></DashboardCustomCard>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12">
            <DashboardCustomCard></DashboardCustomCard>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12">
            <div className="row">
              <div className="col-12">
                <DashboardCustomCard></DashboardCustomCard>
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
            <DashboardCustomCard></DashboardCustomCard>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12">
            <DashboardCustomCard></DashboardCustomCard>
          </div>
        </div>
      </div>
      <DashboardFooter />
    </>
  );
};

export default index;
