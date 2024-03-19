import React,{ useState }  from 'react';
import { useStates } from '../States';
import { DiApple } from "react-icons/di";
import { FcGoogle } from "react-icons/fc";


function Signup() {

    const { handleSignInClick } = useStates();

  const [termsAgreed, setTermsAgreed] = useState(false);
  const [emailUpdates, setEmailUpdates] = useState(false);

  const handleTermsChange = () => {
    setTermsAgreed(!termsAgreed);
  };

  const handleEmailUpdatesChange = () => {
    setEmailUpdates(!emailUpdates);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  
  


  return (
    <div className="flex items-center justify-center min-h-screen bg-[#000000bb] bg-blend-darken bg-cover" 
    style={{backgroundImage: `url('https://github.com/nive-2003/AAD_PVT/blob/main/src/assets/bg2.jpeg?raw=true)`}}>

    <div className="absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-700 h-[730px] bg-opacity-75 shadow-2xl rounded-2xl p-8 md:p-14">
      <h1 className="text-4xl text-white font-bold mt-0 mb-2">Create your Free Account!</h1>
      <p className="text-gray-100 font-light mb-8">Start your website in seconds. Already have an account? 
      <button onClick={handleSignInClick} className="text-blue-400 font-semibold pl-[10px] underline underline-offset-2">Sign In</button></p>
      <form onSubmit={handleFormSubmit}>

      <div className="grid gap-y-7 md:grid-cols-2 md:gap-x-8">
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 dark:text-white">Email</label>
          <input type="email" id="email" className="bg-gray-50 border border-gray-300 hover:border-blue-500 focus:border-blue-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email Id" required />
        </div>
        <div>
          <label htmlFor="username" className="block  text-sm font-medium text-gray-300 dark:text-white">User name</label>
          <input type="text" id="text" className="bg-gray-50 border border-gray-300 hover:border-blue-500 focus:border-blue-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="User name" required />
        </div>
        
        <section className='flex justify-between'>
            <div>
            <label htmlFor="password" className="block  text-sm font-medium text-gray-300 dark:text-white">Password</label>
            <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-[200px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500" placeholder="Password" required />
            </div>
            <div>
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-300 dark:text-white">Confirm Password</label>
            <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-[200px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500" placeholder="Password" required />
            </div>
        </section>
        {/* Add country dropdown */}
        {/* <div>
          <label htmlFor="country" className="block mb-2 text-sm font-medium text-gray-300 dark:text-white">Country</label>
          <select id="country" className="bg-gray-50 border  border-gray-300 hover:border-blue-500 focus:border-blue-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 block w-[200px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option value="">Select Country</option>
            <option value="usa">USA</option>
            <option value="uk">UK</option>
            <option value="canada">Canada</option>
          </select>
        </div> */}

        <div className="flex items-center mt-[-10px] mb-[10px] justify-center">
          <hr className="border-t-2 border-gray-300 w-24" />
          <div className="mx-1 mb-2 text-gray-400 pt-[2px]">or</div>
          <hr className="border-t-2 border-gray-300 w-24" />
        </div>
      </div>
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
      
       {/* Terms agreement checkbox */}
       <div>
            <label className="block mb-2 text-sm font-medium text-gray-300 dark:text-white">
              <input type="checkbox" checked={termsAgreed} onChange={handleTermsChange} className="mr-2" />
              I agree to BeachOram’s 
              {/* <Link to="/terms" className="text-blue-500">Terms of Use</Link> and <Link to="/privacy" className="text-blue-500">Privacy Policy.</Link> */}
            </label>
          </div>
          {/* Email updates checkbox */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-300 dark:text-white">
              <input type="checkbox" checked={emailUpdates} onChange={handleEmailUpdatesChange} className="mr-2" />
              Email me about product updates and resources.
            </label>
          </div>
      <button className="w-full mt-2 bg-blue-600 text-md xy-9 text-white border-solid border-7 border-blue-800 text-md p-2 rounded-lg mb-6 hover:bg-blue-700 hover:text-blue">
        Create account
      </button>
      </form>
    </div>
    

  </div>

  );
}

export default Signup;