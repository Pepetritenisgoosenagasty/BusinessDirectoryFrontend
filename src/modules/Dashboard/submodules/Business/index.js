import { DashboardCustomCard } from "@/components/CardComponent"
import { DashboardFooter } from "@/components/DashboardFooter"
import { motion } from "framer-motion"
import { BiArrowBack, BiPlus } from "react-icons/bi"
import { useRouter } from "next/router"
import BusinessList from "./components/BusinessList"
import { PAGE_ADD_BUSINESS } from "@/constants/routes"
import Link from "next/link"

const index = () => {
    const router = useRouter();

    return (
        <>
        <div className="dashboard container-fluid content py-5">
       <div className="row px-4 mb-5">
           <div className="col-lg-12">
           <DashboardCustomCard>
                  
                  <div className="row dashboard__text  px-5 py-3">
                    <div>
                      <h6 className="m-0">My Business Listing</h6>
                    </div>
                    <div className="addBtn">
                     <Link href={PAGE_ADD_BUSINESS}>
                        <motion.button
                          whileHover={{
                            scale: 1.1,
                            textShadow: "0px 0px 4px gray",
                          }}
      
                        >
                         <BiPlus />  Add Business
                        </motion.button>
                     
                     </Link>
                      
                    </div>
                  </div>
                      </DashboardCustomCard>
           </div>

       </div>
 

          <div className="row px-4">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <DashboardCustomCard>
                  <div className="px-3 py-3">
                   <BusinessList />
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
