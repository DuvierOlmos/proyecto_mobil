import axios from "axios";
const ApiDelivery = axios.create({
  baseURL: 'http://172.24.240.1:3000/api',
  headers: {
    'Content-Type': 'application/json'
  }
});
export { ApiDelivery };