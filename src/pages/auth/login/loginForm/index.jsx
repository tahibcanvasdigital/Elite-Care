import React,{useEffect} from "react";
import styles from "./Styles.module.css";
import Banner from "../../../../assets/bookAppointmentBanner.png";
import { GoArrowRight } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { loginSliceApi } from "../../../../global/features/Webapp/Auth/loginSlice";
import { toast } from "react-toastify";
const LoginForm = () => {
  
  const [loginValues,setLoginValues] = React.useState({
    email:'',
    password:''
  })
  const {data,success,role,errorMessage,message} = useSelector((value)=>value.loginSlice)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  // Login Handler
  const loginHandler = () => {
    dispatch(loginSliceApi(loginValues)); 
  };
  
  useEffect(() => {
    console.log("success",success,"data",data,"role",role);
    if (success == true) {
        navigate('/elite-care/dashboard/home',{state:data})
        // window.location.href = '/elite-care/dashboard/home'
    }
    
}, [loginHandler]);
  
 
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
                {/* Login Side */}
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
                          placeholder="Enter Your UserName"
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
                          required
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
                        />
                      </div>
                    </div>
                    <div className="col-xl-9 col-lg-9 col-md-9">
                      <div className={styles.inputWrapper1}>
                        <select style={{ width: "100%" }} name="" id="">
                          <option value="Gender" selected>
                            Gernder
                          </option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className={`row ${styles.btnWrapper}`}>
                    <div className="col-xl-12 col-lg-12 col-md-12">
                      <button className={`  ${styles.btnSendMsg}`}>
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
                          onChange={(e)=>{setLoginValues({...loginValues,email:e.target.value})}}
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
                          onChange={(e)=>{setLoginValues({...loginValues,password:e.target.value})}}
                        />
                      </div>
                    </div>
                    {/* </form> */}
                  </div>

                  <div className={`row ${styles.btnWrapper}`}>
                    <div className="col-12">
                      <button type="submit" onClick={()=>loginHandler()} className={` ${styles.btnSendMsg}`}>
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
