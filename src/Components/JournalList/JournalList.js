import './JournalList.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { deleteJournal, fetchJournals } from '../../Services/journals';

export default function JournalList() {
  const [journals, setJournals] = useState([]);
  const [click, setClick] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchJournals();
      setJournals(data);
      setClick(false);
    };
    fetchData();
  }, [click]);

  const deleteHandler = async (id) => {
    await deleteJournal(id);
    setClick(true);
  };

  return (
    <div className="journallist">
      {journals.map((journal) => (
        <div key={journal.id} className="item">
          <h3 onClick={() => deleteHandler(journal.id)}>Delete</h3>
          <Link to={`/journals/${journal.title}`}>{journal.title}</Link>
        </div>
      ))}
    </div>
  );
}
