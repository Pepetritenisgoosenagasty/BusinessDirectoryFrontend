import { DashboardCustomCard } from "@/components/CardComponent"
import { DashboardFooter } from "@/components/DashboardFooter"
import { Link } from "@material-ui/core"
import { motion } from "framer-motion"
import { BiArrowBack } from "react-icons/bi"
import { useRouter } from "next/router"
import AboutContent from "../../components/AboutComponent"
import ContactComponents from "../../components/ContactComponents"
import GalleryComponent from "../../components/GalleryComponent"
import SocialComponent from "../../components/SocialComponent"
import HoursComponent from "../../components/HoursComponent"
import { Button, message, Form } from "antd"

const Edit = () => {

    const router = useRouter();
    return (
        <>
        <div className="dashboard container-fluid content py-5">
          <div className="row dashboard__text  px-5 py-3">
            <div>
              <h5>Edit Business</h5>
            </div>
        
            <div className="addBtn">
              <Link href="">
                <motion.button
                  whileHover={{
                    scale: 1.1,
                    textShadow: "0px 0px 4px gray",
                  }}

                  onClick={() => router.back()}
                >
                 <BiArrowBack />  Go Back
                </motion.button>
              </Link>
            </div>
          </div>
          <Form>

          <div className="row px-4">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <DashboardCustomCard>
                  <div className="px-3 py-3">
                   <AboutContent />
                  </div>
              </DashboardCustomCard>
            </div>
          </div>
          <div className="row px-4 mt-4">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <DashboardCustomCard>
              <div className="px-3 py-3">
                   <ContactComponents />
                  </div>
              </DashboardCustomCard>
            </div>
          </div>
          <div className="row px-4 mt-4">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <DashboardCustomCard>
              <div className="px-3 py-3">
                   <GalleryComponent />
                  </div>
              </DashboardCustomCard>
            </div>
          </div>
          <div className="row px-4 mt-4">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <DashboardCustomCard>
              <div className="px-3 py-3">
                   <SocialComponent />
                  </div>
              </DashboardCustomCard>
            </div>
          </div>
          <div className="row px-4 mt-4">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <DashboardCustomCard>
              <div className="px-3 py-3">
                   <HoursComponent />
                  </div>
              </DashboardCustomCard>
            </div>
          </div>
          <div className="row px-4 mt-4">
            <div className="col-lg-7 mx-auto col-md-12 col-sm-12">
            <Button
                  htmlType="submit"
                  style={{ background: '#379634 ', width: '100%', height: 50, borderRadius: 50, fontSize: '.8rem'}}
                  type="primary"
                  onClick={() => message.success("Processing complete!")}
                  >
                  Update
                </Button>
            </div>
          </div>
          </Form>
        </div>
        <DashboardFooter />
      </>
    )
}

export default Edit
