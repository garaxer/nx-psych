import { useRouter } from 'next/router';

const Details = () => {
  const {
    query: { id },
  } = useRouter();

  return <div> hello {id}</div>;
};

export default Details;
