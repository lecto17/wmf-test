import axios, { all } from "axios";

axios.defaults.baseURL = process.env.REACT_APP_BASEURL;
axios.defaults.withCredentials = true;

export default function* rootSaga() {
    yield all();
}