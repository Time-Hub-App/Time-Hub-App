import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Auth from './Auth';

it('should render auth view component', () => {
  const { container } = render(
    <MemoryRouter>
      <Auth />
    </MemoryRouter>
  );

  expect(container).toMatchSnapshot();
});
