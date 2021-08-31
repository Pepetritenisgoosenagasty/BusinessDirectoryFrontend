import { DashboardCustomCard } from "@/components/CardComponent";
import { DashboardFooter } from "@/components/DashboardFooter";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { BiArrowBack } from "react-icons/bi";
import { Form, Input, Button, Radio, Avatar } from "antd";
import UpdatePicture from "./Components/ChangeImage"
import { useState } from "react";
import { userData } from "src/hooks/useLoggInUser";
import { Spinner } from "@/components/Spinner";
import { Results } from "@/components/Result";
import { PAGE_HOME, URL_UPDATE_USER } from "@/constants/routes";
import { performUpdate } from "src/redux/actions/apiActionCreators";
import { useDispatch } from "react-redux";

const index = () => {
    const [fileString, setFileString] = useState("");
    const [fileObject, setFileObject] = useState({});
    // const [isLoading, setIsLoading] = useState(false);
    const [form] = Form.useForm();

    const { user, isLoading, isError } = userData();
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
    
  const router = useRouter();

 


   form.setFieldsValue({
     picture: user?.picture,
    firstname: user?.firstname,
    lastname: user?.lastname,
    gender: user?.gender,
    email: user?.email,
    username: user?.username,
    phone_number: user?.phone_number
   })

   if (isLoading) return <Spinner />;
   if (isError) return  <Results status="500" title="500" subTitle="Sorry, something went wrong." url={PAGE_HOME}/>;

   const onFinish = (values) => {

    // console.log(values)
      
    try {

        setIsloadingSubmit(true);
        values["picture"] = fileObject;
        let new_formdata = new FormData();
    
    
        for (const key in values) {
          new_formdata.append(key, values[key]);
        }
    
    
        dispatch(
          performUpdate(URL_UPDATE_USER +`${user.id}`, new_formdata)
        ).finally(() => {
          setIsloadingSubmit(false)
        });
        
        
    } catch (error) {
        console.log(error)
    }
  

};


  return (
    <>
      <div className="dashboard container-fluid content py-5">
        <div className="row dashboard__text  px-5 py-3">
          <div>
            <h5>My Profile</h5>
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
        <Form form={form} onFinish={onFinish}>
          <div className="row px-4">
            <div className="col-lg-3 col-md-12 col-sm-12">
              <DashboardCustomCard>
                <div className="px-3 py-5 text-center">
                   <Form.Item name="picture">
                        <UpdatePicture
                          initialPhoto={user?.picture?.previewUrl}
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
                      <Button htmlType="submit" type="primary">
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
