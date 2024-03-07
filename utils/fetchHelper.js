import Cookies from 'js-cookie';

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

export async function customFetch(endpoint, options = {} , isContentType = true) {
  const url = `${baseUrl}${endpoint}`;

  // Retrieve the token from the 'jwt' cookie
  let token = Cookies.get('jwt');
  token = token ? token.replace(/"/g, '') : null;

  const defaultHeaders = {
    'Content-Type': 'application/json',
    ...(token && { Authorization: `Bearer ${token}` }),
  };

  if(!isContentType){
    delete defaultHeaders['Content-Type']
  }

  options.headers = {
    ...defaultHeaders,
    ...options.headers,
  };

  // Perform the fetch request
  const response = await fetch(url, options);
  const responseData = await response.json();

  if(response.status === 401){
    handleLogout()
  }
  if (!response.ok) {
    throw new Error(responseData.error || `Error ${response.status}`);
  }

  const handleLogout = () => {
    Cookies.remove('jwt');
    Cookies.remove('role');
    window.location.href = '/signin'
  };

  return responseData;
}
