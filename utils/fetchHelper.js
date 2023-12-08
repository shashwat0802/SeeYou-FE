const baseUrl = process.env.NEXT_PUBLIC_API_URL;

export async function customFetch(endpoint, options = {}) {
  const url = `${baseUrl}${endpoint}`;

  const defaultHeaders = {
    'Content-Type': 'application/json',
  };

  options.headers = {
    ...defaultHeaders,
    ...options.headers,
  };

  // Perform the fetch request
  const response = await fetch(url, options);
  return response.json();
}
