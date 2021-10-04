import { DashboardCustomCard } from "@/components/CardComponent";
import { DashboardFooter } from "@/components/DashboardFooter";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { BiArrowBack } from "react-icons/bi";
import { Form, Input, Button, Radio, Avatar } from "antd";
import UpdatePicture from "./Components/ChangeImage"
import { useCallback, useEffect, useState } from "react";
import { userData } from "src/hooks/useLoggInUser";
import { Spinner } from "@/components/Spinner";
import { Results } from "@/components/Result";
import { PAGE_HOME, URL_UPDATE_USER } from "@/constants/routes";
import { performUpdate } from "src/redux/actions/apiActionCreators";
import { useDispatch } from "react-redux";
import authServices from "src/services/auth.services";
const index = () => {
  const [fileString, setFileString] = useState("");
  const [fileObject, setFileObject] = useState({});
  // const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
    const [form] = Form.useForm();

    let { query:{id} } = router;
    const { user, isLoading, isError } = userData(id);
    const [isloadingSubmit, setIsloadingSubmit] = useState(false)

const dispatch = useDispatch()

    // console.log(user)
  
    const [userProfileIMG, setUserProfileIMG] = useState("");
  
    const handleSetUserProfileIMGPicture = (image) => {
      setUserProfileIMG(image);
    };
    const handleFileObject = (obj) => {
      setFileObject(obj);
    };

    const handleFileSetter = (fileData) => {
        setFileString(fileData);
      };
    
  
useEffect(() => {
  form.setFieldsValue({
    picture: user?.picture,
   firstname: user?.firstname,
   lastname: user?.lastname,
   gender: user?.gender,
   email: user?.email,
   username: user?.username,
   phone_number: user?.phone_number
  })
}, [user])
 



   if (isLoading) return <Spinner />;
   if (isError) return  <Results status="500" title="500" subTitle="Sorry, something went wrong." url={PAGE_HOME}/>;

   const onFinish = (values) => {
    try {

        setIsloadingSubmit(true);
        values["picture"] = fileObject;
        let new_formdata = new FormData();
    
    
        for (const key in values) {
          new_formdata.append(key, values[key]);
        }
    
    
        dispatch(
          performUpdate(URL_UPDATE_USER + '/' +`${user.id}`, new_formdata)
        ).then(data =>  uploadProfileImage(data) )
        
    } catch (error) {
        console.log(error)
    }
};


const uploadProfileImage = (data) => {
  try {
    let data_id = data?.id;

    let new_formdata = new FormData();


    new_formdata.append("files", fileObject);
    new_formdata.append("ref", "user");
    new_formdata.append("refId", data_id);
    new_formdata.append("field", "picture");
    new_formdata.append("source", "users-permissions");

    // setIsloadingSubmit(true);
    authServices
      .requestPOST("upload", new_formdata)
      .then((res) => {
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsloadingSubmit(false);
      });
  } catch (error) {
    console.log(error);
  }
};




  return (
    <>
      <div className="dashboard container-fluid content py-5">
       <div className="row px-4 mb-5">
         <div className="col-lg-12">
         <DashboardCustomCard>
         <div className="row dashboard__text  px-4 py-2">
          <div>
            <h6 className="m-0">My Profile</h6>
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

         </DashboardCustomCard>
         </div>
       </div>
        <Form form={form} onFinish={onFinish}>
          <div className="row px-4">
            <div className="col-lg-3 col-md-12 col-sm-12">
              <DashboardCustomCard>
                <div className="px-3 py-5 text-center">
                   <Form.Item name="picture">
                        <UpdatePicture
                          initialPhoto={user?.picture?.url}
                          userProfileIMG={userProfileIMG}
                          handleSetUserProfileIMGPicture={
                            handleSetUserProfileIMGPicture
                          }
                          handleFileObject={handleFileObject}
                          handleFileSetter={handleFileSetter}
                        />
                      </Form.Item>
                      <h6 className="mt-4">Click to change profile picture</h6>
                </div>
              </DashboardCustomCard>
            </div>
            <div className="col-lg-9 col-md-12 col-sm-12">
              <DashboardCustomCard>
                <div className="px-3 py-3">
                  <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12">
                      <label>
                        First Name<sup className="text-danger">*</sup>
                      </label>
                      <Form.Item
                        name="firstname"
                        rules={[
                          {
                            required: true,
                          },
                        ]}
                      >
                        <Input style={{ borderRadius: 7 }} />
                      </Form.Item>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                      <label>
                        Last Name<sup className="text-danger">*</sup>
                      </label>
                      <Form.Item
                        name="lastname"
                        rules={[
                          {
                            required: true,
                          },
                        ]}
                      >
                        <Input style={{ borderRadius: 7 }} />
                      </Form.Item>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-3 col-md-12 col-sm-12">
                      <label>
                        Gender<sup className="text-danger">*</sup>
                      </label>
                      <Form.Item
                        name="gender"
                        rules={[
                          {
                            required: true,
                          },
                        ]}
                      >
                        <Radio.Group>
                          <Radio value="Male">Male</Radio>
                          <Radio value="Female">Female</Radio>
                        </Radio.Group>
                      </Form.Item>
                    </div>
                    <div className="col-lg-5 col-md-12 col-sm-12">
                      <label>
                        Email<sup className="text-danger">*</sup>
                      </label>
                      <Form.Item
                        name="email"
                        rules={[
                          {
                            required: true,
                          },
                        ]}
                      >
                        <Input type="email" style={{ borderRadius: 7 }} />
                      </Form.Item>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12">
                      <label>
                        Phone Number<sup className="text-danger">*</sup>
                      </label>
                      <Form.Item
                        name="phone_number"
                        rules={[
                          {
                            required: true,
                          },
                        ]}
                      >
                        <Input style={{ borderRadius: 7 }} />
                      </Form.Item>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                      <label>
                        Username<sup className="text-danger">*</sup>
                      </label>
                      <Form.Item
                        name="username"
                        rules={[
                          {
                            required: true,
                          },
                        ]}
                      >
                        <Input style={{ borderRadius: 7 }} />
                      </Form.Item>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-7 mx-auto col-md-12 col-sm-12 changePassword">
                      <Button htmlType="submit" type="primary" isLoading={isloadingSubmit}>
                        Save Changes
                      </Button>
                    </div>
                  </div>
                </div>
              </DashboardCustomCard>
            </div>
          </div>
        </Form>
      </div>
      <DashboardFooter />
      <style jsx>{`
        label,
        p {
          font-size: 0.7rem;
        }
      `}</style>
    </>
  );
};

export default index;
