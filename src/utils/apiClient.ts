const apiURL = process.env.REACT_APP_API_URL;

export type Params = Record<string, string | number>;

const getSearchParams = (params?: Params) => {
  if (!params) {
    return "";
  }

  let searchParams: Record<string, string> = {};

  for (let key in params) {
    searchParams[key] = `${params[key]}`;
  }

  return `?${new URLSearchParams(searchParams).toString()}`;
};

export const client = async (params?: Params) => {
  const config = {
    method: "GET",
  };

  const searchParams = getSearchParams(params);

  return window
    .fetch(`${apiURL}${searchParams}`, config)
    .then(async (response) => {
      const data = await response.json();
      if (response.ok) {
        return data;
      } else {
        return Promise.reject(data);
      }
    })
    .catch((err) => Promise.reject(err));
};
