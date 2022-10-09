import { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import api from './';
import {
  CreateServiceDto,
  ServiceResponseDto,
} from 'libs/shared-types/src/lib/api/generated';

const useAddInvoice = () => {
  const [data, setData] = useState<ServiceResponseDto | undefined>();
  const [isMutating, setIsMutating] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const { getIdTokenClaims } = useAuth0();

  const mutate = async (invoice: CreateServiceDto) => {
    const idToken = await getIdTokenClaims();
    if (!idToken) {
      alert('Please login');
      return;
    }
    try {
      setIsMutating(true);
      const response = await api.Services(idToken.__raw).create(invoice);

      setData(response);
      setIsMutating(false);
      return response;
    } catch (error: any) {
      setError(error);
      setIsMutating(false);
    }
  };
  const resetData = () => setData(undefined);

  const state = { data, isMutating, error };
  return { state, mutate, resetData };
};

export default useAddInvoice;
