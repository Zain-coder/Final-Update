import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";

axios.defaults.withCredentials = true;

export default function SignUpform() {
  const [picture, setPicture] = useState("");
  const history = useNavigate();
  const handleChange = (e) => {
    e.preventDefault();
    setPicture(e.target.files[0]);
  };
  const values = {
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: values,
  });
  const onSubmit = async (data) => {
    data.picture = picture;
    data.role = "user";
    // console.log(data);
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("role", data.role);
    formData.append("picture", picture);
    // console.log(formData.get("name"));
    // console.log(formData.get("email"));
    // console.log(formData.get("password"));
    // console.log(formData.get("role"));
    // console.log(formData.get("picture"));
    await axios
      .post("http://localhost:3001/funderr/register", formData)
      .then((response) => console.log(response.data))
      .then(
        toast.success("Signed Up Successfully!", {
          position: toast.POSITION.TOP_LEFT,
        })
      )
      .finally(() => {
        setTimeout(() => {
          history("/login");
        }, 3000);
      });
  };
  return (
    <div>
      <ToastContainer />
      <div className="col" style={{ marginLeft: "10%", marginTop: "4%" }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label
              className="form-label"
              style={{ color: "#242F9B", fontWeight: "bold" }}
            >
              Name
            </label>
            <input
              type="text"
              className="emailbox form-control border-2 "
              style={{ borderRadius: "50px" }}
              {...register("name", { required: true })}
            />
            <p>
              {errors.Name ? (
                <p style={{ color: "red" }}>This field is required</p>
              ) : null}
            </p>
          </div>
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
          <div className="mb-3">
            <label
              className="form-label"
              style={{ color: "#242F9B", fontWeight: "bold" }}
            >
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control border-2"
              style={{ borderRadius: "50px" }}
              {...register("confirmpassword", { minLength: 2 })}
            />
            <p>
              {errors.ConfirmPassword ? (
                <p style={{ color: "red" }}>This field is required</p>
              ) : null}
            </p>
          </div>
          <div className="mb-3">
            <label
              className="form-label"
              style={{ color: "#242F9B", fontWeight: "bold" }}
            >
              Profile Picture
            </label>
            <input
              type="file"
              className="form-control border-2"
              style={{ borderRadius: "50px" }}
              name="picture"
              onChange={handleChange}
            />
          </div>

          <div
            style={{
              width: "100%",
              height: "10%",
              backgroundColor: "#242F9B",
              borderRadius: "50px",
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
              Sign Up
            </button>
          </div>
          <div style={{fontWeight:"bold", color:"#242f9b", fontSize:"15px", marginTop:"1rem", cursor:"pointer"}} onClick={()=>{history("/login")}}>Already a User? Sign In here</div>
        </form>

        <p
          className="text-start"
          style={{
            fontWeight: "bold",
            marginTop: "1rem",
            color: "#242F9B",
            fontSize: 20,
          }}
        >
          Or Sign Up With
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
