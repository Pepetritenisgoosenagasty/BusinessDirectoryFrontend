import { formatDateHuman } from "@/constants/DateFormat";
import { Comment, Tooltip, List } from "antd";
import Avatar from "antd/lib/avatar/avatar";
import moment from "moment";
import { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";

const Reviews = (props) => {
  const [listData, setListData] = useState([]);

  useEffect(() => {
    setListData(props?.data);
  }, [props?.data]);

  // console.log(props)

  return (
    <div>
      {props?.data?.length > 0 ? (
        <List
          className="comment-list"
          header={`${props.data.length} ${props.data.length > 1 ? 'reviews': 'review'}`}
          itemLayout="horizontal"
          dataSource={listData}
          renderItem={(item) => (
            <li>
              <Comment
                actions={<span key="comment-list-reply-to-0">Reply to</span>}
                author={<a>{item.attributes.name}</a>}
                avatar={
                  <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}> 
                     {item.attributes.name.charAt(0)}
              {item.attributes.name.charAt(0)}
                  </Avatar>
                }
                content={
                  <>
                    <ReactStars
                      count={5}
                      // onChange={ratingChanged}
                      value={item.attributes.rate}
                      size={20}
                      isHalf={true}
                      emptyIcon={<i className="far fa-star"></i>}
                      halfIcon={<i className="fa fa-star-half-alt"></i>}
                      fullIcon={<i className="fa fa-star"></i>}
                      activeColor="#ffd700"
                      edit={false}
                    />
                    <p>{item.attributes.message}</p>
                  </>
                }
                datetime={
                  <Tooltip title="">
                    <span>{formatDateHuman(item.attributes.created_at)}</span>
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
