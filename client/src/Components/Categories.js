import React from "react";
import Navbar from "./Navbar";
import medical from "../images/medical.jpg";
export default function Categories() {
  return (
    <div>
      <Navbar />
      <div>
        {" "}
        <div className="container">
          <div className="row mt-5">
            <div className="col">
              <div
                className="card"
                style={{ width: "80%", borderRadius: "50px" }}
              >
                <img
                  src={medical}
                  className="card-img-top"
                  alt="..."
                  style={{ borderRadius: "50px" }}
                />
                <div
                  className="card-body "
                  style={{
                    backgroundColor: "#242F9B",
                    color: "white",

                    borderBottomLeftRadius: "50px",
                    borderBottomRightRadius: "50px",
                  }}
                >
                  <p className="card-text text-center">Medical</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div
                className="card"
                style={{ width: "80%", borderRadius: "50px" }}
              >
                <img
                  src={medical}
                  className="card-img-top"
                  alt="..."
                  style={{ borderRadius: "50px" }}
                />
                <div
                  className="card-body "
                  style={{
                    backgroundColor: "#242F9B",
                    color: "white",

                    borderBottomLeftRadius: "50px",
                    borderBottomRightRadius: "50px",
                  }}
                >
                  <p className="card-text text-center">Medical</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div
                className="card"
                style={{ width: "80%", borderRadius: "50px" }}
              >
                <img
                  src={medical}
                  className="card-img-top"
                  alt="..."
                  style={{ borderRadius: "50px" }}
                />
                <div
                  className="card-body "
                  style={{
                    backgroundColor: "#242F9B",
                    color: "white",

                    borderBottomLeftRadius: "50px",
                    borderBottomRightRadius: "50px",
                  }}
                >
                  <p className="card-text text-center">Medical</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mt-5">
          <div className="row">
            <div className="col">
              <div
                className="card"
                style={{ width: "80%", borderRadius: "50px" }}
              >
                <img
                  src={medical}
                  className="card-img-top"
                  alt="..."
                  style={{ borderRadius: "50px" }}
                />
                <div
                  className="card-body "
                  style={{
                    backgroundColor: "#242F9B",
                    color: "white",

                    borderBottomLeftRadius: "50px",
                    borderBottomRightRadius: "50px",
                  }}
                >
                  <p className="card-text text-center">Medical</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div
                className="card"
                style={{ width: "80%", borderRadius: "50px" }}
              >
                <img
                  src={medical}
                  className="card-img-top"
                  alt="..."
                  style={{ borderRadius: "50px" }}
                />
                <div
                  className="card-body "
                  style={{
                    backgroundColor: "#242F9B",
                    color: "white",

                    borderBottomLeftRadius: "50px",
                    borderBottomRightRadius: "50px",
                  }}
                >
                  <p className="card-text text-center">Medical</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div
                className="card"
                style={{ width: "80%", borderRadius: "50px" }}
              >
                <img
                  src={medical}
                  className="card-img-top"
                  alt="..."
                  style={{ borderRadius: "50px" }}
                />
                <div
                  className="card-body "
                  style={{
                    backgroundColor: "#242F9B",
                    color: "white",

                    borderBottomLeftRadius: "50px",
                    borderBottomRightRadius: "50px",
                  }}
                >
                  <p className="card-text text-center">Medical</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
