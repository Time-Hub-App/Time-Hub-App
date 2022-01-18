import React, { useState } from 'react';
import { useHistory } from 'react-router';

export default function AddJournal() {
    const [journal, setJournal] = useState('');
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try { await }
    }
    return (
        <div>
            
        </div>
    )
}
