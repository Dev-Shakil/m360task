import { EllipsisOutlined } from '@ant-design/icons';
import { Button, Dropdown, Form, Input, Menu, Modal, Space, Table, TableProps } from 'antd';
import DashboardLayout from 'components/Layout/DashboardLayout';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useCreateUserMutation, useDeleteUserMutation, useGetUsersQuery, useUpdateUserMutation } from 'services/usersApi';
// import { UserData } from 'types';

type ColumnsType<T extends object> = TableProps<T>['columns'];
type TablePagination<T extends object> = NonNullable<Exclude<TableProps<T>['pagination'], boolean>>;
type TablePaginationPosition = TablePagination<DataType>['position'];



type UserData = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};



interface DataType {
  key: string;
  name: string;
  email: string;
  img: string;
  options: Array<any>;
}



const UsersPage = () => {
  const [createUser] = useCreateUserMutation();
  const [updateUser] = useUpdateUserMutation();
  const [deleteUser] = useDeleteUserMutation();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const handleCreateUser = async () => {
    // Example data for a new user
    const newUserData = {
      name: 'John Doe',
      job: 'Software Developer',
    };
  
    try {
      // Send the POST request to create a new user
      const result = await createUser(newUserData).unwrap();
      if(result){
        toast.success("New User Created Successfully")
      }
      console.log('New user created:', result);
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };
  
  const handleUpdate = async (userId: number) => {
    // Example data for updating a user
    const updatedUserData = {
      id: userId,
      name: 'Updated John Doe',
      job: 'Updated Software Developer',
    };
  
    try {
      // Send the PUT request to update an existing user
      const result = await updateUser(updatedUserData).unwrap();
      if(result){
        toast.success("User Updated Successfully")
      }else{
        toast.error("Opps!! There is an Error!")
      }
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };
  
  const handleRemove = async (userId: number) => {
    try {
      await deleteUser(userId).unwrap();
      toast.success("User Deleted Successfully")
      console.log('User deleted:', userId);
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };
  
  
  const columns: ColumnsType<DataType> = [
    {
      title: '#ID',
      dataIndex: 'key',
      key: 'key',
      render: (text) => <p className="text-xl font-semibold text-gray-500">{text}</p>,
    },
    {
      title: 'USER',
      dataIndex: ['name', 'img'],
      key: 'name',
      render: (_, record: DataType) => (
        <div className="flex items-center gap-x-4">
          <img src={record.img} className="w-[50px] h-[50px] rounded-2xl" alt={record.name} />
          <p className="text-gray-600 font-medium text-lg">{record?.name}</p>
        </div>
      ),
    },
    {
      title: 'EMAIL',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'OPTIONS',
      key: 'id',
      render: (_, record: any) => (
        <Space size="middle">
           <Dropdown overlay={menu(record.id)}>
          <EllipsisOutlined className="text-black font-bold text-2xl" />
        </Dropdown>
          
        </Space>
      ),
    },
  ];
  
  const menu = (recordId:number) => (
    <Menu>
      {/* Add your menu items here */}
      <Menu.Item key="1">
      <button className="bg-blue-200 p-2 font-semibold rounded-lg" onClick={() => handleUpdate(recordId)}>Update User</button>
      </Menu.Item>
      <Menu.Item key="2"><button className="text-red-800 font-semibold" onClick={() => handleRemove(recordId)}>Delete</button></Menu.Item>
      {/* Add more items as needed */}
    </Menu>
  );
  const { data, error, isLoading } = useGetUsersQuery(currentPage);
  console.log(data)
  
  const totalPages= data?.total_pages || 0;
  const perPage = data?.per_page || 0;
  const dataSource: DataType[] = (data?.data || []).map((user: UserData) => ({
    key: user.id.toString(), // Assuming key is a string
    email: user.email,
    name: user.first_name + ' ' + user.last_name,
    img: user.avatar,
    options: [], // Adjust as needed, assuming options is an array
  }));

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <DashboardLayout>
      <div className="px-8">
        <div className="flex justify-between items-center"><h2 className="text-[23px] text-[#323B4B] font-semibold">Users List</h2><button className="bg-blue-200 p-2 font-semibold rounded-lg" onClick={handleCreateUser}>Create User</button></div>
        {
          isLoading? "Loading Users":
          error?(`Getting Error of ${error}`):
          <Table
          columns={columns}
          pagination={{
            position: 'bottomLeft' as unknown as TablePaginationPosition,
            total: totalPages * perPage,
            pageSize: perPage,
            current: currentPage,
            onChange: handlePageChange,
          }}
          dataSource={dataSource || []}
        />
        }
        
      </div>
    </DashboardLayout>
  );
};

export default UsersPage;
