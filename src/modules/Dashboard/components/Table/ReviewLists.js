import { formatDateHuman, formatTime } from '@/constants/DateFormat';
import { URL_GET_BUSINESS, URL_REVIEWS } from '@/constants/routes';
import { Table, Rate } from 'antd';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useGetEntity } from 'src/hooks/useGetEntity';
import { userData } from 'src/hooks/useLoggInUser';
import { performGetAll } from 'src/redux/actions/apiActionCreators';



const ReviewLists = () => {
  const dispatch = useDispatch()
  const [data, setData] = useState()
  const [businessData, setBusinessData] = useState()

  const { user } = userData();

  const fetchBusinessId = async () => {
    let businessData = await  dispatch(performGetAll(URL_GET_BUSINESS + '?_where[user_id]='+user?.id))
    setBusinessData(businessData[0]?.place_id)
    // console.log(reviews)
  }

  // console.log(businessData)

  const reviews = useGetEntity(URL_REVIEWS + '?_where[business_id]='+ businessData);
  
  

  useEffect(() => {
    if(user) {
      fetchBusinessId()
    }
  }, [user])

  useEffect(() => {
    setData(reviews?.details?.data)
  }, [reviews?.details?.data])


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
