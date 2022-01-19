import React from 'react';

export default function EntryList({ entries }) {
  return (
    <div>
      {entries.map((entry) => (
        <div key={entry.id}>
          <p>{entry.text}</p>
          <p>{entry.emotion}</p>
        </div>
      ))}
    </div>
  );
}
