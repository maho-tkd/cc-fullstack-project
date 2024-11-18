import React, {useState} from 'react';
import axios from 'axios';


export default function DiaryForm ({ onAddEntry }) {
    const [content,setContent] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!content) return;

        const newEntry = {content,
            created_at: new Date().toISOString()
        };
        
        try{
            const res = await axios.post("/api/entries",newEntry);
            console.log(res.data);
            onAddEntry(res.data);
            setContent("");

        } catch(err) {
            console.error("Error create entry :",err);
        }


    };

    return (
        <form className="dairyForm" onSubmit={handleSubmit}>
            <textarea
                className="form-input"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="今日はどんな一日だった？"
                rows="4"
            />
            <button type="submit" className="form-button">
                投稿
            </button>
        </form>
        );
        }