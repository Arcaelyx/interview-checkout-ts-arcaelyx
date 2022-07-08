const { REACT_APP_ACCESS_TOKEN: ACCESS_TOKEN } = process.env;

export const options = (method, data, headers = {}) => ({
  method,
  ...(method.toLowerCase() !== 'get' && { body: JSON.stringify(data) }),
  headers: {
    Authorization: `Bearer ${ACCESS_TOKEN}`,
    'Content-Type': 'application/json',
    ...headers
  }
});

export const response = res => res.ok ? res.json() : Promise.reject(new Error(res.statusText));