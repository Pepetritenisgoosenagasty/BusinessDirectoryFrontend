import ModalComponent from '@/components/ModalComponent';
import { Table, Tag, Space } from 'antd';
import { Input } from 'antd';
import { useState } from 'react';
import { GrView } from 'react-icons/gr';
import ReactStars from "react-rating-stars-component";
import ViewReview from './ViewReview';


const { Search } = Input;

const ReviewTable = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [title, setTitle] = useState("");
  const [width, setWidth] = useState()


  const showModal = () => {
    setIsModalVisible(true);
    setTitle("View Review")
    setWidth(600)
  };



  const handleCancel = () => {
    setIsModalVisible(false);
  };



  const Ratings = (props) => (
    <div>
       <ReactStars
        count={5}
        // onChange={ratingChanged}
        value={props.value}
        size={15}
        isHalf={true}
        emptyIcon={<i className="far fa-star"></i>}
        halfIcon={<i className="fa fa-star-half-alt"></i>}
        fullIcon={<i className="fa fa-star"></i>}
        activeColor="#ffd700"
        edit={false}
      />
    </div>
  )

    const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          render: text => <a>{text}</a>,
        },
        {
          title: 'Requested Time',
          dataIndex: 'time',
          key: 'time',
        },
        {
          title: 'Rating',
          dataIndex: 'rating',
          key: 'rating',
        },
        {
          title: 'Message',
          key: 'message',
          dataIndex: 'message',
          width: 600
        },
        {
          title: 'Action',
          key: 'action',
          render: (text, record) => (
            <div className="viewBtn">
              <a onClick={showModal}  style={{ color: '#40a9ff'}}>View</a>

            </div>
          ),
        },
      ];

      
      const data = [
        {
          key: '1',
          name: 'John Brown',
          time: "12: 00 PM",
          rating: <Ratings value="5"/>,
          message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ullam ducimus aliquam animi eius ab repellendus ipsum officia pariatur suscipit, dignissimos tempore delectus veritatis dolore!",
        },
        {
          key: '2',
          name: 'Jim Green',
          time: "12: 00 PM",
          rating:<Ratings value="4"/>,
          message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ullam ducimus aliquam animi eius ab repellendus ipsum officia pariatur suscipit, dignissimos tempore delectus veritatis dolore!",
        },
        {
          key: '3',
          name: 'Joe Black',
          time: "12: 00 PM",
          rating: <Ratings value="3"/>,
          message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ullam ducimus aliquam animi eius ab repellendus ipsum officia pariatur suscipit, dignissimos tempore delectus veritatis dolore!",
        },
      ];
      

    return (
        <>
        <div className="d-flex justify-content-end px-3 pb-2 review">
        <Search placeholder="Enter Name" onSearch="" enterButton style={{ width: 400}} />
        </div>
        <div className="">
            <Table columns={columns} dataSource={data} pagination={{ size: "default"}} />
        </div>

        <ModalComponent title={title} visible={isModalVisible} onCancel={handleCancel} modalWidth={width}>
           <ViewReview />
        </ModalComponent>
        </>
    )
}

export default ReviewTable
