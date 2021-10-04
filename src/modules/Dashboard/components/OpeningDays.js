import { formatTime } from "@/constants/DateFormat";
import { Form, Input, Checkbox } from "antd";
import { TimePicker } from "antd";
import { useEffect, useState } from "react";
import moment from 'moment';

const OpeningDays = (props) => {
  const [disabled, setDisabled] = useState(true);
  const [business, setBusiness] = useState([])


  useEffect(() => {
    setBusiness({...props?.data?.businessData})
  }, [props?.data?.businessData])

props?.data?.inputData?.setFieldsValue({
  days: moment(business?.working_hours?.Monday),

})
  // console.log(props)
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
         
        >
          <TimePicker.RangePicker
          format="h:mm:ss A"
            disabled={disabled}
            style={{ width: "100%", borderRadius: 7 }}
          />
        </Form.Item>
      </div>
    </div>
  );
};

export default OpeningDays;
