import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from './Header';

it('should render a header', () => {
  const { container } = render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );

  expect(container).toMatchSnapshot();
});
