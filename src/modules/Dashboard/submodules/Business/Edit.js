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
import { useForm } from "antd/lib/form/Form";
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { performGetAll, performUpdate } from 'src/redux/actions/apiActionCreators';
import { URL_GET_BUSINESS,PAGE_BUSINESS } from '@/constants/routes';
import useGetUserLocation from "src/hooks/useGetUserLocation"

const Edit = () => {
  const [businessData, setBusinessData] = useState()
  const [isLoading, setisLoading] = useState(false)
  const dispatch = useDispatch()
    const router = useRouter();
    const [form] = useForm();

    let inputData = form;
    const useLocation = useGetUserLocation();
    let business_id = router.query.id;

    const fetchBusiness = async () => {
      const business = await  dispatch(performGetAll(URL_GET_BUSINESS + `?_where[id]=`+ business_id))
      setBusinessData(business[0])
    }

    useEffect(() => {
      if(business_id) {
        fetchBusiness()
      }
    }, [business_id])

    const handleOnFinish = (values) => {
      try {
        setisLoading(true);
        dispatch(performUpdate(URL_GET_BUSINESS + '/' + business_id, {
          ...values,
          geometry: {
            lat: values.lat,
            lng: values.lng,
          },
          working_hours: {
            Mondays: values.Monday,
            Tuesdays: values.Tuesday,
            Wednesdays: values.Wednesday,
            Thursdays: values.Thursday,
            Fridays: values.Friday,
            Saturdays: values.Saturday,
            Sunday: values.Sunday,
          },
          social_media_handles: {
            linkedIn: values.linkedin,
            facebook: values.facebook,
            twitter:  values.twitter,
            youtube: values.youtube,
          }
        })).finally(() => {
          setisLoading(false);
        })
      //   form.resetFields();
      } catch (error) {
        console.log(error);
      }
    }
   
    return (
        <>
        <div className="dashboard container-fluid content py-5">
          <div className="row px-4 mb-4">
           <div className="col-lg-12">
           <DashboardCustomCard>
          <div className="row dashboard__text  px-4 py-2">
            <div>
              <h6 className="m-0">Edit Business</h6>
            </div>
        
            <div className="addBtn">
              <Link href={PAGE_BUSINESS}>
                <motion.button
                  whileHover={{
                    scale: 1.1,
                    textShadow: "0px 0px 4px gray",
                  }}

                 
                >
                 <BiArrowBack />  Go Back
                </motion.button>
              </Link>
            </div>
          </div>

          </DashboardCustomCard>
           </div>
          </div>
          <Form name="basic" form={form} onFinish={handleOnFinish}>

          <div className="row px-4">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <DashboardCustomCard>
                  <div className="px-3 py-3">
                   <AboutContent businessData={businessData} inputData={inputData}/>
                  </div>
              </DashboardCustomCard>
            </div>
          </div>
          <div className="row px-4 mt-4">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <DashboardCustomCard>
              <div className="px-3 py-3">
                   <ContactComponents inputData={inputData} businessData={businessData} useLocation={useLocation}/>
                  </div>
              </DashboardCustomCard>
            </div>
          </div>
          <div className="row px-4 mt-4">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <DashboardCustomCard>
              <div className="px-3 py-3">
                   <GalleryComponent businessData={businessData} inputData={inputData}/>
                  </div>
              </DashboardCustomCard>
            </div>
          </div>
          <div className="row px-4 mt-4">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <DashboardCustomCard>
              <div className="px-3 py-3">
                   <SocialComponent businessData={businessData} inputData={inputData}/>
                  </div>
              </DashboardCustomCard>
            </div>
          </div>
          <div className="row px-4 mt-4">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <DashboardCustomCard>
              <div className="px-3 py-3">
                   <HoursComponent businessData={businessData} inputData={inputData}/>
                  </div>
              </DashboardCustomCard>
            </div>
          </div>
          <div className="row px-4 mt-4">
            <div className="col-lg-7 mx-auto col-md-12 col-sm-12">
            <Button
            loading={isLoading}
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
