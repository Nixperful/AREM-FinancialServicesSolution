import axios from "axios";

const client = axios.create({
  baseURL: "https://nz0fk7vh7g.execute-api.us-east-1.amazonaws.com/prod",
  timeout: 5000,
  headers: null
}); 

  export function getFinancialServicesAxiosList(callback) {
    client.get("/financialservices").then(function (response) {
      callback.onSuccess(response);
    })
    .catch(function (error) {
      callback.onFailed(error);
    });
  }

