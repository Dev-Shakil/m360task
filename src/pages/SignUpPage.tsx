import React, {useEffect} from "react";
import AuthLayout from "../components/Layout/AuthLayout";
import { Button, Checkbox, Divider, Form, Input } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import {toast} from "react-toastify"
import { useRegisterUserMutation } from "services/authApi";
// import {useDispatch} from "react-redux"
// import { setUser } from "features/authSlice";

const SignUpPage = () => {
  const navigate = useNavigate();
  const [registerUser,{data,isSuccess,isLoading,isError,error}] = useRegisterUserMutation();
  
  const onFinish = async (values: any) => {
    console.log('Received values of form: ', values);
    
    
      await registerUser(values)
    
  };
  console.log(data)
  useEffect(()=>{
    if(isSuccess){
      toast.success("User Registration Done Successfully")
      
      navigate("/signin")
    }
  },[isSuccess])
  useEffect(() => {
    if (isError) {
      toast.success(`Error : ${error}`)
      
    }
  }, [isError,error])
  return (
    <AuthLayout>
      <div className="min-h-[92vh] gap-y-5 flex w-[540px] mx-auto items-center flex-col">
        <h1 className="font-bold text-[26px] text-[#323B4B]">Sign Up</h1>
        <p className="font-medium text-lg text-[#8A94A6]">
          Create an account to continue!
        </p>
        <div className="flex gap-x-7">
          <Button
            block
            className=" flex gap-5 items-center border-none bg-[#F0F5FA] text-[#8A94A6] py-6 px-8 rounded-xl font-medium text-[16px]"
          >
            <img src="./google.png" alt="Google" />
            Sign In with Google
          </Button>
          <Button
            block
            className="font-medium flex gap-5 items-center border-none bg-[#F0F5FA] py-6 px-8 rounded-xl text-[#8A94A6] text-[16px]"
          >
            <img src="./apple.png" alt="Apple" />
            Sign In with Apple ID
          </Button>
        </div>
        <Divider className="w-full" plain>
          <p className="!text-gray-300 text-lg">OR</p>
        </Divider>

        <Form
          name="normal_login"
          className="w-full"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <div className="flex flex-col gap-y-3">
            <Form.Item
              name="email"
              rules={[
                { required: true, message: "Please input your Valid Email!" },
              ]}
              className="font-medium"
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon mr-3" />}
                type="email"
                className="p-2 h-[48px] text-lg font-medium"
                placeholder="Your Email"
              />
            </Form.Item>
            <Form.Item
              name="name"
              rules={[{ required: true, message: "Please input your name!" }]}
              className="font-medium"
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon mr-3" />}
                type="text"
                className="p-2 h-[48px] text-lg font-medium"
                placeholder="Your Name"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your Password!" },
              ]}
              className="font-medium"
            >
              <Input.Password
                prefix={<LockOutlined className="site-form-item-icon mr-3" />}
                type="password"
                className="p-2 h-[48px] text-lg"
                placeholder="Create Password"
              />
            </Form.Item>
          </div>
          <Form.Item name="remember" valuePropName="checked">
            <Checkbox className="font-medium text-gray-400 text-lg">
              I agree to the Terms & Condition
            </Checkbox>
          </Form.Item>

          <Form.Item>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 text-lg rounded-xl flex items-center justify-center "
            >
              {isLoading?"Loading":"Sign Up"}
            </button>
            <div className="text-center font-medium text-lg text-gray-500 mt-3">
              Already have an account?{" "}
              <Link to="/signin" className="text-blue-600">
                Sign In
              </Link>
            </div>
          </Form.Item>
        </Form>
      </div>
    </AuthLayout>
  );
};

export default SignUpPage;
