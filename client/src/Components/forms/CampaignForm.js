import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import UserContext from "../../context/userContext";
import axios from "axios";

axios.defaults.withCredentials = true;

export default function CampaignForm() {
  const { userdata } = useContext(UserContext);
  const [picture, setPicture] = useState("");
  const history = useNavigate();
  const handleChange = (e) => {
    e.preventDefault();
    setPicture(e.target.files[0]);
  };
  const values = {
    title: "",
    description: "",
    enddate: "",
    walletAddress: "",
    category: "",
    campaignGoal: 0,
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: values,
  });

  let startdate = new Date().toISOString().slice(0, 10);

  const onSubmit = async (data) => {
    data.picture = picture;
    data.permission = "pending";
    data.postedBy = userdata._id;
    data.posterName = userdata.name;
    data.startdate = startdate;
    data.posterPic = userdata.picture;
    // console.log(data);
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("enddate", data.enddate);
    formData.append("startdate", data.startdate);
    formData.append("campaignGoal", data.campaignGoal);
    formData.append("postedBy", data.postedBy);
    formData.append("posterName", data.posterName);
    formData.append("walletAddress", data.walletAddress);
    formData.append("permission", data.permission);
    formData.append("category", data.category);
    formData.append("picture", data.picture);
    formData.append("posterPic", data.posterPic);
    // console.log(formData.get("title"));
    // console.log(formData.get("description"));
    // console.log(formData.get("enddate"));
    // console.log(formData.get("startdate"));
    // console.log(formData.get("campaignGoal"));
    // console.log(formData.get("postedBy"));
    // console.log(formData.get("posterName"));
    // console.log(formData.get("walletAddress"));
    // console.log(formData.get("permission"));
    // console.log(formData.get("category"));
    // console.log(formData.get("picture"));
    // console.log(formData.get("posterPic"));
    axios
      .post("http://localhost:3001/funderr/newpost", formData)
      .then((response) => {
        console.log(response);
      })
      .then(
        toast.success("New Campaign Created!", {
          position: toast.POSITION.TOP_LEFT,
        })
      )
      .catch((error) => {
        console.log(error);
        toast.error("Something went wrong!", {
          position: toast.POSITION.TOP_LEFT,
        });
      })
      .finally(() => {
        history("/UserDashboard/AllCampaigns");
      });
  };
  return (
    <div>
      <ToastContainer />
      <div
        className="newcampaigninputs col-6 mx-auto"
        style={{ marginLeft: "5%" }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label
              className="form-label"
              style={{ color: "#242F9B", fontWeight: "bold" }}
            >
              Title
            </label>
            <input
              type="text"
              className="text form-control border-2 "
              style={{ borderRadius: "50px" }}
              {...register("title", { required: "true" })}
            />
            <p>
              {errors.title ? (
                <p style={{ color: "red" }}>This field is required</p>
              ) : null}
            </p>
          </div>
          <div className="mb-3">
            <label
              className="form-label"
              style={{ color: "#242F9B", fontWeight: "bold" }}
            >
              End Date
            </label>
            <input
              type="date"
              className="form-control border-2"
              style={{ borderRadius: "50px" }}
              {...register("enddate", { required: "true" })}
            />
            <p>
              {errors.enddate ? (
                <p style={{ color: "red" }}>This field is required</p>
              ) : null}
            </p>
          </div>
          <div className="mb-3">
            <label
              className="form-label"
              style={{ color: "#242F9B", fontWeight: "bold" }}
            >
              Wallet address
            </label>
            <input
              type="text"
              className="form-control border-2"
              style={{ borderRadius: "50px" }}
              {...register("walletAddress", { required: "true" })}
            />
            <p>
              {errors.walletAddress ? (
                <p style={{ color: "red" }}>This field is required</p>
              ) : null}
            </p>
          </div>
          <div className="mb-3">
            <label
              className="form-label"
              style={{ color: "#242F9B", fontWeight: "bold" }}
            >
              Campaign Goal
            </label>
            <input
              type="number"
              className="form-control border-2"
              style={{ borderRadius: "50px" }}
              {...register("campaignGoal", { required: "true" })}
            />
            <p>
              {errors.campaignGoal ? (
                <p style={{ color: "red" }}>This field is required</p>
              ) : null}
            </p>
          </div>
          <label
            className="form-label"
            style={{ color: "#242F9B", fontWeight: "bold" }}
          >
            Category
          </label>
          <div className="input-group mb-3 ">
            <select
              className="custom-select  border-2 rounded-4"
              style={{
                height: 35,
                width: 300,
                color: "#242F9B",
                fontWeight: "bold",
              }}
              {...register("category", { required: "true" })}
            >
              <option></option>
              <option value="Technical" style={{ fontWeight: "bold" }}>
                Technical
              </option>
              <option value="Art" style={{ fontWeight: "bold" }}>
                Art
              </option>
              <option value="Medical" style={{ fontWeight: "bold" }}>
                Medical
              </option>
              <option value="Music" style={{ fontWeight: "bold" }}>
                Music
              </option>
              <option value="Game" style={{ fontWeight: "bold" }}>
                Game
              </option>
            </select>
          </div>
          <div className="mb-3">
            <label
              className="form-label"
              style={{ color: "#242F9B", fontWeight: "bold" }}
            >
              Campaign Picture
            </label>
            <input
              type="file"
              className="form-control border-2"
              style={{ borderRadius: "50px" }}
              onChange={handleChange}
            />
            <p>
              {errors.file ? (
                <p style={{ color: "red" }}>This field is required</p>
              ) : null}
            </p>
          </div>
          <div className="mb-3">
            <label
              className="form-label"
              style={{ color: "#242F9B", fontWeight: "bold" }}
            >
              Description
            </label>
            <textarea
              type="text"
              className="form-control border-2"
              style={{ borderRadius: "30px", height: 300 }}
              {...register("description", { required: "true" })}
            />
          </div>

          <div
            className="text-center"
            style={{
              width: "100%",
              height: "10%",
              backgroundColor: "#242F9B",
              borderRadius: "50px",
              marginBottom: 20,
            }}
          >
            <button
              type="submit"
              className="btn btn-lg btn-block "
              style={{
                backgroundColor: "#242F9B",
                color: "white",
              }}
            >
              Start Campaign
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
