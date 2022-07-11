import { Form, Input, Button, Select, Tag } from "antd";
import { useCategories } from "src/hooks/useGetCategories";
import { Checkbox, Row, Col } from "antd";
import { useEffect, useState } from "react";
import { DashboardCustomCard } from "@/components/CardComponent";
import dynamic from "next/dynamic";
import 'suneditor/dist/css/suneditor.min.css'; // Import Sun Editor's CSS File
import { handleKeyDown } from "src/utils/filterKeyCodes";
import { keyCodeValues } from "@/constants/ConstantValues";
import { useGetEntity } from "src/hooks/useGetEntity";

const SunEditor = dynamic(() => import("suneditor-react"), {
  ssr: false,
});

const { Option } = Select;
const { TextArea } = Input;



const AboutContent = (props) => {
  const { details } = useCategories();

    // categories
  const { data: categories } = useGetEntity('categories')

  console.log(props)

  return (
    <div className="addForm container-fluid">
      <DashboardCustomCard>
        <div className="px-4 py-4">
          <div>
            <h5>Basic Information</h5>
            <p>
              Input field with <code>*</code> on lable means field is required.
            </p>
          </div>
          <div className="row mt-3">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <label>
                Business Name<sup className="text-danger">*</sup>
              </label>
              <Form.Item
                name="name"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input onKeyDown={(e) => handleKeyDown(e, keyCodeValues.NUMBERS_KEYCODE)}/>
              </Form.Item>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <label>
                Business Category<sup className="text-danger">*</sup>
              </label>
              <Form.Item
                name="category"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Select allowClear style={{ width: "100%", borderRadius: 7 }}>
                  {categories?.map((item, index) => (
                    <Option key={index} value={item.attributes.id}>
                      {item.attributes.name}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <label>Description</label>
              <Form.Item name="description">
                {/* <TextArea
                  className="custom"
                  style={{
                    height: 100,
                  }}
                /> */}

              <SunEditor onChange={value => props?.setDescription(value)} setContents={props?.description} setAllPlugins={true} height="200px"/>
              </Form.Item>
            </div>
          </div>
          <div className="row">
            {/* <div className="col-lg-12 col-md-12 col-sm-12">
          <label>
            Keywords
            </label>
          <Form.Item
          
          name="keywords"
          rules={[
            {
              required: true,
            },
          ]}
          >
          <Input placeholder="Maximun 15, should be separated by commas"/>
          </Form.Item>
        </div> */}
          </div>

          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <label>Amenities and More</label>
              <Form.Item
                name="amenities"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Checkbox.Group style={{ width: "100%" }}>
                  <Row>
                    <Col span={4}>
                      <Checkbox value="Free WIFI">Free WIFI</Checkbox>
                    </Col>
                    <Col span={4}>
                      <Checkbox value="Staff wears masks">
                        Staff wears masks
                      </Checkbox>
                    </Col>
                    <Col span={4}>
                      <Checkbox value="Car Parking">Car Parking</Checkbox>
                    </Col>
                    <Col span={4}>
                      <Checkbox value="Street Parking">Street Parking</Checkbox>
                    </Col>
                    <Col span={4}>
                      <Checkbox value="Bike Parking">Bike Parking</Checkbox>
                    </Col>
                    <Col span={4}>
                      <Checkbox value="24/7 Hours Avaliability">
                        24/7 Hours Avaliability
                      </Checkbox>
                    </Col>
                    <Col span={4}>
                      <Checkbox value="Good for Groups">
                        Good for Groups
                      </Checkbox>
                    </Col>
                    <Col span={4}>
                      <Checkbox value="Friendly Enviroment">
                        Friendly Enviroment
                      </Checkbox>
                    </Col>
                    <Col span={4}>
                      <Checkbox value="Masks requireds">
                        {" "}
                        Masks requireds
                      </Checkbox>
                    </Col>
                    <Col span={4}>
                      <Checkbox value="Good for children">
                        {" "}
                        Good for children
                      </Checkbox>
                    </Col>
                    <Col span={8}>
                      <Checkbox value="Locally owned & operated">
                        {" "}
                        Locally owned & operated
                      </Checkbox>
                    </Col>
                  </Row>
                </Checkbox.Group>
              </Form.Item>
            </div>
          </div>
        </div>
      </DashboardCustomCard>

      {
        props.isActive && ( <div className="d-flex justify-content-end mt-3">
        <button
          style={{
            margin: "0 8px",
            background: "#004ba8",
            color: "#fff",
            border: "none",
            borderRadius: 30,
            width: 150,
            height: 40,
          }}
          htmlType="button"
          type="button"
          onClick={props.nextStep}
        >
          Continue
        </button>
      </div>)
      }

     

      <style jsx>{`
        h5 {
          color: #000;
          font-size: 0.8rem;
          font-weight: 600;
        }

        label,
        p {
          font-size: 0.7rem;
          font-weight: 600;
        }
      `}</style>
    </div>
  );
};

export default AboutContent;
