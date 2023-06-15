import React from "react";
import BreadCrumb from "components/BreadCrumb/BreadCrumb";
import Meta from "components/Meta/Meta";
import { Link } from "react-router-dom";
import CustomInput from "components/CustomInput/CustomInput";

const Register = () => {
  return (
    <>
      <Meta title={"Register"} />
      <BreadCrumb title="Register" />

      <div className="login-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3 className="text-center mb-3">Sign Up</h3>
                <form action="" className="d-flex flex-column gap-15">
                  <CustomInput type="text" name="name" placeholder="Name" />
                  <CustomInput type="email" name="email" placeholder="Email" />
                  <CustomInput
                    type="tel"
                    name="mobile"
                    placeholder="Mobile Number"
                  />
                  <CustomInput
                    type="password"
                    name="password"
                    placeholder="Password"
                  />
                  <div>
                    <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                      <button className="button">
                        <span>Register</span>
                      </button>
                      <Link to="/login" className="button register">
                        <span className="text-white">Login</span>
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
