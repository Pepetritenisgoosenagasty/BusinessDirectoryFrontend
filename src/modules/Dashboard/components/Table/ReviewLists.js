import { formatDateHuman, formatTime } from '@/constants/DateFormat';
import { URL_REVIEWS } from '@/constants/routes';
import { Table, Rate } from 'antd';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { performGetAll } from 'src/redux/actions/apiActionCreators';



const ReviewLists = () => {
  const dispatch = useDispatch()
  const [data, setData] = useState()

  const fetchReviews = async () => {
    let reviews = await  dispatch(performGetAll(URL_REVIEWS + '?_where[business_id]=ChIJxeyZCXma3w8RKrwetDD3fiw'))
     setData(reviews)
    console.log(reviews)
  }

  useEffect(() => {
    fetchReviews()
  }, [])


    const dataSource = [
        {
          key: '1',
          name: 'Mike',
          time: "12: 00 AM",
          rate: <Rate disabled defaultValue={4} style={{fontSize: 15}} />,
        },
        {
          key: '2',
          name: 'John',
          time: "12: 00 AM",
          rate: <Rate disabled defaultValue={2} style={{fontSize: 15}}/>,
        },
        {
            key: '3',
            name: 'John',
            time: "12: 00 AM",
            rate: <Rate disabled defaultValue={4} style={{fontSize: 15}}/>,
          },
          {
            key: '4',
            name: 'John',
            time: "12: 00 AM",
            rate: <Rate disabled defaultValue={1} style={{fontSize: 15}}/>,
          },
          {
            key: '5',
            name: 'John',
            time: "12: 00 AM",
            rate: <Rate disabled defaultValue={3} style={{fontSize: 15}}/>,
          },
          
      ];
      
      const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
         
        },
        {
          title: 'Requested Time',
          dataIndex: 'time',
          key: 'time',
          align: 'center',
          render: (text, record) => formatDateHuman(record.created_at) + ",   " + formatTime(record.created_at) 
        },
        {
          title: 'Rate',
          dataIndex: 'rate',
          key: 'rate',
          align: 'center',
          render: (text, record) => <Rate disabled value={record?.rate} style={{fontSize: 15}}/>
        },
      ];

    return (
        <div className="p-2">
            <Table dataSource={data} columns={columns} />
        </div>
    )
}

export default ReviewLists
