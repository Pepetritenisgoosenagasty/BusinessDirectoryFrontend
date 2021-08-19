import { AuthCard } from "@/components/CardComponent";
import { PAGE_FORGET_PASSWORD, PAGE_HOME, PAGE_LOGIN, PAGE_REGISTER, URL_FORGOT_PASSWORD } from "@/constants/routes";
import Link from "next/link";
import { Form, Input, Button, Checkbox } from "antd";
import { motion } from "framer-motion";
import { IoBusinessOutline, IoFlowerOutline } from "react-icons/io5";
import { forgotPassword } from "src/redux/features/authSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";


const ForgotPassword = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const dispatch = useDispatch();

  const onSubmit = (values) => {
    setIsSubmitting(true);
    try {
      setIsSubmitting(false);
      values.email = values.email;
      values.url = 'http:/localhost:1337/admin/plugins/users-permissions/auth/reset-password';
      dispatch(forgotPassword(URL_FORGOT_PASSWORD, values))
    } catch (error) {
      
    }
  }
        return (
            <div className="login">
              {/* <div className="login-sidebar">
                <div className="login-sidebar-content">
                  <div className="title mt-5 py-5">
                    <Link href={PAGE_HOME}>
                      <h3 className="headerLogo">Business Directory</h3>
                    </Link>

                    <div className="text-content">
            <IoBusinessOutline style={{ fontSize: 30}} />
              <h4> Let's get back to business</h4>
              <p>People are ready to spend more time and money with private businesses again. Make it simple for them to locate you.</p>
            </div>
                  </div>
                </div>
              </div> */}
              <div className="login-form">
                <AuthCard>
                  <div className="login-form-content py-5">
                    <div>{/* <h1>1</h1> */}</div>
                    <div>
                      <div className="d-flex align-items-center justify-content-between signin-link">
                      <div>
                <Link href={PAGE_HOME}>
              <h3 className="headerLogo">Business Directory</h3>
            </Link>
                </div>

                <div>

                        <span>Return to</span>
                        <Link href={PAGE_LOGIN}>
                        <motion.a   whileHover={{ scale: 1.1, duration: 0.5 }}>SignIn</motion.a>
                        </Link>
                </div>
                      </div>
                      <div className="form-content mt-3">
                        <h5>Reset Your Password</h5>
                          
                        <div>

                            <div className="row">
                              <div className="col-lg-12 mx-auto">
                              <p>Please make sure you enter a valid email so you recieve an email with instruction on how to reset your password

</p>
                              </div>
                            </div>
                          <Form
                            name="basic"
                            initialValues={{
                              remember: true,
                            }}
                            onFinish={onSubmit}
                          >
                            <div className="row">
                              <div className="col-lg-12 mx-auto">
                              <label>Email</label>
                                <Form.Item
                                  name="email"
                                  rules={[
                                    {
                                      required: true,
                                      message: "Please input your email!",
                                    },
                                  ]}
                                >
                                  <Input  type="email" placeholder="Enter your email"/>
                                </Form.Item>
                              </div>
                            </div>
        
                            <div className="row">
                              <div className="col-lg-12 mx-auto">
                              <p>We`ll send password reset link to your email

</p>
                              </div>
                            </div>
        
                            <div className="row">
                             <div className="col-lg-12 mx-auto">
                             <Form.Item
                             
                            >
                              <Button loading={isSubmitting} type="primary" htmlType="submit">
                                Reset Password
                              </Button>
                            </Form.Item>
                             </div>
                            </div>
                          </Form>
                        </div>
                
                      </div>
                    </div>
                  </div>
                </AuthCard>
              </div>
            </div>
    )
}

export default ForgotPassword
