
import { pickBy } from 'lodash';
import ApiService from './Axios/index';
import { endpoint } from './global';

export const getHeaders = (requireAuth = true) => {
  const headers = {
    'Content-Type': 'application/json',
  };
  if (requireAuth) {
    const  accessToken  = localStorage.getItem("accessToken");
    headers.Authorization = `Bearer ${accessToken}`;
  }
  return headers;
};

export const Get = (url, params, requireAuth = true) => {
  params = pickBy(params);
  return ApiService.get(url, {
    headers: getHeaders(requireAuth),
    params,
  });
};

export const Post = (url, data, requireAuth = true) =>
  ApiService.post(url, data, { headers: getHeaders(requireAuth) });

export const Patch = (url, data, requireAuth = true) =>
  ApiService.patch(url, data, { headers: getHeaders(requireAuth) });

export const Delete = (url, requireAuth = true) =>
  ApiService.delete(url, { headers: getHeaders(requireAuth) });


export const UploadImagePost = (url, data, requireAuth = true) =>
  ApiService.post(url, data, {
    headers: {
      ...getHeaders(requireAuth),
      'Content-Type': 'multipart/form-data',
    },
  });

export const getAPIUrl = (url, params = null) =>
  reverse(
    url.split('.').reduce((o, i) => o[i], endpoint),
    params
  );

export const getErrors = (error) => {
  const errorData = error.response.data.error;
  const errors = {};
  Object.keys(errorData).forEach((key) => {
    errors[key] = errorData[key];
  });
  return errors;
};