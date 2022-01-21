import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Journal from './Journal';

it('should render a header', () => {
  const { container } = render(
    <MemoryRouter>
      <Journal />
    </MemoryRouter>
  );

  expect(container).toMatchSnapshot();
});
