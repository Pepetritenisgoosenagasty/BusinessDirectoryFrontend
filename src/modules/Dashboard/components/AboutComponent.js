import { Form, Input, Button, Select, Tag } from "antd";
const { Option } = Select;
const { TextArea } = Input;

const options = [
  { value: "gold" },
  { value: "lime" },
  { value: "green" },
  { value: "cyan" },
];

const AboutContent = () => {
  const children = [];
  for (let i = 10; i < 36; i++) {
    children.push(
      <Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>
    );
  }

  function tagRender(props) {
    const { label, value, closable, onClose } = props;
    const onPreventMouseDown = (event) => {
      event.preventDefault();
      event.stopPropagation();
    };
    return (
      <Tag
        color={value}
        onMouseDown={onPreventMouseDown}
        closable={closable}
        onClose={onClose}
        style={{ marginRight: 3 }}
      >
        {label}
      </Tag>
    );
  }

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
            <Select mode="multiple" allowClear style={{ width: "100%" }}>
              {children}
            </Select>
          </Form.Item>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <label>
            Description<sup className="text-danger">*</sup>
          </label>
          <Form.Item
            name="discription"
            rules={[
              {
                required: true,
              },
            ]}
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
        <div className="col-lg-12 col-md-12 col-sm-12">
          <label>
            Tags<sup className="text-danger">*</sup>
          </label>
          <Form.Item
            name="tags"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Select
              mode="multiple"
              showArrow
              tagRender={tagRender}
              style={{ width: "100%" }}
              options={options}
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
