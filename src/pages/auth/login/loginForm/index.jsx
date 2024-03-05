import React, { useEffect } from "react";
import styles from "./Styles.module.css";
import Banner from "../../../../assets/bookAppointmentBanner.png";
import { GoArrowRight } from "react-icons/go";
import { useDispatch, useSelector } from "react-redux";
import { loginSliceApi } from "../../../../global/features/Webapp/Auth/loginSlice";
import { toast } from "react-toastify";
import { signUpApi } from "../../../../global/features/Webapp/Auth/signUpSlice";
import { useNavigate } from "react-router-dom";
const LoginForm = () => {
  const [loginValues, setLoginValues] = React.useState({
    email: "",
    password: "",
  });
  const [signUpValue, setSignUpValue] = React.useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });
  const navigate = useNavigate();
  const { success, message, errorTrue } = useSelector(
    (value) => value.loginSlice
  );
  const { Success, Message } = useSelector((value) => value.signUpSlice);
  const dispatch = useDispatch();

  // Login Handler
  const loginHandler = () => {
    dispatch(loginSliceApi(loginValues));
  };

  // SignUp Handler

  const signupHandler = () => {
    dispatch(
      signUpApi({
        name: signUpValue.name,
        email: signUpValue.email,
        password: signUpValue.password,
        confirmPassword: signUpValue.confirmPassword,
        gender: signUpValue.gender,
      })
    );
    setSignUpValue({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      gender: "",
    });
  };
  // SignIn UseEffect
  useEffect(() => {
    if (success == true || errorTrue == true) {
      toast.success(message, {
        position: "top-center",
      });
      // navigate('/elite-care/dashboard/home',{state:data})
      window.location.href = "/elite-care/dashboard/home";
    } else if (success == null) {
      return;
    } else {
      toast.error(message, { position: "top-center" });
    }
  }, [success, errorTrue]);

  // SignUp UseEffect
  useEffect(() => {
    if (Success == true) {
      toast.success(Message, {
        position: "top-center",
      });
    } else if (Success == null) {
      return;
    } else {
      toast.error(Message, {
        position: "top-center",
      });
    }
  }, [Success]);

  return (
    <div className="container">
      <div
        className={`row justify-content-center ${styles.mainAppointmentWrapper}`}
      >
        <div className="col-xl-5 col-lg-5 col-md-5">
          <div className={styles.leftSideWrapper}>
            <div className={styles.imgContainer}>
              <img src={Banner} alt="" />
            </div>
          </div>
        </div>
        <div className="col-xl-7 col-lg-7 col-md-7 " id={styles.tabbtn}>
          <div className="mx-5 mt-5">
            {/* MESSAGE */}
            {/* {isLoading && <Loader/>} */}
            <ul class="nav nav-tabs" id="myTab" role="tablist">
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link active"
                  id="signup-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#home-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="home-tab-pane"
                  aria-selected="true"
                >
                  Signup
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="login-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#profile-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="profile-tab-pane"
                  aria-selected="false"
                >
                  Login{" "}
                </button>
              </li>
            </ul>
            <div class="tab-content" id="myTabContent">
              <div
                class="tab-pane fade show active"
                id="home-tab-pane"
                role="tabpanel"
                aria-labelledby="home-tab"
                tabindex="0"
              >
                {/* SignUp Side */}
                <div className={styles.rightSide}>
                  <p className={styles.heading}>Signup Here</p>
                  <div className={`row ${styles.formWrapperUpper1}`}>
                    <div className="col-xl-9 col-lg-9 col-md-9">
                      <div className={styles.inputWrapper1}>
                        <input
                          style={{ width: "100%" }}
                          type="text"
                          name=""
                          id=""
                          placeholder="Enter Your Username"
                          value={signUpValue.name}
                          onChange={(e) => {
                            setSignUpValue({
                              ...signUpValue,
                              name: e.target.value,
                            });
                          }}
                        />
                      </div>
                    </div>
                    <div className="col-xl-9 col-lg-9 col-md-9">
                      <div className={styles.inputWrapper1}>
                        <input
                          style={{ width: "100%" }}
                          type="email"
                          name=""
                          id=""
                          placeholder="Enter Your Email Address"
                          value={signUpValue.email}
                          onChange={(e) => {
                            setSignUpValue({
                              ...signUpValue,
                              email: e.target.value,
                            });
                          }}
                        />
                      </div>
                    </div>
                    <div className="col-xl-9 col-lg-9 col-md-9">
                      <div className={styles.inputWrapper1}>
                        <input
                          style={{ width: "100%" }}
                          type="password"
                          name=""
                          id=""
                          placeholder="Enter Your Password"
                          value={signUpValue.password}
                          onChange={(e) => {
                            setSignUpValue({
                              ...signUpValue,
                              password: e.target.value,
                            });
                          }}
                        />
                      </div>
                    </div>
                    <div className="col-xl-9 col-lg-9 col-md-9">
                      <div className={styles.inputWrapper1}>
                        <input
                          style={{ width: "100%" }}
                          type="password"
                          name=""
                          id=""
                          placeholder="Enter Your Confirm Password"
                          value={signUpValue.confirmPassword}
                          onChange={(e) => {
                            setSignUpValue({
                              ...signUpValue,
                              confirmPassword: e.target.value,
                            });
                          }}
                        />
                      </div>
                    </div>
                    <div className="col-xl-9 col-lg-9 col-md-9">
                      <div className={styles.inputWrapper1}>
                        <select
                          value={signUpValue.gender}
                          onChange={(e) => {
                            setSignUpValue({
                              ...signUpValue,
                              gender: e.target.value,
                            });
                          }}
                          style={{ width: "100%" }}
                          name=""
                          id=""
                        >
                          <option value="Gender" selected>
                            Gender
                          </option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className={`row ${styles.btnWrapper}`}>
                    <div className="col-xl-12 col-lg-12 col-md-12">
                      <button
                        onClick={signupHandler}
                        className={`  ${styles.btnSendMsg}`}
                      >
                        Signup <GoArrowRight />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="profile-tab-pane"
                role="tabpanel"
                aria-labelledby="profile-tab"
                tabindex="0"
              >
                {/* Login Side */}
                <div className={styles.rightSide}>
                  <p className={styles.heading}>Login Here</p>
                  <div className={`row ${styles.formWrapperUpper1}`}>
                    {/* <form action=""> */}
                    <div className="col-xl-9 col-lg-9 col-md-9">
                      <div className={styles.inputWrapper1}>
                        <input
                          style={{ width: "100%" }}
                          type="email"
                          name=""
                          id=""
                          required
                          placeholder="Enter Your Email Address"
                          value={loginValues.email}
                          onChange={(e) => {
                            setLoginValues({
                              ...loginValues,
                              email: e.target.value,
                            });
                          }}
                        />
                      </div>
                    </div>
                    <div className="col-xl-9 col-lg-9 col-md-9">
                      <div className={styles.inputWrapper1}>
                        <input
                          style={{ width: "100%" }}
                          type="password"
                          name=""
                          id=""
                          required
                          placeholder="Enter Your Password"
                          value={loginValues.password}
                          onChange={(e) => {
                            setLoginValues({
                              ...loginValues,
                              password: e.target.value,
                            });
                          }}
                        />
                      </div>
                    </div>
                    {/* </form> */}
                  </div>

                  <div className={`row ${styles.btnWrapper}`}>
                    <div className="col-12">
                      <button
                        type="submit"
                        onClick={() => loginHandler()}
                        className={` ${styles.btnSendMsg}`}
                      >
                        Login <GoArrowRight />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
