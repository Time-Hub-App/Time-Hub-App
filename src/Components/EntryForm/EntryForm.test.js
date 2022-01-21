import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import EntryForm from './EntryForm';


it('should render entry form', async () => {
  const { container } = render(
    <EntryForm />
  );
  
  expect(container).toMatchSnapshot();
});