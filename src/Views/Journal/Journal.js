import './Journal.css';
import Header from '../../Components/Header/Header.js';
import Footer from '../../Components/Footer/Footer.js';
import EntryList from '../../Components/EntryList/EntryList';
import { useState, useEffect } from 'react';
import { createEntry, fetchEntries } from '../../Services/journalEntries';
import EntryForm from '../../Components/EntryForm/EntryForm';

export default function Journal({ user, setUser }) {
  const [entries, setEntries] = useState([]);
  const [emotion, setEmotion] = useState('');
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetchEntries();
      setEntries(resp);
      setLoading(false);
    };
    fetchData();
  }, []);
  const formHandler = async (e) => {
    e.preventDefault();
    await createEntry(text, emotion);
  };

  if (loading) return <div>One second... all of your entries are coming!</div>;
  return (
    <div>
      <Header user={user} setUser={setUser} userpage />
      <EntryForm
        emotion={emotion}
        setEmotion={setEmotion}
        text={text}
        setText={setText}
        formHandler={formHandler}
      />
      <EntryList entries={entries} />
      <Footer />
    </div>
  );
}
