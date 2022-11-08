function parseJSON(response) {
  return response.status === 204 ? "" : response.json();
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.status);
  error.response = response;
  throw error;
}
export default function request(url, options) {
  return fetch(url, options).then(checkStatus).then(parseJSON);
}
export const getRequestWhitoutToken = (token = "", method = "GET") => {
  return {
    method,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
};
export const postWithoutToken = (body = {}, method = "POST", headers = {}) => {
  return {
    method,
    headers: {
      ...headers,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  };
};
