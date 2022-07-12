const { REACT_APP_ACCESS_TOKEN: ACCESS_TOKEN } = process.env;

const options = (method, data, headers = {}) => ({
  method,
  ...(method.toLowerCase() !== 'get' && { body: JSON.stringify(data) }),
  headers: {
    Authorization: `Bearer ${ACCESS_TOKEN}`,
    'Content-Type': 'application/json',
    ...headers
  }
});

const response = res => res.ok ? res.json() : Promise.reject(new Error(res.statusText));

export default {
  get: url => fetch(url, options('GET', {})).then(response),
  delete: (url, data = {}) => fetch(url, options('DELETE'), data).then(response),
  post: (url, data = {}) => fetch(url, options('POST', data)).then(response)
}