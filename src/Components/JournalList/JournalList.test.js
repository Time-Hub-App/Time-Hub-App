import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import JournalList from './JournalList';

it('should render a journal list presentational component', () => {
  const { container } = render(
    <MemoryRouter>
      <JournalList />
    </MemoryRouter>
  );
  expect(container).toMatchSnapshot();
});
