import { Form, Input, Checkbox } from "antd";
import { TimePicker } from "antd";
import { useState } from "react";

const OpeningDays = (props) => {
  const [disabled, setDisabled] = useState(true);

  const handleOnChange = (e) => {
    // console.log("checked = ", e.target.value);
    e.target.checked;
    setDisabled(!disabled);
  };

  return (
    <div className="row ">
      <div className="col-3">
        <Checkbox onChange={handleOnChange}>
         {props.days}
        </Checkbox>
      </div>
      <div className="col-9">
        <Form.Item
          name={props.days}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <TimePicker.RangePicker
            disabled={disabled}
            style={{ width: "100%", borderRadius: 7 }}
          />
        </Form.Item>
      </div>
    </div>
  );
};

export default OpeningDays;
