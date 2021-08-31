import { AuthCard } from "@/components/CardComponent";
import {
  PAGE_FORGET_PASSWORD,
  PAGE_HOME,
  PAGE_DASHBOARD,
  PAGE_REGISTER,
  URL_LOGIN
} from "@/constants/routes";
import Link from "next/link";
import { Form, Input, Button, Checkbox } from "antd";
import { Divider } from "antd";
import { motion } from "framer-motion";
import { FiFacebook } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import {
  IoBusinessOutline,
  IoChatbubbleEllipsesOutline,
  IoEarthOutline,
} from "react-icons/io5";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { OautLogin, performUserLogin } from "src/redux/features/authSlice";
import { useRouter } from "next/router";
import authServices from "src/services/auth.services";



const Login = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fanggProvider, setFanggProvider] = useState('')
  const dispatch = useDispatch();

  const { isLogin } = useSelector((state) => state.auth);

  const router = useRouter();

  //push to dashboard if loggedin
  useEffect(() => {
    if (isLogin) {
      router.push(PAGE_DASHBOARD);
    }
  }, [isLogin]);


  const providerNames = ['facebook', 'google']

  console.log(providerNames[0])

  // OAuth Signup
  useEffect(() => {

    if(typeof window != 'undefined'){
      if(router.query.access_token){

        let {access_token} = router.query

        let value = {
          access_token ,
          location : window.location.search,
          provider : `${fanggProvider}`
        }

        let url = `auth/${value.provider}/callback${value.location}`

        dispatch(OautLogin(url))
  
     
      }
    }
   
  }, [router.query?.access_token])

  

  const submitForm = (values) => {
    setIsSubmitting(true)
    try {
      setIsSubmitting(false)
      delete values["remember"];
      dispatch(performUserLogin(URL_LOGIN, {
        identifier: values.email,
        password: values.password
      }))
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div className="login">
      {/* <div className="login-sidebar">
        <div className="login-sidebar-content">
          <div className="title">
            <Link href={PAGE_HOME}>
              <h3 className="headerLogo">Business Directory</h3>
            </Link>

            <div className="text-content">
              <IoBusinessOutline style={{ fontSize: 30 }} />
              <h4> Let's get back to business</h4>
              <p>
                People are ready to spend more time and money with private
                businesses again. Make it simple for them to locate you.
              </p>
            </div>

            {/* <div className="text-content">
              <h4>Assist others in getting to know you.</h4>
              <p></p>
            </div> */}

            {/* <div className="text-content">
              <IoEarthOutline style={{ fontSize: 30 }} />
              <h4>
                Become known by millions of individuals who are eager to
                purchase and visit.
              </h4>
              <p></p>
            </div>

            <div className="text-content">
              <IoChatbubbleEllipsesOutline style={{ fontSize: 30 }} />
              <h4>More potential consumers can be reached.</h4>
              <p>
                Increase the number of people who see your business when they're
                looking for private companies like yours.
              </p>
            </div>
          </div>
      </div> 
        </div> */}
      <div className="login-form">
        <AuthCard>
          <div className="login-form-content">
            <div>{/* <h1>1</h1> */}</div>
            <div>
              <div className="d-flex align-items-center justify-content-between signin-link">
              <div>
                <Link href={PAGE_HOME}>
              <h3 className="headerLogo mr-5">Business Directory</h3>
            </Link>
                </div>
                <div>

                {/* <span>Don`t have an account yet?</span> */}
                <Link href={PAGE_REGISTER}>
                  <motion.a whileHover={{ scale: 1.1, duration: 0.5 }}>
                    SignUp
                  </motion.a>
                </Link>
                </div>
              </div>
              <div className="form-content mt-3">
                <h1>Login to your account</h1>

                <div>
                  <Form
                    name="basic"
                    initialValues={{
                      remember: true,
                    }}

                    onFinish={submitForm}
                  >
                    <div className="row">
                      <div className="col-lg-12 mx-auto">
                        <label>Email</label>
                        <Form.Item
                          name="email"
                          rules={[
                            {
                              required: true,
                              message: "Please input your Email!",
                            },
                          ]}
                        >
                          <Input />
                        </Form.Item>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-lg-12 mx-auto">
                        <label>Password</label>
                        <Form.Item
                          name="password"
                          rules={[
                            {
                              required: true,
                              message: "Please input your password!",
                            },
                          ]}
                        >
                          <Input type="password" />
                        </Form.Item>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-lg-12 mx-auto d-flex justify-content-between">
                        <div>
                          <Form.Item name="remember" valuePropName="checked">
                            <Checkbox>Remember me</Checkbox>
                          </Form.Item>
                        </div>
                        <div className="forgot_password mt-2">
                          <Link href={PAGE_FORGET_PASSWORD}>
                            <a>Forgot Password?</a>
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-lg-12 mx-auto">
                        <Form.Item>
                          <Button  loading={isSubmitting} type="primary" htmlType="submit">
                            SignIn
                          </Button>
                        </Form.Item>
                      </div>
                    </div>
                  </Form>
                </div>
                {/* <div className="row">
                  <div className="col-lg-12 mx-auto">
                    <Divider>or</Divider>
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col-lg-12 OauthBtn">
                  <Link href="http://localhost:1337/connect/google">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setFanggProvider('google')}
                    >
                      <FcGoogle style={{ fontSize: 20 }} className="mr-3" />
                      <span>Sign in with Google</span>
                    </motion.button>
                    </Link>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-lg-12 OauthBtn">
                   <Link href="http://localhost:1337/connect/facebook">
                   <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setFanggProvider('facebook')}
                    >
                      <FiFacebook style={{ fontSize: 20 }} className="mr-3" />
                      <span> Sign in with Facebook</span>
                    </motion.button>
                   </Link>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </AuthCard>
      </div>
    </div>
  );
};

export default Login;
