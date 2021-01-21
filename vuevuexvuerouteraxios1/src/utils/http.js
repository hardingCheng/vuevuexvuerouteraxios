import axios from 'axios'
import qs from 'querystring'
import store from '../store/index'
import VueRouter from '../router/index'

const router = VueRouter()
const toLogin = () => {
  router.push('/login')
}
const errorHandle = (status,other) => {
    switch(status) {
        case 400:
            toLogin();
            break;
        case 401:
            toLogin();
            break;
        case 403:
            toLogin()
            localStorage.removeItem('token')
            store.state.loginModules.token=null
            break;
        case 404:
            console.log("请求资源不存在");
            break;
        default:
            console.log(other);
            break;
    }
}

var instance = axios.create({
  timeout: 5000
});
//如果后台请求头是别的数据类型
instance.defaults.headers.post["Content-Type"] ="application/x-www-form-urlencoded";
//instance.defaults.headers.common['Authorization'] = store.getters['loginModules/getToken']
// 添加请求拦截器
instance.interceptors.request.use(
  function(config) {
    // 在发送请求之前做些什么
    if(config.method === 'post'){
        config.data = qs.stringify(config.data)
    }
    const getToken = store.getters['loginModules/getToken']
    if(getToken){
      config.headers.Authorization = getToken;
    }
    return config;
  },
  function(error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
instance.interceptors.response.use(
  res => res.status === 200 ? Promise.resolve(res) : Promise.reject(res),
  error => {
      const {response} = error;
      if(response){
        errorHandle(response.status,response.data.message);
          return Promise.reject(response);
      }else{
          console.log("断网了");
      }
  }
);
export default instance