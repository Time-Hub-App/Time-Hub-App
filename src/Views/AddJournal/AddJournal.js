import React, { useState } from 'react';
import { useHistory } from 'react-router';
import JournalForm from '../../Components/Forms/JournalForm';
import { createJournal } from '../../Services/journals';

export default function AddJournal() {
  const [journal, setJournal] = useState('');
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createJournal(journal);
      alert('Journal created!');
      history.push(`/journals`);
    } catch {
      alert('Oops, something went wrong. Try again!');
    }
  };

  const setNew = (journal) => {
    setJournal(journal);
  };
  return (
    <div>
      <JournalForm journal={journal} handleSubmit={handleSubmit} setNew={setNew} />
    </div>
  );
}
