import axios from "axios";

const client = axios.create({
  baseURL: "http://localhost:8080/api",
  timeout: 5000,
  headers: null
}); 

  export function getFinancialServicesAxiosList(callback) {
    client.get("/financialServices").then(function (response) {
      callback.onSuccess(response);
    })
    .catch(function (error) {
      callback.onFailed(error);
    });
  }

