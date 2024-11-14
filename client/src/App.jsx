import axios from "axios";
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import DiaryList from './DiaryList';

// const baseUrl = import.meta.env.VITE_API_BASE_URL;

function App() {
  const [entries, setEntries] = useState([]);
  const [content, setContent] = useState('');

  useEffect(() => {
    const fetchEntries = async () =>{
      const res = await axios.get(`/api/entries`);
      console.log(res);
      setEntries(res.data);
    }
    fetchEntries();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<DiaryList />} />
      </Routes>
    </Router>
  );
}

export default App;
