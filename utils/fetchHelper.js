import Cookies from 'js-cookie';

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

export async function customFetch(endpoint, options = {}) {
  const url = `${baseUrl}${endpoint}`;

  // Retrieve the token from the 'jwt' cookie
  let token = Cookies.get('jwt');
  token = token ? token.replace(/"/g, '') : null;
  const defaultHeaders = {
    'Content-Type': 'application/json',
    ...(token && { Authorization: `Bearer ${token}` }),
  };

  options.headers = {
    ...defaultHeaders,
    ...options.headers,
  };

  // Perform the fetch request
  const response = await fetch(url, options);
  const responseData = await response.json();

  if (!response.ok) {
    throw new Error(responseData.error || `Error ${response.status}`);
  }

  return responseData;
}
