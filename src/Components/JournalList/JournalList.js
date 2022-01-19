import './JournalList.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { fetchJournals } from '../../Services/journals';


export default function JournalList() {
  const [journals, setJournals] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchJournals();
      setJournals(data);
    };
    fetchData();
  }, []);
  return (
    <div>
      {journals.map((journal) => (
        <Link key={journal.id} to={`/${journal.title}`}>{journal.title}</Link>
      ))}
    </div>
  );
}
