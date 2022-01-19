import './Journal.css';
import Header from '../../Components/Header/Header.js';
import Footer from '../../Components/Footer/Footer.js';
import EntryList from '../../Components/EntryList/EntryList';
import { useState, useEffect } from 'react';
import { createEntry, fetchEntries, fetchJournalId } from '../../Services/journalEntries';
import EntryForm from '../../Components/EntryForm/EntryForm';
import { useParams } from 'react-router-dom';

export default function Journal({ user, setUser }) {
  const [entries, setEntries] = useState([]);
  const [emotion, setEmotion] = useState('');
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(true);
  const [click, setClick] = useState(false);
  const params = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetchEntries();
      setEntries(resp);
      setLoading(false);
      setClick(false);
    };
    fetchData();
  }, [click]);

  const formHandler = async (e) => {
    e.preventDefault();
    const journalId = await fetchJournalId(params.journal);
    await createEntry(text, emotion, journalId.id);
    setText('');
    setEmotion('');
    setClick(true);
  };

  if (loading) return <div>One second... all of your entries are coming!</div>;

  return (
    <div>
      <Header user={user} setUser={setUser} userpage />
      <h1>{params.journal}</h1>
      <EntryForm
        emotion={emotion}
        setEmotion={setEmotion}
        text={text}
        setText={setText}
        formHandler={formHandler}
      />
      <EntryList entries={entries} setClick={setClick} />
      <Footer />
    </div>
  );
}
