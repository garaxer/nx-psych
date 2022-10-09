import {
  CreateServiceDto,
  ServiceResponseDto,
} from 'libs/shared-types/src/lib/api/generated';

const BASE_URL = 'http://localhost:3333/api/';

const responseBody = <T>(response: Response) => {
  console.log(response);

  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response.json() as Promise<T>;
};

const responseError = (error: Error) => {
  console.error(error);
  throw error;
};

const requests = (token: string, baseUrl = BASE_URL) => {
  return {
    get: <T>(url: string) =>
      fetch(`${baseUrl}${url}`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
        .then((r) => responseBody<T>(r))
        .catch(responseError),
    post: <INCOMING, OUTGOING>(url: string, body: OUTGOING) =>
      fetch(`${baseUrl}${url}`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(body),
      })
        .then((r) => responseBody<INCOMING>(r))
        .catch(responseError),
    patch: <T>(url: string, body: Record<string, unknown>) =>
      fetch(`${baseUrl}${url}`, {
        method: 'PATCH',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(body),
      })
        .then((r) => responseBody<T>(r))
        .catch(responseError),
  };
};

const Services = (token: string, baseUrl = BASE_URL) => ({
  create: (service: CreateServiceDto) =>
    requests(token, baseUrl).post<ServiceResponseDto, CreateServiceDto>(
      'services/inperson',
      service
    ),
});

const agent = {
  Services,
};

export default agent;
