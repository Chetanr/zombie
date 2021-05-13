import axios from "axios";
import React, { useState } from "react";

function Hospital() {
  const [hospitals, setHospitals] = useState("");

  const getHospitals = async () => {
    await axios.get("http://localhost:8082/api/hospital").then((res) => {
      console.log(res.data);
      // setHospitals(res);
    });
  };
  return getHospitals();
}

export default Hospital;
