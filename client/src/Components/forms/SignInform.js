import React, { useState, useEffect, useContext } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import UserContext from "../../context/userContext";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import LoginIcon from "@mui/icons-material/Login";

let Usertoken;
axios.defaults.withCredentials = true;

export default function SignInform() {
  const { token, userdata, setToken, setUserData } = useContext(UserContext);
  const history = useNavigate();
  const [user, setUser] = useState({});
  const values = {
    email: "",
    password: "",
  };
  const success = () => {
    toast.success("Successfully Logged In!", {
      position: toast.POSITION.TOP_LEFT,
    });
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: values,
  });
  const onSubmit = async (data) => {
    console.log(data);
    await axios
      .post("http://localhost:3001/funderr/auth", data)
      .then((result) => {
        Usertoken = result.data;
        setToken(Usertoken);
      })
      .catch((error) => {
        console.log(error);
        toast.error("Wrong Email or Password", {
          position: toast.POSITION.TOP_LEFT,
        });
      });
    await axios
      .get("http://localhost:3001/funderr/currentuser", {
        headers: {
          "x-auth-token": Usertoken,
        },
      })
      .then((result) => {
        success();
        const newUser = result.data;
        // console.log("Result.Data: ", newUser);
        setUser(newUser);
        setUserData(newUser);
        setTimeout(() => {
          newUser.role === "admin"
            ? history("/AdminDashboard/AdminAllCampaigns", { replace: true })
            : history("/UserDashboard/AllCampaigns", { replace: true });
        }, 3000);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    // console.log("UseEffect Called");
    // console.log("User: ", user);
    // console.log("Token: ", token);
    // console.log("UserData: ", userdata);
  }, [user, userdata, token]);

  return (
    <div>
      <ToastContainer />
      <div className="col" style={{ marginLeft: "10%", marginTop: "10%" }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label
              className="form-label"
              style={{ color: "#242F9B", fontWeight: "bold" }}
            >
              Email address
            </label>
            <input
              type="email"
              className="emailbox form-control border-2 "
              style={{ borderRadius: "50px" }}
              {...register("email", { required: true })}
            />
            <p>
              {errors.Email ? (
                <p style={{ color: "red" }}>This field is required</p>
              ) : null}
            </p>
          </div>
          <div className="mb-3">
            <label
              className="form-label"
              style={{ color: "#242F9B", fontWeight: "bold" }}
            >
              Password
            </label>
            <input
              type="password"
              className="form-control border-2"
              style={{ borderRadius: "50px" }}
              {...register("password", { minLength: 2 })}
            />
            <p>
              {errors.Password ? (
                <p style={{ color: "red" }}>This field is required</p>
              ) : null}
            </p>
          </div>

          <div
            style={{
              width: "100%",
              height: "10%",
              backgroundColor: "#242F9B",
              borderRadius: "50px",
              color: "white",
            }}
          >
            <button
              type="submit"
              className="btn btn-lg btn-block"
              style={{
                backgroundColor: "#242F9B",
                color: "white",
              }}
            >
              Sign In
            </button>
            <LoginIcon />
          </div>
          <div style={{fontWeight:"bold", color:"#242f9b", fontSize:"15px", marginTop:"1rem", cursor:"pointer"}} onClick={()=>{history("/SignUp")}}>Not A User? Sign Up here</div>
        </form>
        <div>
          <p
            className="text-start"
            style={{
              fontWeight: "bold",
              marginTop: "1.5rem",
              color: "#242F9B",
              textDecorationLine: "underline",
            }}
          >
            Forgot Password?
          </p>
        </div>
        <p
          className="text-start"
          style={{
            fontWeight: "bold",
            marginTop: "1rem",
            color: "#242F9B",
            fontSize: 20,
          }}
        >
          Or Sign In With
        </p>
        <h1 className="text-start">
          <div>
            <FcGoogle />
            <BsFacebook style={{ margin: "1rem", color: "#242F9B" }} />
          </div>
        </h1>
      </div>
    </div>
  );
}
