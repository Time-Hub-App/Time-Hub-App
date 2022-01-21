import React, { useState } from 'react';
import { useHistory } from 'react-router';
import JournalForm from '../../Components/Forms/JournalForm';
import { createJournal } from '../../Services/journals';
import './AddJournal.css';
import Header from '../../Components/Header/Header.js';
import Footer from '../../Components/Footer/Footer.js';

export default function AddJournal({ user, setUser }) {
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
      <Header user={user} setUser={setUser} />
      <h2>Give your Journal a Title</h2>
      <JournalForm journal={journal} handleSubmit={handleSubmit} setNew={setNew} />
      <Footer />
    </div>
  );
}
