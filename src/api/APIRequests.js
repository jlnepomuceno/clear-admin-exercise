import axios from "axios";
import CacheData from "../cache/data.json";
import { API_SERVER_URL } from "../config/config";


// Get the list of breeds available under the CatsAPI
// then use a callback function to return the response
// to the function call
export function requestData(callback) {
  callback(CacheData.skus)
  // axios
  //   .get(API_SERVER_URL)
  //   .then((response) => {
  //     console.log("meron")
  //     callback(response.skus);
  //   })
  //   .catch((error) => {
  //     if(error.code === "ERR_NETWORK") callback(CacheData.skus);
  //     console.log(
  //       `Error in getting data from the database: ${error.code} | ${error.message}`
  //     );
  //   });
}
