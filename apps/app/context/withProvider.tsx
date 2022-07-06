import { FC, ReactElement, ReactNode } from 'react';

interface ProviderProps {
  children: ReactNode;
}

const withProvider =
  (Provider: (props: ProviderProps) => ReactElement) => (Component: FC) =>
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function ComponentWithProvider(props: any): ReactElement {
      return (
        <Provider>
          <Component {...props} />
        </Provider>
      );
    };

export default withProvider;
