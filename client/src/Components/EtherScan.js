import React, { useEffect, useState } from "react";
import axios from "axios";
let balance;

const EtherScan = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        "/api?module=account&action=balance&address=0x64AEc3c1FC908Bc1F8b7162B7E379dD01b933667&tag=latest&apikey=1DWRED6I53RQBVTGUG9TKUC1GG8TTTIH25"
      )
      .then((res) => {
        const data = res.data;
        setData(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  console.log("Data: ", data);
  balance = data.result/1000000000000000000
  return (
    <>
      <h1>EtherScan</h1>
      <h2>Balance: {balance} Eth</h2>
    </>
  );
};

export default EtherScan;