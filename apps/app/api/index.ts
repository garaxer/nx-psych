const responseBody = <T>(response: Response) => {
  console.log(response);

  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response.json() as Promise<T>;
};

const BASE_URL = 'getmefromenv';

const Services = (token: string, baseUrl = BASE_URL) => ({});

const agent = {
  Services,
};

export default agent;
