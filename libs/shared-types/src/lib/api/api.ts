import axiosBackendClient, { axiosBaseUrl } from '../axios/axios-client';
import { DefaultApi, Configuration } from './generated';

const configuration: Configuration = {
  basePath: axiosBaseUrl,
  isJsonMime: () => false,
};

export const defaultApi = new DefaultApi(
  configuration,
  undefined,
  axiosBackendClient
);
