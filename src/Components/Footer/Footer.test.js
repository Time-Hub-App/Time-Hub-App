import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Footer from './Footer';

it('should render a footer', () => {
  const { container } = render(
    <MemoryRouter>
      <Footer />
    </MemoryRouter>
  );

  expect(container).toMatchSnapshot();
});
