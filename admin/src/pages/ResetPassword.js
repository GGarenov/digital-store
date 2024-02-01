import React from "react";
import CustomInput from "../components/CustomInput";

const ResetPassword = () => {
  return (
    <div className="py-5" style={{ background: "#ffd333", minHeight: "100vh" }}>
      <br />
      <br />
      <br />
      <br />
      <div className="my-5 w-25 bg-white rounded-3 mx-auto p-4">
        <h3 className="text-center">Reset Password</h3>
        <p className="text-center">Enter your email to reset your password</p>
        <form>
          <CustomInput type="text" label="email" id="email" />
          <button
            className="border-0 px-3 py-2 text-white fw-bold w-100"
            style={{ background: "#ffd333" }}
            type="submit"
          >
            Reset password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
