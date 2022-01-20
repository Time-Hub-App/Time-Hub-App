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
import Heatmap from '../../Components/Heatmap/Heatmap';

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
      const journalId = await fetchJournalId(params.journal);
      const resp = await fetchEntries(journalId.id);
      setEntries(resp);
      setClick(false);
      setLoading(false);
    };
    fetchData();
  }, [click, params.journal]);

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

  // console.log(entries);
  if (loading) return <div>One second... all of your entries are coming!</div>;
  return (
    <div>
      <Header user={user} setUser={setUser} userpage />
      <h1>{params.journal}</h1>
      <Heatmap entries={entries} />
      <button onClick={() => updateHandler(newTitle)}>Update</button>
      <input type="text" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} />
      <EntryForm
        emotion={emotion}
        setEmotion={setEmotion}
        text={text}
        setText={setText}
        formHandler={formHandler}
      />
      <div className="entry-hidden">
        <EntryList entries={entries} setClick={setClick} />
      </div>
      <Footer />
    </div>
  );
}
