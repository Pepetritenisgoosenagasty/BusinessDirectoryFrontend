import ModalComponent from '@/components/ModalComponent';
import { URL_GET_BUSINESS, URL_REVIEWS } from '@/constants/routes';
import { Table, Tag, Space } from 'antd';
import { Input } from 'antd';
import { useEffect, useState } from 'react';
import { GrView } from 'react-icons/gr';
import ReactStars from "react-rating-stars-component";
import { useDispatch } from 'react-redux';
import { performGetAll } from 'src/redux/actions/apiActionCreators';
import ViewReview from './ViewReview';
import { Rate } from 'antd';
import { formatDateHuman, formatTime } from '@/constants/DateFormat';
import { userData } from 'src/hooks/useLoggInUser';
import { useGetEntity } from 'src/hooks/useGetEntity';


const { Search } = Input;

const ReviewTable = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [title, setTitle] = useState("");
  const [width, setWidth] = useState()
  const [data, setData] = useState()
  const [record, setRecord] = useState({})
  const dispatch = useDispatch()
  
  const fetchReviews = async () => {
    let reviews = await  dispatch(performGetAll(URL_REVIEWS + '?_where[business_id]=ChIJxeyZCXma3w8RKrwetDD3fiw'))
     setData(reviews)
    // console.log(reviews)
  }

  useEffect(() => {
    fetchReviews()
  }, [])

  
  const { user, isLoading, isError } = userData();
  const objData = useGetEntity(URL_GET_BUSINESS  + `?user_id=${user?.id}`)

console.log(objData)


  const showModal = (record) => {
    setIsModalVisible(true);
    setTitle("User Review Info")
    setWidth(600)
    setRecord(record)
  };



  const handleCancel = () => {
    setIsModalVisible(false);
  };



  const Ratings = (props) => {
    const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

    return(
     <span>
        <Rate tooltips={desc} value={props.value} disabled style={{fontSize: 15}} />
        {props.value ? <span className="ant-rate-text">{desc[props.value - 1]}</span> : ''}
      </span>
    )
  }

    const columns = [
      {
        title: '#',
        dataIndex: 'id',
        key: 'id'
      },
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          render: text => <a>{text}</a>,
        },
        {
          title: 'Date & Time',
          dataIndex: 'created_at',
          key: 'time',
          render: (text, record) => formatDateHuman(record.created_at) + "   " + formatTime(record.created_at) ,
        },

        {
          title: 'Rating',
          dataIndex: 'rating',
          key: 'rating',
          render: (text, record) => (<Ratings value={record.rate}/>),
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
              <a onClick={() => showModal(record)}  style={{ color: '#40a9ff'}}>View</a>

            </div>
          ),
        },
      ];

      
      // const data = [
      //   {
      //     key: '1',
      //     name: 'John Brown',
      //     time: "12: 00 PM",
      //     rating: <Ratings value="5"/>,
      //     message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ullam ducimus aliquam animi eius ab repellendus ipsum officia pariatur suscipit, dignissimos tempore delectus veritatis dolore!",
      //   },
      //   {
      //     key: '2',
      //     name: 'Jim Green',
      //     time: "12: 00 PM",
      //     rating:<Ratings value="4"/>,
      //     message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ullam ducimus aliquam animi eius ab repellendus ipsum officia pariatur suscipit, dignissimos tempore delectus veritatis dolore!",
      //   },
      //   {
      //     key: '3',
      //     name: 'Joe Black',
      //     time: "12: 00 PM",
      //     rating: <Ratings value="3"/>,
      //     message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ullam ducimus aliquam animi eius ab repellendus ipsum officia pariatur suscipit, dignissimos tempore delectus veritatis dolore!",
      //   },
      // ];
      

    return (
        <>
        <div className="d-flex justify-content-end px-3 pb-2 review">
        <Search placeholder="Enter Name"  enterButton style={{ width: 400}} />
        </div>
        <div className="">
            <Table columns={columns} dataSource={data} pagination={{ size: "default"}} />
        </div>

        <ModalComponent title={title} visible={isModalVisible} onCancel={handleCancel} modalWidth={width}>
           <ViewReview record={record} />
        </ModalComponent>
        </>
    )
}

export default ReviewTable
