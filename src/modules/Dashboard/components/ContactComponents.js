import MapComponent from "@/components/Map";
import { Form, Input, Button, Select, Tag } from "antd";
const { Option } = Select;

const ContactComponents = () => {
  return (
    <div className="addForm container-fluid">
      <div>
        <h5>Contact Info</h5>
        <p>
          We are not responsible for any damages caused by the use of this
          website, or by posting business listings here. Please use our site at
          your own discretion and exercise good judgement as well as common
          sense when advertising business here.
        </p>
      </div>
      <div className="row mt-3">
        <div className="col-lg-6 col-md-12 col-sm-12">
          <div className="row">
            <div className="col-12">
              <label>
                Business Region<sup className="text-danger">*</sup>
              </label>
              <Form.Item
                name="region"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Select
                  showSearch
                  style={{ width: "100%" }}
                  optionFilterProp="children"
                  filterOption={(input, option) =>
                    option.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  }
                >
                  <Option value="...">...</Option>
                  <Option value="...">...</Option>
                  <Option value="...">...</Option>
                </Select>
              </Form.Item>
            </div>
            <div className="col-12">
              <label>
                Phone Number<sup className="text-danger">*</sup>
              </label>
              <Form.Item
                name="phone"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </div>
            <div className="col-12">
              <label>
                Business Email<sup className="text-danger">*</sup>
              </label>
              <Form.Item
                name="email"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input placeholder="info@example.com" />
              </Form.Item>
            </div>
            <div className="col-12">
              <label>
                Business Website<sup className="text-danger">*</sup>
              </label>
              <Form.Item
                name="website"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input placeholder="https://" />
              </Form.Item>
            </div>
          </div>
        </div>

        <div className="col-lg-6 col-md-12 col-sm-12">
          <label>
            Business Address<sup className="text-danger">*</sup>
          </label>
          <div style={{ width: '100%', height: '290px'}}>
             <MapComponent/>
          </div>
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
        }
      `}</style>
    </div>
  );
};

export default ContactComponents;
