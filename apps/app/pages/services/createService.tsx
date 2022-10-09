import ResponsiveAppBar from 'apps/app/components/layout/layout';
import Head from 'next/head';
import utilStyles from '../utils.module.css';

const CreateService = () => {
  return (
    <ResponsiveAppBar title={'Create Bookings'} useAuth>
      <Head>
        <title>Creating Service</title>
      </Head>

      <div className={utilStyles.lightText}>Nice</div>
    </ResponsiveAppBar>
  );
};

export default CreateService;
