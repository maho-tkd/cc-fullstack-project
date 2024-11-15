import axios from "axios";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useState, useEffect } from "react";
import DiaryList from "./DiaryList";
import DiaryForm from "./DiaryForm";

// const baseUrl = import.meta.env.VITE_API_BASE_URL;

function App() {
  const [entries, setEntries] = useState([]);
  const [content, setContent] = useState('');

  useEffect(() => {
    const fetchEntries = async () =>{
      const res = await axios.get("/api/entries");
      console.log(res);
      setEntries(res.data);
    }
    fetchEntries();
  }, []);

  const handleAddEntry = (newEntry) => {
    setEntries([...entries, newEntry]);
};

  const handleDeleteEntry = async (id) => {
    try {
      await axios.delete(`/api/delete/${id}`);
      setEntries(entries.filter(entry => entry.id !== id));      
    } catch (err){
      console.error("Error delete entry :",err);
    }
  }

  return (
    <div>
      <h1>Diary App</h1>
      <DiaryList  entries={ entries } onAddEntry={handleDeleteEntry}/>
      <DiaryForm onAddEntry={ handleAddEntry } />
    </div>
  );
}

export default App;
