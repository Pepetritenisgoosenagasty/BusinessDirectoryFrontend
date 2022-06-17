import { keyCodeValues } from "@/constants/ConstantValues";
import { URL_REVIEWS } from "@/constants/routes";
import { Comment, Avatar, Form, Button, List, Input, Rate } from "antd";
import moment from "moment";
import { useState } from "react";
import ReactStars from "react-rating-stars-component";
import { useDispatch } from "react-redux";
import { performCreate, performCreateReviews } from "src/redux/actions/apiActionCreators";
import { handleKeyDown } from "src/utils/filterKeyCodes";

const { TextArea } = Input;

const CommentComponent = (props) => {
  const [submitting, setSubmitting] = useState(false);
  const dispatch = useDispatch()
// console.log(props)
  const [form] = Form.useForm()

  console.log(props)

  const onFinish= (values) => {
   console.log(values)
    try {
      
      dispatch(
        performCreateReviews(URL_REVIEWS, {data: {
          name: values.name,
          rate: values.rate,
          message: values.message,
          business_id: props.placeId
        }})
      ).finally(() => {
        setSubmitting(false)
        props?.reviews()
        form.resetFields()
      });
      
      
  } catch (error) {
      console.log(error)
  }


  }


  return (
    <div>
      <Form  name="basic" onFinish={onFinish} form={form}>
          <div>
          <label className="label">Name</label>
        <Form.Item name="name"   rules={[{ required: true}]}>
          <Input style={{ borderRadius: 7 }} onKeyDown={(e) => handleKeyDown(e, keyCodeValues.NUMBERS_KEYCODE)}/>
        </Form.Item>
          </div>
        
          <div>
        <Form.Item name="rate" rules={[{ required: true}]}>
            <Rate />
        </Form.Item>
          </div>
       <div>
          <label className="label">Message</label>
       <Form.Item name="message" rules={[{ required: true}]}>
          <TextArea rows={4} style={{ borderRadius: 7 }} onKeyDown={(e) => handleKeyDown(e, keyCodeValues.NUMBERS_KEYCODE)}/>
        </Form.Item>
       </div>
        <Form.Item>
          <div className="changePassword text-sm">
            <Button htmlType="submit" loading={submitting} type="primary">
              Submit
            </Button>
          </div>
        </Form.Item>
      </Form>

      <style jsx>{`
        label {
          font-size: 0.7rem;
          font-weight: 600;
        }
      `}</style>
    </div>
  );
};

export default CommentComponent;
