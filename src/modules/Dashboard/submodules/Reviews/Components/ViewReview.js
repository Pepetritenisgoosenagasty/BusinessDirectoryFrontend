import { Descriptions } from "antd";
import { Rate } from 'antd';



const ViewReview = (props) => {

  return (
    <div className="row">
        <div className="col-12">
            <p><b>Name</b> {props?.record?.name}</p>
        </div>
        <div className="col-12 my-3">
          <p><b>Rating</b></p>
          <Rate disabled value={props?.record?.rate} style={{ fontSize: 15}} />
        </div>
        <div className="col-12">
            <p><b>Message</b></p>
          <p> {props?.record?.message}</p>
        </div>
    </div>
  );
};

export default ViewReview;
