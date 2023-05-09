import axios from "axios";

const journalApi = axios.create({
      baseURL: 'https://vue-demos-bde4a-default-rtdb.firebaseio.com'
})

export default journalApi