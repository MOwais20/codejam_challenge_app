import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import logpic from "../images/login.jpg";
import { Link } from "react-router-dom";
import Input from "@mui/material/Input";

import { signIn } from "../config/firebase";
import { signUp } from "../config/firebase";

export default function FormPropsTextFields() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [showPassword, setshowPassword] = React.useState(false);

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    signIn(email, password)
      .then((res) => {
        if (res?._tokenResponse?.refreshToken) {
          localStorage.setItem("Auth_Token", res._tokenResponse.refreshToken);
          navigate("/");
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  const handleSignup = (e) => {
    e.preventDefault();
    signUp(email, password)
      .then((res) => {
        if (res?._tokenResponse?.refreshToken) {
          localStorage.setItem("Auth_Token", res._tokenResponse.refreshToken);
          navigate("/");
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="w-full h-screen flex bg-[#D9E8FB]">
      {/* <img className='w-[100px] lg:w-[200px] h-[200px] absolute' src={logo} alt="" srcset="" /> */}
      <div className=" bg-gray-100 grid grid-cols-1 md:grid-cols-2 m-auto h-[92vh] shadow-lg sm:max-w-[990px] rounded-2xl">
        <div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, duration: 0.6 }}
          exit={{ opacity: 0 }}
          className="p-6 px-16 w-full"
        >
          <h2 className="font-bold text-2xl text-[#004CAE]">Authentication</h2>
          <p className="text-sm mt-4 text-[#004CAE] ">
            If you already a member, easily log in
          </p>
          <form action="" className="flex flex-col gap-[2.75vh]">
            <Input
              required
              className="px-4 py-[1.50vh] rounded-xl mt-[4vh]"
              type="text"
              placeholder="Email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              required
              type={showPassword ? "text" : "password"}
              className="px-4 py-[1.50vh] rounded-xl"
              placeholder="Password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {/* <p className='text-[#004CAE]' ><input type="checkbox" className='mr-2' />Are you visitor?</p> */}
            <button
              onClick={handleSignup}
              className="bg-[#00ae3a] rounded-xl text-white py-3 font-bold hover:scale-105 duration-100 "
            >
              SignUp
            </button>
            <div className="grid grid-cols-3 items-center text-gray-500">
              <hr className="border-gray-500" />
              <p className="text-center">OR</p>
              <hr className="border-gray-500" />
            </div>
            <button
              onClick={handleLogin}
              className="bg-[#004CAE] rounded-xl text-white py-3 font-bold hover:scale-105 duration-100 "
            >
              Login
            </button>
          </form>
          {/* <div className="mt-10 grid grid-cols-3 items-center text-gray-500">
              <hr className='border-gray-500' />
              <p className='text-center'>OR</p>
              <hr c />
            </div> */}
          <p className="text-sm text-[#004CAE] hover:cursor-pointer mt-[2.50vh] hover:font-semibold duration-200 inline-block">
            Forgot Your Password?
          </p>
          <hr className="text-[#004CAE] mt-[2.50vh]" />
          <div className="mt-[2.50vh] text-sm flex justify-between items-center">
            <p>Don't have an account?</p>
            <Link to="/signUp">
              <button className="px-8 py-2 border rounded-xl bg-[#D9E8FB] hover:scale-110 duration-100">
                Register
              </button>
            </Link>
          </div>
        </div>
        <div className="hidden md:block w-full h-[92vh] p-6">
          <img className="rounded-2xl w-full h-full" src={logpic} alt="" />
        </div>
      </div>
    </div>

    // <Box
    //   component="form"
    //   sx={{
    //     "& .MuiTextField-root": { m: 1, width: "25ch" },
    //   }}
    //   noValidate
    //   autoComplete="off"
    // >
    //   <TextField
    //     required
    //     id="outlined-required"
    //     value={email}
    //     onChange={(e) => setEmail(e.target.value)}
    //     label="Username"
    //     defaultValue="Hello World"
    //   />

    //   <TextField
    //     required
    //     value={password}
    //     onChange={(e) => setPassword(e.target.value)}
    //     id="outlined-required"
    //     label="Password"
    //     defaultValue="Hello World"
    //   />
    //   <Button onClick={handleSubmit} variant="contained">
    //     Contained
    //   </Button>
    // </Box>
  );
}
