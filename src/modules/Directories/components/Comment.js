import { Comment, Avatar, Form, Button, List, Input } from "antd";
import moment from "moment";
import { useState } from "react";
import ReactStars from "react-rating-stars-component";

const { TextArea } = Input;



const Editor = ({ onChange, onSubmit, submitting, value }) => (
  <>
   <Form.Item name="name">
       <label className="label">Name</label>
      <Input  onChange={onChange} value={value} />
    </Form.Item>
    <Form.Item>
    <label className="label">Rating</label>   
    <ReactStars
        count={5}
        // onChange={ratingChanged}
        size={20}
        isHalf={true}
        emptyIcon={<i className="far fa-star"></i>}
        halfIcon={<i className="fa fa-star-half-alt"></i>}
        fullIcon={<i className="fa fa-star"></i>}
        activeColor="#ffd700"
        /> 
    </Form.Item>
    <Form.Item name="message">
    <label className="label">Message</label>
      <TextArea  rows={4} onChange={onChange} value={value} />
    </Form.Item>
    <Form.Item>
      <Button
        htmlType="submit"
        loading={submitting}
        onClick={onSubmit}
        type="primary"
      >
        Add Review
      </Button>
    </Form.Item>
  </>
);

const CommentComponent = () => {
  const [comments, setComments] = useState([]);
  const [Submitting, setSubmitting] = useState(false);
  const [value, setValue] = useState("");


  const CommentList = ({ comments }) => (
    <List
      dataSource={comments}
      header={`${comments.length} ${comments.length > 0 ? "replies" : "reply"}`}
      itemLayout="horizontal"
      renderItem={(props) => <Comment {...props} />}
    />
  );

  const handleSubmit = () => {
    if (!value) {
      return;
    }
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setValue('');
      setComments([...comments], {
        author: "Han Solo",
        avatar:
          "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
        content: <p>{value}</p>,
        datetime: moment().fromNow(),
      });
    }, 1000);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>

      {comments.length > 0 && <CommentList comments={comments} />}
      <Comment
        content={
          <Editor
            onChange={handleChange}
            onSubmit={handleSubmit}
            submitting={Submitting}
            value={value}
          />
        }
      />

<style jsx>{`
        label  {
          font-size: .7rem;
          font-weight: 600;
        }
      `}</style>
    </div>
  );
};

export default CommentComponent;
