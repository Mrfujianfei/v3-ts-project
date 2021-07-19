import axios from 'axios';

const API_BASE_URL: any = import.meta.env.VITE_API_BASE_URL;

const instance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 20000,
});

// 添加请求拦截器
instance.interceptors.request.use(
  (response) => {
    // 设置token等...
    response.headers.token = 11;
    return response;
  },

  /**
   * 根据你的项目实际情况来对 config 做处理
   * 这里对 config 不做任何处理，直接返回
   */
  (error) => Promise.reject(error)
);

// 添加响应拦截
axios.interceptors.response.use(
  (response) =>
    /**
     * 做一些可定制化的数据处理操作
     */
    response,
  (error) => {
    const { code } = error.response.status;
    /**
     * 做一些全局的错误处理操作
     */
    switch (code) {
      case 401:
        /** 权限处理 */
        break;
      case 500:
        break;
      default:
        break;
    }
    return Promise.reject(error);
  }
);

export default axios;
