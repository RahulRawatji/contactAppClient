import axios from 'axios';

axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

// const localUrl = "http://localhost:3100"
const devurl = "https://kisan-contact-app.herokuapp.com"
const callApi = async (url, payload={},method="get") => {
  const fullUrl = devurl + url
  const response = await axios({
    method,
    url: fullUrl,
    data: payload
  }); 
  return response.data;
}

export default callApi;