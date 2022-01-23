//import store from "../store/store";
let BucketUrl = "https://storage.googleapis.com/test-bucket-sc";
let BaseURL = "https://premium-node-265413.rj.r.appspot.com";
//let BaseURL = "http://localhost:82";
const fetch = require("node-fetch");
exports.serverCallApiUrl = () => {
  return BaseURL;
};
exports.bucketurl = () => {
  return BucketUrl;
};
async function internalServerCall(url, requestOptions, baseUrl) {
  const response = await fetch(baseUrl ? baseUrl + url : url, requestOptions);
  const text = await response.text();
  if (!response.ok) {
    const data = text && JSON.parse(text);
    const error =
      (data && data.error) || (data && data.message) || response.statusText;
    return Promise.reject(error);
  }
  const data = text && JSON.parse(text);
  if (data.error || data.result === "Error") {
    return Promise.reject(data.error ? data.error : "Error inesperado");
  } else {
    return Promise.resolve(data);
  }
}

exports.serverCallGet = (url, params, BaseUrl = BaseURL) => {
  var tmp = url;
  if (params) {
    tmp = tmp + "?";
    Object.keys(params).forEach((key) => {
      if (params[key] != null) {
        tmp =
          tmp +
          encodeURIComponent(key) +
          "=" +
          encodeURIComponent(params[key]) +
          "&";
      }
    });
    tmp = tmp.substring(0, tmp.length - 1);
  }

  const requestOptions = {
    method: "GET",
    headers: {
      Authorization: "Bearer " + store.getState().auth.authToken,
      "Content-Type": "application/json",
    },
  };
  return internalServerCall(tmp, requestOptions, BaseUrl);
};

exports.serverCallPost = (url, token,data, params, BaseUrl = BaseURL) => {
  var tmp = url;
  if (params) {
    tmp = tmp + "?";
    Object.keys(params).forEach((key) => {
      if (params[key] != null) {
        tmp =
          tmp +
          encodeURIComponent(key) +
          "=" +
          encodeURIComponent(params[key]) +
          "&";
      }
    });
    tmp = tmp.substring(0, tmp.length - 1);
  }
  const requestOptions = {
    method: "POST",
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  return internalServerCall(tmp, requestOptions, BaseUrl);
};

exports.serverCallPut = (url, data,token, BaseUrl = BaseURL) => {
  const requestOptions = {
    method: "PUT",
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  return internalServerCall(url, requestOptions, BaseUrl);
};

exports.serverCallDelete = (url, data, params, BaseUrl = BaseURL) => {
  const requestOptions = {
    method: "DELETE",
    headers: {
      Authorization: "Bearer " + store.getState().auth.authToken,
      "Content-Type": "application/json",
    },
  };
  return internalServerCall(url, requestOptions, BaseUrl);
};
