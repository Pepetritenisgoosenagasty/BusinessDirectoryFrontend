import { Form, Input, Button, Select, Tag } from "antd";
import { useCategories } from "src/hooks/useGetCategories";

const { Option } = Select;
const { TextArea } = Input;



const AboutContent = () => {

  const { details, isLoading, isError} = useCategories()

  return (
    <div className="addForm container-fluid">
      <div>
        <h5>About</h5>
        <p>
          We are not responsible for any damages caused by the use of this
          website, or by posting business listings here. Please use our site at
          your own discretion and exercise good judgement as well as common
          sense when advertising business here.
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
            <Select mode="multiple" allowClear style={{ width: "100%", borderRadius: 7 }}>
              {details?.map((item, index )=> (
                <Option key={index + 1}>{item.category}</Option>
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
            name="discription"
            
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

export default AboutContent;
