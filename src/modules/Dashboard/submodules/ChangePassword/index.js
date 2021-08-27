import { DashboardCustomCard } from "@/components/CardComponent";
import { DashboardFooter } from "@/components/DashboardFooter";
import { Form, Input, Button } from "antd";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { BiArrowBack } from "react-icons/bi";
const index = () => {
  const router = useRouter();
  return (
    <>
      <div className="dashboard container-fluid content py-5">
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
        <Form>
          <div className="row px-4">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <DashboardCustomCard>
                <div className="px-3 py-3">
                  <div className="col-lg-12 col-md-12 col-sm-12">
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
                      <Input placeholder="**********" style={{ borderRadius: 7}}/>
                    </Form.Item>
                  </div>
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
                      <Input placeholder="New Password" style={{ borderRadius: 7}}/>
                    </Form.Item>
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12">
                    <label>
                      Confirm New Password<sup className="text-danger">*</sup>
                    </label>
                    <Form.Item
                      name="confirm"
                      rules={[
                        {
                          required: true,
                        },
                      ]}
                    >
                      <Input placeholder="Confirm Password" style={{ borderRadius: 7}}/>
                    </Form.Item>
                  </div>
                  <div className="col-lg-7 mx-auto col-md-12 col-sm-12 changePassword">
                    
                    <Button
                  htmlType="submit"
                  type="primary"
               
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
