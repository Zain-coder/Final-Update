import React, { useState } from "react";
import { ethers } from "ethers";
import { useForm } from "react-hook-form";
export default function Donateform({ walletAddress }) {
  const [txs, setTxs] = useState([]);

  const startPayment = async ({ setTxs, ether, addr }) => {
    try {
      if (!window.ethereum)
        throw new Error("No crypto wallet found. Please install it.");

      await window.ethereum.send("eth_requestAccounts");
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      ethers.utils.getAddress(addr);
      const tx = await signer.sendTransaction({
        to: addr,
        value: ethers.utils.parseEther(ether),
      });
      console.log({ ether, addr });
      console.log("tx", tx);
      setTxs([tx]);
    } catch (err) {
      console.log("Error: ", err);
    }
  };

  console.log("WA:", walletAddress);
  const value = {
    To: walletAddress,
  };
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: value,
  });
  const onSubmit = async (data) => {
    await startPayment({
      setTxs,
      ether: data.Amount,
      addr: data.To,
    });
  };
  return (
    <div>
      <div
        class="container"
        style={{ justifyContent: "center", alignItem: "center" }}
      >
        <div class="col" style={{ marginLeft: "5%", marginTop: "10%" }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div class="mb-3">
              <label
                for="exampleInputEmail1"
                class="form-label"
                style={{ color: "#242F9B", fontWeight: "bold" }}
              >
                To
              </label>
              <input
                type="text"
                class="text form-control border "
                style={{ borderRadius: "50px" }}
                {...register("To", { required: "true" })}
              />
              <p>
                {errors.To ? (
                  <p style={{ color: "red" }}>This field is required</p>
                ) : null}
              </p>
            </div>
            {/* <div class="mb-3">
              <label
                class="form-label"
                style={{ color: "#242F9B", fontWeight: "bold" }}
              >
                From
              </label>
              <input
                type="text"
                class="form-control border"
                style={{ borderRadius: "50px" }}
                {...register("From", { required: "true" })}
              />
              <p>
                {errors.From ? (
                  <p style={{ color: "red" }}>This field is required</p>
                ) : null}
              </p>
            </div> */}
            <div class="mb-3">
              <label
                class="form-label"
                style={{ color: "#242F9B", fontWeight: "bold" }}
              >
                Amount
              </label>
              <input
                type="text"
                class="form-control border"
                style={{ borderRadius: "50px" }}
                {...register("Amount", { required: "true" })}
              />
              <p>
                {errors.Amount ? (
                  <p style={{ color: "red" }}>This field is required</p>
                ) : null}
              </p>
            </div>
            <p>
              Terms & Conditions are that the user is agreed to donate the
              desired amount to the other person which cannot be returned back.
              It is the basic policy of website. Also, the amount shared on
              wrong address cannot be returned. Kindly make sure the given
              detail is correct.
            </p>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
                {...register("TermsConditions", { required: "true" })}
              />

              <label class="form-check-label" for="flexCheckDefault">
                <p>
                  I agree to{" "}
                  <text
                    style={{ fontWeight: "bold", textDecoration: "underline" }}
                  >
                    Terms & Conditions
                  </text>
                </p>
              </label>
            </div>
            <p>
              {errors.TermsConditions ? (
                <p style={{ color: "red" }}>This field is required</p>
              ) : null}
            </p>

            <div style={{ display: "flex", justifyContent: "center" }}>
              <div
                class="text-center"
                style={{
                  width: "30%",
                  height: "10%",
                  backgroundColor: "#242F9B",
                  borderRadius: "50px",
                  alignSelf: "center",
                }}
              >
                <button
                  type="submit"
                  class="btn btn-lg btn-block "
                  style={{
                    backgroundColor: "#242F9B",
                    color: "white",
                  }}
                >
                  Donate
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
