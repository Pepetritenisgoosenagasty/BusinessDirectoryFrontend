import { Form, Input, Button, Select, Tag } from "antd";
import { useCategories } from "src/hooks/useGetCategories";
import { Checkbox, Row, Col } from 'antd';
const { Option } = Select;
const { TextArea } = Input;



const AboutContent = () => {

  const { details, isLoading, isError} = useCategories()

  return (
    <div className="addForm container-fluid">
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
            <Input />
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
            <Select  allowClear style={{ width: "100%", borderRadius: 7 }}>
              {details?.map((item, index )=> (
                <Option key={index + 1} value={item.category}>{item.category}</Option>
              ))}
            </Select>
          </Form.Item>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <label>
            Description
          </label>
          <Form.Item
            name="description"
            
          >
            <TextArea
              className="custom"
              style={{
                height: 100,
              }}
            />
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
          <label>
            Amenities and More
          </label>
          <Form.Item
          
            name="amenities"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Checkbox.Group style={{ width: '100%' }}>
            <Row>
              <Col span={4}>
                <Checkbox value="Free WIFI">Free WIFI</Checkbox>
              </Col>
              <Col span={4}>
                <Checkbox value="Staff wears masks">Staff wears masks</Checkbox>
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
                <Checkbox value="24/7 Hours Avaliability">24/7 Hours Avaliability</Checkbox>
              </Col>
              <Col span={4}>
                <Checkbox value="Good for Groups">Good for Groups</Checkbox>
              </Col>
              <Col span={4}>
                <Checkbox value="Friendly Enviroment">Friendly Enviroment</Checkbox>
              </Col>
              <Col span={4}>
                <Checkbox value="Masks requireds"> Masks requireds</Checkbox>
              </Col>
               <Col span={4}>
                <Checkbox value="Good for children"> Good for children</Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="Locally owned & operated"> Locally owned & operated</Checkbox>
              </Col>
            </Row>
          </Checkbox.Group>
          </Form.Item>
        </div>

      </div>

     

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
