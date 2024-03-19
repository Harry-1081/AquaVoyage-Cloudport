import React from 'react';
import { useStates } from '../States';
import { DiApple } from "react-icons/di";
import { FcGoogle } from "react-icons/fc";

function Login() {
    const { handleSignUpClick,handleHomeClick,navigate } = useStates();
    const code = Math.random().toString(36).substring(2,7);

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#000000bb] bg-blend-darken bg-cover" 
    style={{backgroundImage: `url('https://github.com/nive-2003/AAD_PVT/blob/main/src/assets/bg2.jpeg?raw=true')`}}>
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-700 bg-opacity-75 shadow-2xl rounded-2xl p-8 md:p-14">
      <h1 className="text-4xl text-white font-bold mb-3">Welcome Back!</h1>
      <p className="text-gray-100 font-light mb-8">Start your website in seconds. Don’t have an account ?   
      <button onClick={handleSignUpClick} className="text-blue-400 font-semibold pl-[10px] underline underline-offset-2">Sign up</button></p>
      <form onSubmit={()=>handleHomeClick()}>
      <div className="grid gap-y-7 md:grid-cols-2 md:gap-x-8">
        <div>
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
          <input required type="email" id="email" className="bg-gray-50 border border-gray-300 hover:border-blue-500 focus:border-blue-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email Id" />
        </div>
        <div>
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
          <input required type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500" placeholder="Password" />
        </div>
        <div className="flex justify-between items-center">
        <div className="flex items-center">
          <input type="checkbox" id="rememberMe" className="mr-2" />
          <label htmlFor="rememberMe" className="text-sm text-gray-300 font-bold">Remember me</label>
        </div>
        <a href="#" onClick={()=>navigate("/editpw")} className="text-sm text-blue-400 font-bold">Forgot password?</a>
      </div>
      <button className="w-full mt-1 bg-blue-700 text-md xy-9 text-white border-solid border-7 border-black-800 text-md p-2 rounded-lg mb-[15px] hover:bg-green-900 hover:text-blue">
        Sign in with your account
      </button>
        <div className="flex items-center justify-center mb-[40px]">
          <hr className="border-t-2 border-gray-300 w-24" />
          <div className="mx-4 text-gray-400 pb-[5px]">or</div>
          <hr className="border-t-2 border-gray-300 w-24" />
        </div>
      </div>
      </form>
      <button className="w-full border flex justify-center border-gray-300 text-md p-2 rounded-lg mb-6 hover:bg-gray-900 hover:text-white">
        {/* <img src={logo} alt="Google logo" className="w-6 h-6 inline mr-2" /> */}
        <span className="text-gray-200 text-[1.4rem] pr-[9px] pt-[2px]"><FcGoogle/></span>
        <span className="text-gray-200">Sign in with Google</span>
      </button>
      <button className="w-full border flex justify-center border-gray-300 text-md p-2 rounded-lg mb-6 hover:bg-gray-900 hover:text-white">
        {/* <img src={logo} alt="Mac logo" className="w-6 h-6 inline mr-2" /> */}
        <span className="text-gray-200 text-2xl pr-[10px] pb-[5px]"><DiApple/></span>
        <span className="text-gray-200">Sign in with Apple</span>
      </button>
    </div>
  </div>

  );
}

export default Login;