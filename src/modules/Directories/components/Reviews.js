import { Comment, Tooltip, List } from "antd";
import Avatar from "antd/lib/avatar/avatar";
import moment from "moment";
import { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";

const Reviews = (props) => {
  const [listData, setListData] = useState([]);

  useEffect(() => {
    setListData(props?.data?.result?.reviews);
  }, []);

  return (
    <div>
      {props?.data?.result?.reviews.length > 0 ? (
        <List
          className="comment-list"
          header={`${props.data?.result?.reviews.length} reviews`}
          itemLayout="horizontal"
          dataSource={listData}
          renderItem={(item) => (
            <li>
              <Comment
                actions={<span key="comment-list-reply-to-0">Reply to</span>}
                author={<a>{item.author_name}</a>}
                avatar={
                  <Avatar src={item.profile_photo_url} alt={item.author_name} />
                }
                content={
                  <>
                    <ReactStars
                      count={5}
                      // onChange={ratingChanged}
                      value={item.rating}
                      size={20}
                      isHalf={true}
                      emptyIcon={<i className="far fa-star"></i>}
                      halfIcon={<i className="fa fa-star-half-alt"></i>}
                      fullIcon={<i className="fa fa-star"></i>}
                      activeColor="#ffd700"
                      edit={false}
                    />
                    <p>{item.text}</p>
                  </>
                }
                datetime={
                  <Tooltip title={moment().format("YYYY-MM-DD HH:mm:ss")}>
                    <span>{item.relative_time_description}</span>
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
