import './Journal.css';
import Header from '../../Components/Header/Header.js';
import Footer from '../../Components/Footer/Footer.js';
import EntryList from '../../Components/EntryList/EntryList';
import { useState, useEffect } from 'react';
import { fetchEntries } from '../../Services/journalEntries';

export default function Journal({ user, setUser }) {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetchEntries();
      setEntries(resp);
      setLoading(false);
    };
    fetchData();
  }, []);
  if (loading) return <div>One second... all of your entries are coming!</div>;
  return (
    <div>
      <Header user={user} setUser={setUser} userpage />
      <EntryList entries={entries} />
      <Footer />
    </div>
  );
}
