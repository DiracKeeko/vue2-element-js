import axios from "axios";

function createInstance() {
  const baseURL = "/api";
  return axios.create({
    baseURL,
    timeout: 60000
  });
}

const instance = createInstance();

instance.interceptors.response.use(
  (response) => {
    const { data: res } = response;
    if (!res || !res.returnInfo || res.returnInfo.returnCode === undefined) {
      if (process.env.NODE_ENV !== "production") {
        console.warn("err response in axios instance->", response);
      }
      return response;
    }
    const { returnInfo, data } = res;

    // 成功的请求直接返回
    if (returnInfo.returnCode === "SUCCESS") {
      return data;
    }

    // 非生产环境，且报错，则在控制台打印异常
    if (process.env.NODE_ENV !== "production") {
      console.warn(`↓ returnCode: ${returnInfo.returnCode} ↓`);
      console.log("err data in axios instance->", res);
    }

    // 失败的请求，抛出异常
    throw { message: { error_message: returnInfo.errorMsg || "未知异常" } };
  },
  (error) => {
    if (axios.isCancel(error)) {
      error.message = "请求取消";
    }
    const errorStatusReg = /^(4|5)0\d$/;
    if (error.response && errorStatusReg.test(error.response.status.toString())) {
      try {
        const responseText = JSON.parse(error.request.responseText || "{}");
        const rqMessage = responseText.rq_message_wrapper || responseText;
        error.message = rqMessage;
      } catch (err) {
        error.message = "服务器出了点小差，请稍后再试";
      }
    }
    if (error.code === "ECONNABORTED") {
      error.message = {
        error_message: `${error.config.timeout}ms 请求${error.config.url}超时，请查看操作是否已成功或刷新重试`
      };
    }
    if (
      error.response &&
      (typeof error.response.data !== "string" || error.response.data.startsWith("<html>"))
    ) {
      error.response.data = error.message;
    }
    return Promise.reject(error);
  }
);

export default instance;
