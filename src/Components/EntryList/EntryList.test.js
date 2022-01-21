import { render } from '@testing-library/react';
import { useState } from 'react';
import { MemoryRouter } from 'react-router-dom';
import EntryList from './EntryList';


it('entry list render', async () => {
  const entries = [{
    id: 1,
    text: 'meowmeow',
    emotion: 'Joy'
  }];
  const { container } = render(
    <MemoryRouter>
      <EntryList entries={entries}/>
    </MemoryRouter>

  );

  expect(container).toMatchSnapshot();
});