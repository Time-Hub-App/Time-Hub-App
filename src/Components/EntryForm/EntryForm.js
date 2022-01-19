import React from 'react';

export default function EntryForm({ emotion, setEmotion, text, setText, formHandler }) {
  return (
    <form onSubmit={formHandler}>
      <label>Entry: </label>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      <label>Emotion: </label>
      <input type="text" value={emotion} onChange={(e) => setEmotion(e.target.value)} />
      <input type="submit" value="save" />
    </form>
  );
}
