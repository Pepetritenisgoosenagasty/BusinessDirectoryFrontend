import { DashboardCustomCard } from "@/components/CardComponent";
import { DashboardFooter } from "@/components/DashboardFooter";
import { Link } from "@material-ui/core";
import { motion } from "framer-motion";
import { BiArrowBack } from "react-icons/bi";
import { useRouter } from "next/router";
import AboutContent from "../../components/AboutComponent";
import ContactComponents from "../../components/ContactComponents";
import GalleryComponent from "../../components/GalleryComponent";
import SocialComponent from "../../components/SocialComponent";
import HoursComponent from "../../components/HoursComponent";
import { Button, message, Form } from "antd";
import { useForm } from "antd/lib/form/Form";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  performGetAll,
  performUpdate,
} from "src/redux/actions/apiActionCreators";
import { URL_GET_BUSINESS, PAGE_BUSINESS } from "@/constants/routes";
import useGetUserLocation from "src/hooks/useGetUserLocation";
import EditGalleryComponent from "../../components/EditGalleryComponent";
import _ from "lodash";
import authServices from "src/services/auth.services";
import qs from "qs"
import { useGetEntity } from "src/hooks/useGetEntity";

const Edit = () => {
  const [businessData, setBusinessData] = useState(null);
  const [isLoading, setisLoading] = useState(false);
  const [images, setImages] = useState([]);
  const [initialImages, setInitialImages] = useState([]);
  const dispatch = useDispatch();
  const router = useRouter();
  const [form] = useForm();
const [description, setDescription] = useState('')
  let inputData = form;
  const useLocation = useGetUserLocation();
  let business_id = router.query.id;

  // const fetchBusiness = async () => {
  //   const business = await dispatch(
  //     performGetAll(URL_GET_BUSINESS + `?_where[id]=` + business_id)
  //   );
  //   setBusinessData(business[0]);
  // };

  const dataQuery = qs.stringify({
   filters: {
        id: {
          $eq: business_id,
        },
      },
       populate: '*',
}, {
  encodeValuesOnly: true,
});

  // Business data
  const { data } = useGetEntity(URL_GET_BUSINESS + `?${dataQuery}`)



  useEffect(() => {
    form.setFieldsValue({
      lat: useLocation?.lat,
      lng: useLocation?.lng,
    });
  }, [useLocation]);



  useEffect(() => {
    form.setFieldsValue({
      name: data[0]?.attributes?.name,
      category: data[0]?.attributes?.category?.data?.attributes?.name,
      amenities: data[0]?.attributes?.amenities,
      city: data[0]?.attributes?.city,
      address: data[0]?.attributes?.address,
      phone_number: data[0]?.attributes?.phone_number,
      email: data[0]?.attributes?.email,
      website: data[0]?.attributes?.website,
      linkedin: data[0]?.attributes?.social_media_handles?.linkedIn,
      facebook: data[0]?.attributes?.social_media_handles?.facebook,
      twitter: data[0]?.attributes?.social_media_handles?.twitter,
      youtube: data[0]?.attributes?.social_media_handles?.youtube,
    });
    // if (!_.isEmpty(data)) {
    //   setGalleryImage(data);
    // }
  }, [data]);

  useEffect(() => {
    setDescription(data[0]?.attributes?.description)
  }, [data]);

  const setGalleryImage = (data) => {
    let { galleries } = data;

    setInitialImages([
      ...galleries?.map((g) => {
        g["uuid"] = g?.id;
        return g;
      }),
    ]);
  };

  const handleOnFinish = (values) => {
    try {
      setisLoading(true);
      values['description'] = description
      dispatch(
        performUpdate(URL_GET_BUSINESS + "/" + business_id, {
                data: {
          name: values.name,
          description: values.description,
          amenities: values.amenities,
          city: values.city,
          address: values.address,
          email: values.email,
          website: values.website,
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
          },
         
          category: values.category,
          video: values.video,
          phone_number: values.phone_number,
          published_at: null
         }
        })
      ).then(() => {
        uploadProfileImage(businessData);
      });
      setisLoading(false);

      //   form.resetFields();
    } catch (error) {
      console.log(error);
    }
  };

  const uploadProfileImage = (data) => {
    try {
      let data_id = data?.id;

      let new_formdata = new FormData();

      images.forEach((image) => {
        if (!_.has(image, "id")) {
          let { originFileObj } = image

          return new_formdata.append(
            `files`,
            originFileObj,
            originFileObj.name
          );
        }
      });

      // new_formdata.append("files", fileObject);
      new_formdata.append("ref", "business");
      new_formdata.append("refId", data_id);
      new_formdata.append("field", "galleries");

      setisLoading(true);

      authServices
        .requestUPLOAD("upload", new_formdata)
        .then((res) => {})
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setisLoading(false);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpload = (data) => {
    setImages([...data]);
  };
  return (
    <>
      <div className="dashboard container-fluid content py-5">
        <div className="row px-5 mb-4">
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
                      <BiArrowBack /> Go Back
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
              <div className="px-3 py-3">
                <AboutContent description={description} setDescription={setDescription} />
              </div>
            </div>
          </div>
          <div className="row px-4 mt-4">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="px-3 py-3">
                <ContactComponents useLocation={useLocation} />
              </div>
            </div>
          </div>
          <div className="row px-4 mt-4">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="px-3 py-3">
                <EditGalleryComponent
                  initialImages={initialImages}
                  handleUpload={handleUpload}
                />
              </div>
            </div>
          </div>
          <div className="row px-4 mt-4">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="px-3 py-3">
                <SocialComponent />
              </div>
            </div>
          </div>
          <div className="row px-4 mt-4">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="px-3 py-3">
                <HoursComponent />
              </div>
            </div>
          </div>
          <div className="row px-4 mt-4">
            <div className="col-lg-7 mx-auto col-md-12 col-sm-12">
              <Button
                // loading={isLoading}
                htmlType="submit"
                style={{
                  background: "#379634 ",
                  width: "100%",
                  height: 50,
                  borderRadius: 50,
                  fontSize: ".8rem",
                }}
                type="primary"
                // onClick={() => message.success("Processing complete!")}
              >
                Update
              </Button>
            </div>
          </div>
        </Form>
      </div>
      <DashboardFooter />
    </>
  );
};

export default Edit;
