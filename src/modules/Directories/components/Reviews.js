import { formatDateHuman } from "@/constants/DateFormat";
import { Comment, Tooltip, List } from "antd";
import Avatar from "antd/lib/avatar/avatar";
import moment from "moment";
import { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";

const Reviews = (props) => {
  const [listData, setListData] = useState([]);

  useEffect(() => {
    setListData(props?.data?.data);
  }, [props?.data]);

  // console.log(props)

  return (
    <div>
      {props?.data?.data?.length > 0 ? (
        <List
          className="comment-list"
          header={`${props.data?.data?.length} reviews`}
          itemLayout="horizontal"
          dataSource={listData}
          renderItem={(item) => (
            <li>
              <Comment
                actions={<span key="comment-list-reply-to-0">Reply to</span>}
                author={<a>{item.name}</a>}
                avatar={
                  <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}> 
                     {item.name.charAt(0)}
              {item.name.charAt(0)}
                  </Avatar>
                }
                content={
                  <>
                    <ReactStars
                      count={5}
                      // onChange={ratingChanged}
                      value={item.rate}
                      size={20}
                      isHalf={true}
                      emptyIcon={<i className="far fa-star"></i>}
                      halfIcon={<i className="fa fa-star-half-alt"></i>}
                      fullIcon={<i className="fa fa-star"></i>}
                      activeColor="#ffd700"
                      edit={false}
                    />
                    <p>{item.message}</p>
                  </>
                }
                datetime={
                  <Tooltip title="">
                    <span>{formatDateHuman(item.created_at)}</span>
                  </Tooltip>
                }
              />
            </li>
          )}
        />
      ) : (
        <h5>No Reviews</h5>
      )}
    </div>
  );
};

export default Reviews;
