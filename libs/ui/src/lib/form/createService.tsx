export type CreateServiceProps = {
  title: string;
};

const CreateService = ({ title }: CreateServiceProps) => {
  return <>s {title}</>;
};

export default CreateService;
