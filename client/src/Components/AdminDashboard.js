import React, { useContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import UserContext from "../context/userContext";
import Avatar from "@mui/material/Avatar";
import Navbar from "./Navbar";

const AdminDashboard = () => {
  const { token, userdata, setToken, setUserData } = useContext(UserContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    setUserData(null);
    setToken(null);
    navigate("/login");
  };
  return (
    <>
      <Navbar />
      <div className="newSideBar">
        <div className="row">
          <div
            className="col-2"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#242f9b",
              height: "100vh",
              position: "sticky",
              top: 0,
              borderRadius: "0.5rem 1.5rem 1.5rem 0.5rem",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    color: "white",
                    textDecoration: "none",
                    cursor: "pointer",
                    marginTop:"2rem"
                  }}
                  onClick={() => navigate("Profile")}
                >
                  <Avatar
                    src={userdata.picture}
                    alt="UserPic"
                    sx={{
                      width: 100,
                      height: 100,
                    }}
                  />
                </div>
              </div>
              <div
                style={{
                  color: "white",
                  textDecoration: "none",
                  cursor: "pointer",
                  marginBottom: "1.5rem",
                  fontSize: "18px",
                  fontWeight: "bold",
                }}
                onClick={() => navigate("Profile")}
              >
                {userdata.name}
              </div>
              <button
                className="btn btn-primary"
                onClick={() => navigate("AdminAllCampaigns")}
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: "1rem",
                }}
              >
                All Campaigns
              </button>
              <button
                className="btn btn-primary"
                onClick={() => navigate("AdminAllUsers")}
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: "1rem",
                }}
              >
                All Users
              </button>
              <button
                className="btn btn-primary"
                // onClick={() => navigate("FavCampaigns")}
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: "1rem",
                }}
              >
                Fav Campaigns
              </button>
              <button
                className="btn btn-primary"
                // onClick={() => navigate("NewCampaign")}
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: "1rem",
                }}
              >
                Create Campaign
              </button>
              <button
                className="btn btn-primary"
                // onClick={() => navigate("MyTransactions")}
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: "1rem",
                }}
              >
                My Transactions
              </button>
              <button
                className="btn btn-primary"
                onClick={handleLogout}
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: "8rem",
                }}
              >
                LogOut
              </button>
            </div>
          </div>
          <div className="col-10">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
