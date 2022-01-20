import React from 'react';
import './EmotionWheel.css';

export default function EmotionWheel({ emotion, setEmotion }) {
  return (
    <div>
      <label>Emotion: </label>
      <input type="text" value={emotion} onChange={(e) => setEmotion(e.target.value)} />
    </div>
  );
}
