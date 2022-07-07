import React, { useRef, useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import {useCookies} from "react-cookie";

//import image
import LivingRoom from "../../Images/LivingRoom.png"

const Login = () => {
    const LoginUrl = "http://localhost:3001/api/user/login";
    const [LoginResult, setLoginResult] = useState();
    const pseudo = useRef();
    const password = useRef();
    const [Cookies, setcookie]= useCookies(["token", "role","username", "id"]);
    const navigate = useNavigate();
  
 // LOGIN
 async function postForm() {
    const userData = {
      pseudo: pseudo.current.value,
      password: password.current.value,
    };

try {
    const res = await axios.post(LoginUrl, userData);
    const result = res.data.message;
    const token = res.data.token;
    const id = res.data.Id;
    const pseudo = res.data.pseudo
    setLoginResult(result);
    if (res.status === 200) {
      setcookie("token", token);
      setcookie("pseudo", pseudo);
      setcookie("id",id);
      
      navigate("/admin", {replace: true})
    }
} catch (err) {
    const error = err.response.data.message;
    setLoginResult(error);
  }
}

    return (
        <div className="container mx-auto">
        <div className="flex justify-center px-6 my-10">
          {LoginResult && (
            <div
              className="bg-black border-t border-b border-blue-500 text-blue-700 px-4 py-3 rounded-lg"
              role="alert"
            >
              <p className="font-bold">{LoginResult}</p>
            </div>
          )}
        </div>
        <div className='h-screen flex bg-gray-bg1'>
        <div className='w-full max-w-md m-auto bg-orange-800 rounded-lg border border-primaryBorder shadow-default py-12 px-14'>
        <img
          src={LivingRoom}
          className=""
          alt="Salon"
        />
        <div>
            <h1 className='text-3xl font-medium text-primary mt-4 mb-12 text-center text-black'>
                Log in to your account 🔐
            </h1>
            </div>
    
            <form>
                <div>
                <label htmlFor='pseudo' className='text-black'>Pseudo</label>
                <br></br>
                    <input
                        type='pseudo'
                        className={'text-black w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4 '}
                        id='pseudo'
                        placeholder='Your Pseudo'
                        ref={pseudo}
                    />
                </div>
                <div>
                    <label htmlFor='password' className='text-black'>Password</label>
                    <input
                        type='password'
                        className={`text-black w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4 text-black`}
                        id='password'
                        placeholder='Your Password'
                        ref={password}
                    />
                </div>             
                <div class='flex justify-center items-center mt-6'>
                <button class="shadow bg-white hover:bg-orange-400 focus:shadow-outline focus:outline-none text-black font-bold py-4 px-4 rounded"
                type="button"
                onClick={postForm}>
                  Login
                </button>
              </div>
    
            </form>
        </div>
    </div>
    </div>
    );
}

export default Login;