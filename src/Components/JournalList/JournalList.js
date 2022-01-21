import './JournalList.css';
import React, { useState, useEffect } from 'react';

import { deleteJournal, fetchJournals } from '../../Services/journals';
import { useHistory } from 'react-router-dom';

export default function JournalList() {
  const [journals, setJournals] = useState([]);
  const [click, setClick] = useState(false);
  const history = useHistory();

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
          <div className="links">
            <h2 onClick={() => history.push(`/journals/${journal.title}`)}>{journal.title}</h2>
          </div>
          <div className="delete">
            <h3 onClick={() => deleteHandler(journal.id)}>Delete</h3>
          </div>
        </div>
      ))}
    </div>
  );
}
