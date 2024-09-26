import React from "react";
import InputBox from "../../components/Inputbox";
import { FaUser, FaEnvelope } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import AnimationWrapper from "../../common/page-anime";

const UserAuthForm = ({ type }) => {
  return (
    <AnimationWrapper keyValue={type}>
      <section className="h-cover flex item-center justify-center">
        <form className="w-[80%] max-w-[400px]">
          <h1 className="text-4xl font-gelasio capitalize">
            {type === "sign-in" ? "Welcome back" : "Join us Today"}
          </h1>
          {type !== "sign-in" && (
            <InputBox
              name="fullname"
              type="text"
              placeholder="Full name"
              icon={<FaUser />}
            />
          )}
          <InputBox
            name="email"
            type="email"
            placeholder="Email"
            icon={<FaEnvelope />}
          />
          <InputBox
            name="password"
            type="password"
            placeholder="Password"
            icon={<RiLockPasswordFill />}
          />
          <button className="btn-dark center mt-2" type="submit">
            {type.replace("-", " ")}
          </button>
          <div className="relative w-full flex items-center gap-2 my-10 opacity-50 uppercase text-black font-bold">
            <hr className="w-1/2  border-black" />
            <p>or</p>
            <hr className="w-1/2  border-black" />
          </div>
          <button className="btn-dark flex items-center justify-center gap-2 w-full py-2 text-sm sm:text-base">
            <FcGoogle className="text-lg" />
            <span className="hidden sm:block">Continue with Google</span>
            <span className="block sm:hidden">Continnue with Google</span>
          </button>
          {type == "sign-in" ? (
            <p className="mt-6 text-dark text-sm text-center">
              No Account ?
              <Link to="/signup" className="underline text-black  text-sm ml-1">
                Join Us today!
              </Link>
            </p>
          ) : (
            <p className="mt-6 text-dark text-sm text-center">
              Already a Member ?
              <Link to="/signin" className="underline text-black  text-sm ml-1">
                Sign in Here{" "}
              </Link>
            </p>
          )}
        </form>
      </section>
    </AnimationWrapper>
  );
};

export default UserAuthForm;
