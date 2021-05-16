// import React from "react";
import axios from "axios";
// import deviceStorage from "../../src/services/deviceStorage";

export let apiConnect = async (methodType, url) => {
  let axiosBuild = {
    method: methodType,
    url: "http://dmmw-api.australiaeast.cloudapp.azure.com:8080/" + url,
  };

  let response;
  try {
    response = await axios(axiosBuild);
    return response;
  } catch (err) {
    if (err.toString() === "Error: Request failed with status code 401") {
      err = "401";
    }
    return err;
  }
};
