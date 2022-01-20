import React from 'react';
import './EmotionWheel.css';
import { emotionList } from '../../Utils/assets';

export default function EmotionWheel({ emotion, setEmotion }) {
  return (
    <div>
      <label>Emotion: </label>
      <select value={emotion} onChange={(e) => setEmotion(e.target.value)}>
        {emotionList.map((emotion) => (
          <option key={emotion}>{emotion}</option>
        ))}
      </select>
    </div>
  );
}
