import axios from "axios";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useState, useEffect } from "react";
import DiaryList from "./DiaryList";
import DiaryForm from "./DiaryForm";

// const baseUrl = import.meta.env.VITE_API_BASE_URL;

function App() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const fetchEntries = async () =>{
      const res = await axios.get("/api/entries");
      console.log(res);
      setEntries(res.data);
    }
    fetchEntries();
  }, []);

  const handleAddEntry = (newEntry) => {
    // 新しいエントリーを最上部に追加
    setEntries(prevEntries => [newEntry, ...prevEntries]);
  }

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
      <h1 className="diaryapp-title">Diary App</h1>
      <DiaryList  entries={ entries } onDeleteEntry={handleDeleteEntry}/>
      <DiaryForm onAddEntry={ handleAddEntry } />
    </div>
  );
}

export default App;
