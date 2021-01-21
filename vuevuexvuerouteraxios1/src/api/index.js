import axios from '../utils/http'
import base from '../api/base'


const api = {
    /**
     * 登录接口
     */
    login(params) {
        return axios.post(base.baseURL+base.login,params);
    },
    getList(){
        return axios.get(base.baseURL+base.getlist);
    }
}

export default api