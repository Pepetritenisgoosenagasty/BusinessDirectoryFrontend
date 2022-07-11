import { DashboardCustomCard } from "@/components/CardComponent";
import { DashboardFooter } from "@/components/DashboardFooter";
import { Form, Input, Button } from "antd";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { BiArrowBack } from "react-icons/bi";
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { userData } from "src/hooks/useLoggInUser";
import { PAGE_HOME, URL_UPDATE_USER } from "@/constants/routes";
import { Results } from "@/components/Result";
import { Spinner } from "@/components/Spinner";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { performUpdate } from "src/redux/actions/apiActionCreators";
import { enqueueSnackbar } from "src/redux/actions/notification.action";


const index = () => {
  const router = useRouter();
  const [isloadingSubmit, setIsloadingSubmit] = useState(false)
  const dispatch = useDispatch();
  let { query:{id} } = router;
  const { user, isLoading, isError } = userData(id);
  
  if (isLoading) return <Spinner />;
  if (isError) return  <Results status="500" title="500" subTitle="Sorry, something went wrong." url={PAGE_HOME}/>;

  const onFinish = (values) => {
    try {
 
      setIsloadingSubmit(true);
  
   if(values.password !== values.confirmPassword) {
    setIsloadingSubmit(false);
      dispatch(
        enqueueSnackbar({
          message: "Password does not match confirm password",
          options: {
            variant: "error",
          },
        })
      );

      return false;
   } else if (values.password.length < 6) {
    setIsloadingSubmit(false);
    dispatch(
      enqueueSnackbar({
        message: "Password must be more than 6 characters.",
        options: {
          variant: "error",
        },
      })
    );

    return false;
   } else {
    setIsloadingSubmit(false);
    dispatch(
      performUpdate(URL_UPDATE_USER + `/${user.id}`, {
        password: values.password
      })
    ).finally(() => {
      setIsloadingSubmit(false)
    });
   }
      
      
  } catch (error) {
      console.log(error)
  }
  }
  return (
    <>
      <div className="dashboard container content py-5">
        <div className="row dashboard__text  px-5 py-3">
          <div>
            <h5>Change Password</h5>
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
        <Form onFinish={onFinish}>
          <div className="row px-4">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <DashboardCustomCard>
                <div className="px-3 py-3">
                  {/* <div className="col-lg-12 col-md-12 col-sm-12">
                    <label>
                      Current Password<sup className="text-danger">*</sup>
                    </label>
                    <Form.Item
                      name="current"
                      rules={[
                        {
                          required: true,
                        },
                      ]}
                    >
                      <Input.Password  placeholder="**********" iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)} style={{ borderRadius: 7}}/>
                    </Form.Item>
                  </div> */}
                  <div className="col-lg-12 col-md-12 col-sm-12">
                    <label>
                      New Password<sup className="text-danger">*</sup>
                    </label>
                    <Form.Item
                      name="password"
                      rules={[
                        {
                          required: true,
                        },
                      ]}
                    >
                      <Input.Password placeholder="New Password" iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)} style={{ borderRadius: 7}}/>
                    </Form.Item>
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12">
                    <label>
                      Confirm New Password<sup className="text-danger">*</sup>
                    </label>
                    <Form.Item
                      name="confirmPassword"
                      rules={[
                        {
                          required: true,
                        },
                      ]}
                    >
                      <Input.Password placeholder="Confirm Password" iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)} style={{ borderRadius: 7}}/>
                    </Form.Item>
                  </div>
                  <div className="col-lg-7 mx-auto col-md-12 col-sm-12 changePassword">
                    
                    <Button
                  htmlType="submit"
                  type="primary"
                  loading={isloadingSubmit}
               
                  >
                  Change Password
                </Button>
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
