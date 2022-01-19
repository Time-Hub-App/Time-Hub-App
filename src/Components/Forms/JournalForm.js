import React from 'react';

export default function JournalForm({ journal, setNew, handleSubmit }) {
  return (
    <form>
      <label>Title</label>
      <input placeholder="Journal Title" type="text" value={journal.title}
        onChange={(e) => {setNew(e.target.value); }} /> <button onClick={handleSubmit}>Create Journal</button>
    </form>
  );
}
