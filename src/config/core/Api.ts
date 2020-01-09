import apisauce from "apisauce";

const baseURL = "http://192.168.1.112/mediaworld/api";

const getApiSauceBaseJson = apisauce.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

const getApiSauceBase = apisauce.create({
  baseURL,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    Accept: "application/json",
  },
});

const getApiAuthSauceBase = apisauce.create({
  baseURL,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    Accept: "application/json",
    withCredentials: true,
  },
});

const Api = {
  postNoAuthJson(path: string, data: object | any = null) {
    return getApiSauceBaseJson.post(path, data);
  },

  postNoAuth(path: string, data: object | any = null) {
    return getApiSauceBase.post(path, data);
  },

  postAuth(path: string, userToken: string = "", data: object | any = null) {
    let headers = { Authorization: "bearer " + userToken };
    return getApiAuthSauceBase.post(path, data, { headers });
  },

  get(path: string, userToken: string = "", data: object | any = null) {
    let headers = { Authorization: "bearer " + userToken };
    return getApiAuthSauceBase.get(path, data, { headers });
  },

  patch(path: string, userToken: string = "", data: object | any = null) {
    let headers = { Authorization: "bearer " + userToken };
    return getApiAuthSauceBase.patch(path, data, { headers });
  },

  del(path: string, userToken: string = "", data: object | any = null) {
    let headers = { Authorization: "bearer " + userToken };
    return getApiAuthSauceBase.delete(path, data, { headers });
  },
};

export default Api;
