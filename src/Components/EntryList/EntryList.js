import React from 'react';
import { deleteEntry } from '../../Services/journalEntries';
import './EntryList.css';

export default function EntryList({ entries, setClick }) {
  const deleteHandle = async (id) => {
    await deleteEntry(id);
    setClick(true);
  };

  const updateHandle = () => {};

  return (
    <div className="entrylist">
      {entries.map((entry) => (
        <div className="entry" key={entry.id}>
          <p>{entry.text}</p>
          <p>{entry.emotion}</p>
          <h3 onClick={() => deleteHandle(entry.id)}>Delete Entry</h3>
          <h3 onClick={updateHandle}>Update Entry</h3>
        </div>
      ))}
    </div>
  );
}
