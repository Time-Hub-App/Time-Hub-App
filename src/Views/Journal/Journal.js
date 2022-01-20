import './Journal.css';
import Header from '../../Components/Header/Header.js';
import Footer from '../../Components/Footer/Footer.js';
import EntryList from '../../Components/EntryList/EntryList';
import { useState, useEffect } from 'react';
import { createEntry, fetchEntries, fetchJournalId } from '../../Services/journalEntries';
import EntryForm from '../../Components/EntryForm/EntryForm';
import { useParams } from 'react-router-dom';
import { updateJournal } from '../../Services/journals';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

export default function Journal({ user, setUser }) {
  const [entries, setEntries] = useState([]);
  const [emotion, setEmotion] = useState('');
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(true);
  const [click, setClick] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const params = useParams();
  const history = useHistory();

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

  const updateHandler = async (title) => {
    const journalId = await fetchJournalId(params.journal);
    await updateJournal(journalId.id, title);
    history.push(`/journals/${title}`);
  };

  if (loading) return <div>One second... all of your entries are coming!</div>;

  return (
    <div>
      <Header user={user} setUser={setUser} userpage />
      <h1>{params.journal}</h1>
      <button onClick={() => updateHandler(newTitle)}>Update</button>
      <input type="text" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} />
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
