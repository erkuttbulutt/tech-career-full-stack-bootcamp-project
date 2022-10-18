import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function DetailCustomer() {
  const [detail, setdetail] = useState([{}]);
  let { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://northwind.vercel.app/api/customers/${id}`)
      .then((res) => {
        setdetail(res.data);
      });
  }, []);

  return (
    <>
      <div>
        <h1>Id: {detail.id}</h1>
      </div>
      <div>
        <h1>Company Name: {detail.companyName}</h1>
      </div>
      <div>
        <h1>Contact Name: {detail.contactName}</h1>
      </div>
      <div>
        <h1>contactTitle: {detail.contactTitle}</h1>
      </div>
    </>
  );
}

export default DetailCustomer;
