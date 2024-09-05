

import axios from "axios";


var appAxios= axios.create({
    baseURL:"http://127.0.0.1:3000"
})


export default appAxios