import axios from 'axios';

const ApiService = axios.create({
  baseURL: 'https://dexonwelcare.com',
});

// Add a request interceptor
ApiService.interceptors.request.use((config) => {
  // Add the timestamp to the headers of the API request
  config.headers['X-Timezone'] = Intl.DateTimeFormat().resolvedOptions().timeZone;
  return config;
});

// Add a response interceptor
ApiService.interceptors.response.use(
  (response) => response,
  (error) => {
    const { status } = error.response;
    // Handle 403 status code
    if (status === 403) {
      // Handle forbidden error
      // eslint-disable-next-line no-console
      console.log('Forbidden error:', error.response.data.error);

      // You can also navigate the user to a login screen or display an error message
    }

    // Handle 401 status code
    if (status === 401) {
      // Handle unauthorized error
      // eslint-disable-next-line no-console
      console.log('Unauthorized error:', error);
      // You can also navigate the user to a login screen or display an error message
    }

    return Promise.reject(error);
  }
);

export default ApiService;