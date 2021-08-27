import { DashboardCustomCard } from "@/components/CardComponent"
import { DashboardFooter } from "@/components/DashboardFooter"
import { motion } from "framer-motion"
import { BiArrowBack } from "react-icons/bi"
import { useRouter } from "next/router"
import ReviewTable from "./Components/ReviewTable"

const index = () => {
    const router = useRouter();

    return (
        <>
        <div className="dashboard container-fluid content py-5">
          <div className="row dashboard__text  px-5 py-3">
            <div>
              <h5>Reviews</h5>
            </div>
        
            <div className="addBtn">
             
                <motion.button
                  whileHover={{
                    scale: 1.1,
                    textShadow: "0px 0px 4px gray",
                  }}

                  onClick={() => router.back()}
                >
                 <BiArrowBack />  Go Back
                </motion.button>
              
            </div>
          </div>
 

          <div className="row px-4">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <DashboardCustomCard>
                  <div className="pt-2">
                    <ReviewTable />
                  </div>
              </DashboardCustomCard>
            </div>
          </div>
        
       
          </div>
        <DashboardFooter />
      </>
    )
}

export default index
