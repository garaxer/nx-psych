import { render } from '@testing-library/react';

import ContentLayout from './content-layout';

describe('ContentLayout', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ContentLayout />);
    expect(baseElement).toBeTruthy();
  });
});
