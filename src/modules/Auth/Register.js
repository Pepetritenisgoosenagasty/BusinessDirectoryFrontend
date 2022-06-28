import { AuthCard } from "@/components/CardComponent";
import { PAGE_HOME, PAGE_LOGIN, PAGE_DASHBOARD, URL_REGISTER } from "@/constants/routes";
import Link from "next/link";
import { Form, Input, Button, InputNumber, Radio } from "antd";
import { Divider } from "antd";
import { motion } from "framer-motion";
import { FiFacebook } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { IoBusinessOutline, IoFlowerOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { performUserRegistration } from "src/redux/features/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { useRouter } from "next/router";
import { enqueueSnackbar } from "src/redux/actions/notification.action";
import { handleKeyDown } from "src/utils/filterKeyCodes";
import { keyCodeValues } from "@/constants/ConstantValues";

const Register = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [value, setValue] = useState();
  const dispatch = useDispatch();

  const { isLogin } = useSelector((state) => state.auth);

  const router = useRouter();

  //push to dashboard if loggedin
  useEffect(() => {
    if (isLogin) {
      router.push(PAGE_DASHBOARD);
    }
  }, [isLogin]);


  useEffect(() => {

    if(typeof window != 'undefined'){
      if(router.query.access_token){

        let {access_token} = router.query

        let value = {
          access_token ,
          location : window.location.search,
          provider : 'facebook'
        }

        let url = `auth/${value.provider}/callback${value.location}`

        dispatch(OautLogin(url))
  
     
      }
    }
   
  }, [router.query?.access_token])


  const submitForm = (values) => {
    setIsSubmitting(true);
    if(values.cpassword === values.password) {
      try {
    
        dispatch(performUserRegistration(URL_REGISTER, { 
          username: values.username,
          email: values.email,
          password: values.password,
          firstName: values.firstname,
          lastName: values.lastname,
          phoneNumber: values.phone_number,
          gender: values.gender,
        }))
        .finally(() => {
          setIsSubmitting(false);
  
        })
      } catch (error) {
        console.log(error);
      }

    } else if(values.password.length < 6) {
      setIsSubmitting(false);
      dispatch(
        enqueueSnackbar({
          message: "Password must be more than 6 characters",
          options: {
            variant: "error",
          },
        })
      );
    } else  {
      setIsSubmitting(false);
      dispatch(
        enqueueSnackbar({
          message: "Password does not match confirm password",
          options: {
            variant: "error",
          },
        })
      );
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

            <div className="text-content">
              <IoFlowerOutline style={{ fontSize: 30 }} />
              <h4>Assist others in getting to know you.</h4>
              <p>
                Having a significant presence aids in the development of trust
                among potential consumers. To stand out from the crowd, manage
                your page for free.
              </p>
              <p>
                Make sure your contact information is up to date so that others
                can find you.
              </p>
            </div>
          </div>
        </div>
      </div> */}
      <div className="login-form container">
        <AuthCard>
          <div className="login-form-content" >
            <div>{/* <h1>1</h1> */}</div>
            <div>
              <div className="d-flex align-items-center justify-content-between signin-link">
                <div>
                <Link href={PAGE_HOME}>
              <h3 className="headerLogo">Business Directory</h3>
            </Link>
                </div>
                <div>
                {/* <span>Already have an account?</span> */}
                <Link href={PAGE_LOGIN}>
                  <motion.a whileHover={{ scale: 1.1, duration: 0.5 }}>
                    SignIn
                  </motion.a>
                </Link>

                </div>
              </div>
              <div className="form-content mt-3">
                <h1>
                  Create your free account to manage your business
                </h1>

                <div>
                  <Form onFinish={submitForm}>
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <label>First Name</label>
                        <Form.Item
                          name="firstname"
                          rules={[
                            {
                              required: true,
                              message: "Please input your firstname!",
                            },
                          ]}
                        >
                          <Input onKeyDown={(e) => handleKeyDown(e, keyCodeValues.NUMBERS_KEYCODE)}/>
                        </Form.Item>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <label>Last Name</label>
                        <Form.Item
                          name="lastname"
                          rules={[
                            {
                              required: true,
                              message: "Please input your lastname!",
                            },
                          ]}
                        >
                          <Input onKeyDown={(e) => handleKeyDown(e, keyCodeValues.NUMBERS_KEYCODE)}/>
                        </Form.Item>
                      </div>
                    </div>

                    <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12">
                      <label>
                        Gender
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
                    <div className="col-lg-6 col-md-12 col-sm-12">
                      <label>
                        Username
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
                    <div className="col-lg-6 col-md-6 col-sm-12">
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
                          <Input />
                        </Form.Item>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <label>Phone Number</label>
                        <Form.Item
                          name="phone_number"
                          rules={[
                            {
                              required: true,
                              message: "Please input your phone number!",
                            },
                          ]}
                        >
                          {/* <Input
                          type="number"
                            min={1}
                            max={10}

                            placeholder="+223 (000) 000-0000"
                            style={{ width: "100%", borderRadius: 8 }}
                          /> */}
                          <PhoneInput
                            international
                            countryCallingCodeEditable={false}
                            defaultCountry="GH"
                            value={value}
                            onChange={setValue}
                            maxLength={17}
                          />
                        </Form.Item>
                      </div>
                     
                    </div>
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-sm-12">
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
                          <Input.Password type="password" />
                        </Form.Item>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <label>Confirm Password</label>
                        <Form.Item
                          name="cpassword"
                          rules={[
                            {
                              required: true,
                              message: "Please input your cpassword!",
                            },
                          ]}
                        >
                          <Input.Password type="password" />
                        </Form.Item>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-12">
                        <h6>
                          By continuing, you agree to our{" "}
                          <span>Terms of Service</span> and acknowledge our{" "}
                          <span>Privacy Policy</span>.
                        </h6>
                      </div>
                    </div>
                    <div className="row mt-1">
                      <div className="col-lg-6 mx-auto">
                        <Form.Item>
                          <Button
                            loading={isSubmitting}
                            type="primary"
                            htmlType="submit"
                          >
                            Create Account
                          </Button>
                        </Form.Item>
                      </div>
                    </div>
                  </Form>
                </div>
                {/* <Divider>or</Divider>
                <div className="row mt-4">
                  <div className="col-lg-12 OauthBtn">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FcGoogle style={{ fontSize: 20 }} className="mr-3" />
                      <span>Sign up with Google</span>
                    </motion.button>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-lg-12 OauthBtn">
                <Link href="http://localhost:1337/connect/facebook">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FiFacebook style={{ fontSize: 20 }} className="mr-3" />
                      <span> Sign up with Facebook</span>
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

export default Register;
