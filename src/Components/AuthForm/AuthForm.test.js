import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AuthForm from './AuthForm';

it('should render a header', () => {
  const { container } = render(
    <MemoryRouter>
      <AuthForm />
    </MemoryRouter>
  );

  expect(container).toMatchSnapshot();
});
