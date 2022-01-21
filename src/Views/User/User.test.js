import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import User from './User';

it('should render a user view component', () => {
  const { container } = render(
    <MemoryRouter>
      <User />
    </MemoryRouter>
  );

  expect(container).toMatchSnapshot();
});
