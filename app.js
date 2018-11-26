const axios = require("axios");
const config = require("./.config");

const makeRequest = async () => {
    const url = config.apiEndpoint;
    try {
      return await axios.get(url, {
        headers: {
          authorization: ""
        }
      });
    } catch (error) {
      console.error("error: ", error);
    }
  };

const getSolunar = async () => {
    const solunarData = await makeRequest();

    if (solunarData) {
        console.log(solunarData.data);
    } else {
        console.log("FAILED");
    }
};
  
getSolunar();