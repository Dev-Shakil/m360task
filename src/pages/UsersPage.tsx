import { Space, Table, TableProps, } from 'antd'
import DashboardLayout from 'components/Layout/DashboardLayout'
import React from 'react'

type ColumnsType<T extends object> = TableProps<T>['columns'];
type TablePagination<T extends object> = NonNullable<Exclude<TableProps<T>['pagination'], boolean>>;
type TablePaginationPosition = TablePagination<DataType>['position'];

interface DataType {
  key: string;
  name: string;
  email:string;
  img:string;
  options:Array<any>;
}
const columns: ColumnsType<DataType> = [
  {
    title: '#ID',
    dataIndex: 'key',
    key: 'key',
    render: (text) => <p className="text-xl font-semibold text-gray-500">{text}</p>,
  },
  {
    title: 'USER',
    dataIndex: ['name','img'],
    key: 'name',
    render: (_,record) => <div className="flex items-center gap-x-4"><img src={record.img} className="w-[50px] h-[50px] rounded-2xl" alt={record.name} /><p className="text-gray-600 font-medium text-lg">{record.name}</p></div>,
  },
  {
    title: 'EMAIL',
    dataIndex: 'email',
    key: 'email',
  },
 
  {
    title: 'OPTIONS',
    key: 'options',
    render: (_, record) => (
      <Space size="middle">
  {record.options.map((option, index) => (
    <button key={index}>{option}</button>
  ))}
</Space>
    ),
  },
];

const data: DataType[] = [
  {
    key: '1',
    name: 'John Brown',
    email: 'john.brown@gmail.com',
    img:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    options:["hello", "world"],
  },
  {
    key: '2',
    name: 'John Brown 2',
    email: 'john2.brown@gmail.com',
    img:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    options:["hello", "world"],
  },
  {
    key: '3',
    name: 'John Brown 3',
    email: 'john3.brown@gmail.com',
    img:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    options:["hello", "world"],
  },
  
];
const UsersPage = () => {
  return (
    <DashboardLayout>
      <div className="px-8">
        <h2 className="text-[23px] text-[#323B4B] font-semibold">Users List</h2>

        <Table
          columns={columns}
          pagination={{ position: "bottomLeft" as unknown as TablePaginationPosition }}
          dataSource={data}
        />
      </div>
    </DashboardLayout>
  )
}

export default UsersPage