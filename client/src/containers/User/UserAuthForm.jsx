import React from "react";
import InputBox from "../../components/Inputbox";

const UserAuthForm = ({ type }) => {
  return (
    <section className="h-cover flex item-center justify-center">
      <form className="w-[80%] max-4-[400px]">
        <h1 className="text-4xl font-gelasio capitalise">
          {type == "sign-in" ? "Welcomeback" : "Join us Today"}
        </h1>
        {type != "sign-in" ? (
          <InputBox name="fullname" type="text" placeholder="fullname" />
        ) : (
          ""
        )}
      </form>
    </section>
  );
};

export default UserAuthForm;
