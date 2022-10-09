import ResponsiveAppBar from 'apps/app/components/layout/layout';
import { CreateServiceDto } from 'libs/shared-types/src/lib/api/generated';
import Head from 'next/head';
import utilStyles from '../utils.module.css';
import { CreateServiceForm } from '@nx-psych/ui';
import useAddService from 'apps/app/api/useAddService';

const CreateService = () => {
  const { state, mutate } = useAddService();
  const handleSubmit = async (service: CreateServiceDto) => {
    await mutate(service);
  };

  return (
    <ResponsiveAppBar title={'Create Bookings'} useAuth>
      <Head>
        <title>Creating Service</title>
      </Head>

      <div className={utilStyles.lightText}>
        Nice
        {state.isMutating ? (
          'Adding service'
        ) : (
          <CreateServiceForm onSubmit={handleSubmit} />
        )}
      </div>
    </ResponsiveAppBar>
  );
};

export default CreateService;
