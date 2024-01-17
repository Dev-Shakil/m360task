import { DownOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Dropdown, MenuProps, Space } from 'antd'
import React from 'react'
// const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
//   message.info('Click on left button.');
//   console.log('click left button', e);
// };

const handleMenuClick: MenuProps['onClick'] = (e) => {
  
  console.log('click', e);
};
const TopBar:React.FC = () => {
  
  
  const items: MenuProps['items'] = [
    {
      label: 'English',
      key: '1',
      icon: <UserOutlined />,
    },
    {
      label: 'Bangla',
      key: '2',
      icon: <UserOutlined />,
    },
    
  ];
  
  const menuProps = {
    items,
    onClick: handleMenuClick,
  };
  

  
  return (
    <div className="flex justify-between h-[8vh] px-9 items-center ">
      <div className="font-bold flex justify-between cursor-pointer w-[140px] text-3xl text-[#4E5D78]"><img src="./Paper-Stack.png" alt="logo" />Stack</div>
      <Dropdown menu={menuProps}>
      <Button className="text-sm py-5 w-[140px] text-gray-400 flex justify-cetner items-center rounded-xl bg-[#F0F5FA]">
        <Space className=" flex justify-between w-full">
          English (UK)
          <DownOutlined className="" />
        </Space>
      </Button>
    </Dropdown>
    </div>
  )
}

export default TopBar