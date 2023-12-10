import React from "react";
import { useRouter } from "next/router";
import logo from "../../public/logo3.jpeg";
import Image from "next/image"; 


const Navbar = () => {
  const router = useRouter();

  const signupHandler = () => {
    router.push("/form");
  };

  return (
    <nav className="bg-inherit py-5">
      <div className="flex justify-between w-[90%] mx-auto items-center text-white font-Grotesk">
        <Image src={logo} width={200} height={100} />
        <ul className="flex gap-10 font-sans hover:font-serif text-[#F098FA] text-2xl">
          <li> <pre>Home          </pre> </li>
          <li> <pre>Contact       </pre> </li>
          <li> <pre>About Us      </pre> </li>
        </ul>
        <div className="flex gap-3">
          <button
            
            className="border py-2 px-10 rounded-full bg-gray-700  font-semibold"
            style={{display: 'flex', alignItems: 'center', verticalAlign: 'center', padding: '5px'}}
          > <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 24 24">
          <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.6,5,2.5,9.3,6.9,10.7v-2.3c0,0-0.4,0.1-0.9,0.1c-1.4,0-2-1.2-2.1-1.9 c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1c0.4,0,0.7-0.1,0.9-0.2 c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6c0,0,1.4,0,2.8,1.3 C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4c0.7,0.8,1.2,1.8,1.2,3 c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v3.3c4.1-1.3,7-5.1,7-9.5C22,6.1,16.9,1.4,10.9,2.1z"></path>
      </svg>
      <a href='https://github.com/login/oauth/authorize/?client_id=67c903430d27689e0214&prompt=consent'>Sign in with GitHub</a>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
