import React from 'react';
import EmotionWheel from '../EmotionWheel/EmotionWheel';
import './EntryForm.css';

export default function EntryForm({ emotion, setEmotion, text, setText, formHandler }) {
  return (
    <form onSubmit={formHandler}>
      <label>Entry: </label>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      <EmotionWheel emotion={emotion} setEmotion={setEmotion} />
      <input type="submit" value="save" />
    </form>
  );
}
