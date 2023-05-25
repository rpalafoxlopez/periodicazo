import axios from "axios";

const authApi = axios.create({
      baseURL: 'https://identitytoolkit.googleapis.com/v1/accounts',
      params:{
            key:'AIzaSyAkNFvWX2ccEq3u8DFzn_sr3C1NCz8HDYY'
      }
      //signUp?key=AIzaSyAkNFvWX2ccEq3u8DFzn_sr3C1NCz8HDYY
})


export default authApi