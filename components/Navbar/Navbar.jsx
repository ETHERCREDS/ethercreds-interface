import React from "react";
import { useRouter } from "next/router";
import logo from "../../public/logo.png";
import Image from "next/image";
import { redirect } from 'next/navigation'


const Navbar = () => {
  const router = useRouter();

  const signupHandler = () => {
    redirect('https://github.com/login/oauth/authorize/?client_id=67c903430d27689e0214')
    // router.push("/form");
  };

  return (
    <nav className="bg-inherit py-5">
      <div className="flex justify-between w-[90%] mx-auto items-center text-white font-Grotesk">
        <Image src={logo} width={200} height={100} />
        <ul className="flex gap-10">
          <li>Home</li>
          <li>Contact</li>
          <li>About Us</li>
        </ul>
        <div className="flex gap-3">
          {/* <button className="border border-gray-400 py-2 px-10 rounded-full bg-black text-white font-semibold">
            Login
          </button> */}
          {/* <button
          on
            // onClick={signupHandler}
            onClick = {router.push('https://github.com/login/oauth/authorize/?client_id=67c903430d27689e0214')}
            className="border py-2 px-10 rounded-full bg-gray-700  font-semibold"
          >
            Signup
          </button> */}
          <a href='https://github.com/login/oauth/authorize/?client_id=67c903430d27689e0214&prompt=consent'>Sign in with GitHub</a>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
