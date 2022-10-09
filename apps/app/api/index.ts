import {
  CreateServiceDto,
  ServiceResponseDto,
} from 'libs/shared-types/src/lib/api/generated';

const responseBody = <T>(response: Response) => {
  console.log(response);

  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response.json() as Promise<T>;
};

const BASE_URL = 'getmefromenv';

const f: ServiceResponseDto = {
  id: '',
  name: '',
  price: 0,
  description: '',
  image: '',
  longDescription: '',
  created_at: '',
  updated_at: '',
  type: 'remote',
};

const Services = (token: string, baseUrl = BASE_URL) => ({
  create: (service: CreateServiceDto) => f,
});

const agent = {
  Services,
};

export default agent;
