
import { BellOutlined, SearchOutlined } from '@ant-design/icons'
import { Dropdown, Image, MenuProps } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import {useDispatch} from "react-redux"
import { logout } from 'features/authSlice'
const UserTopbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout())
    navigate("/signin")
  }
  const items: MenuProps['items'] = [
    {
      label: <button onClick={handleLogout}>Logout</button>,
      key: '1',
    }
    
  ];
  
  const menuProps = {
    items,
  };
  return (
    <div className="px-8 py-4 flex items-center justify-between w-full ">
        <div className="bg-[#F0F5FA] p-3 w-[540px] flex rounded-lg"><input className="bg-[#F0F5FA] text-gray-400 w-[510px] text-md outline-0" placeholder="Search" /><SearchOutlined className="text-gray-400 text-2xl px-3" /></div>
        <div className="flex items-center gap-3">
            <BellOutlined className="text-3xl text-gray-400" />
            <Dropdown menu={menuProps}>
            <Image
                className="rounded-full object-cover"
                width={60}
                preview={false}
                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            />
            </Dropdown>
            
        </div>
    </div>
  )
}

export default UserTopbar