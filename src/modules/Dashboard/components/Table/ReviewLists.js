import { Table, Rate } from 'antd';



const ReviewLists = () => {

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
          align: 'center'
        },
        {
          title: 'Rate',
          dataIndex: 'rate',
          key: 'rate',
          align: 'center'
        },
      ];

    return (
        <div className="p-2">
            <Table dataSource={dataSource} columns={columns} />
        </div>
    )
}

export default ReviewLists
