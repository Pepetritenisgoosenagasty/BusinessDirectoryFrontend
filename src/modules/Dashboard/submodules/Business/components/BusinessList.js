import ModalComponent from '@/components/ModalComponent';
import { URL_GET_BUSINESS, PAGE_EDIT_BUSINESS } from '@/constants/routes';
import { Table, Popconfirm } from 'antd';
import { Input } from 'antd';
import { useEffect, useState } from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import ReactStars from "react-rating-stars-component";
import { useDispatch } from 'react-redux';
import { performDelete, performGetAll } from 'src/redux/actions/apiActionCreators';
import { Rate } from 'antd';
import { formatDateHuman, formatTime } from '@/constants/DateFormat';
import { userData } from 'src/hooks/useLoggInUser';
import { useGetEntity } from 'src/hooks/useGetEntity';
import Link from "next/link"
import View from './View';
import { Spinner } from '@/components/Spinner';
import { useRouter } from 'next/router';
import { phoneNumberFormatter } from 'src/utils/filterKeyCodes';


const { Search } = Input;

const BusinessTable = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [dataLoading, setDataLoading] = useState(false)
  const [title, setTitle] = useState("");
  const [width, setWidth] = useState()
  const [data, setData] = useState()
  const [record, setRecord] = useState({})
  const dispatch = useDispatch()
  const router = useRouter()
  let { query:{id} } = router;
  
  const { user } = userData(id);
  // const fetchBusiness = async () => {
  //   let business = await  dispatch(performGetAll(URL_GET_BUSINESS + `?_where[user_id]=`+ user?.id))
  //    setData(business)
  //   // console.log(business
  // }



  // useEffect(() => {
  //   if(user) {
  //     fetchBusiness()
  //   }
  // }, [user?.id])


  const BD = useGetEntity(URL_GET_BUSINESS + `?_where[user_id]=`+ user?.id);

  useEffect(() => {
    setData(BD?.details?.data)
  }, [BD?.details?.data])

  const showModal = (record) => {
    setIsModalVisible(true);
    setTitle("Business Info")
    setWidth(800)
    setRecord(record)
  };

  

  const handleCancel = () => {
    setIsModalVisible(false);
  };


const handleDelete = (record) => {
  try {
    setDataLoading(true)
    dispatch(performDelete(URL_GET_BUSINESS + `/${record?.id}`)).finally(() => {
      setDataLoading(false)
      BD?.refetchEntity()
    });
   } catch (error) {
     console.log(error)
   }
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
          title: 'Category',
          dataIndex: 'category',
          key: 'category',
        
        },
        {
          title: 'Phone NUmner',
          dataIndex: 'phone_number',
          key: 'phone_number',
          render: (text, record) => phoneNumberFormatter(record?.phone_number)
         
        },
        {
          title: 'Phone Email',
          dataIndex: 'email',
          key: 'email',
         
        },
        {
          title: 'City',
          dataIndex: 'city',
          key: 'city',
         
        },
        {
          title: 'Address',
          key: 'address',
          dataIndex: 'address'
        },
        // {
        //   title: 'Description',
        //   key: 'description',
        //   dataIndex: 'description',
        //   width: 300
        // },
        {
          title: 'Action',
          key: 'action',
          render: (text, record) => (
            <div className="viewBtn d-flex ">
            <div>
            <Link href={PAGE_EDIT_BUSINESS + "/" + record?.id}>
             <a  className="text-success">Edit</a>
             </Link>
            </div>
              <div  className="mx-2">
              <a onClick={() => showModal(record)}  style={{ color: '#40a9ff'}}>View</a>
              </div>
              <div>
              <Popconfirm
                className="delete"
                title="Are you sure?"
                onConfirm={() => handleDelete(record)}
              >
              <a className="text-danger">Delete</a>
              </Popconfirm>
              </div>
            </div>
          ),
        },
      ];


    return (
        <>
        <div className="d-flex justify-content-end px-3 pb-2 review">
        <Search placeholder="Enter Name"  enterButton style={{ width: 400}} />
        </div>
        <div className="">
          {/* <Spinner spinner={!isLoading}> */}
            <Table loading={dataLoading} columns={columns} dataSource={data} pagination={{ size: "default"}} />

          {/* </Spinner> */}
        </div>

        <ModalComponent title={title} visible={isModalVisible} onCancel={handleCancel} modalWidth={width}>
          <View record={record}/>
        </ModalComponent>
        </>
    )
}

export default BusinessTable