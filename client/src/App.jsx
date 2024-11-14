import logo from './logo.svg';
import axios from "axios";
import './App.css';
import React, { useState, useEffect } from 'react';
import DiaryList from './DiaryList';
import DiaryForm from './DiaryForm';

const baseUrl = import.meta.env.VITE_API_BASE_URL;

function App() {
  const [diaries, setDiaries] = useState([]);
  const [content, setContent] = useState('');

  useEffect(() => {//以下レクチャーでの書き方例を残している
    const fetchDiaries = async () =>{
      // const res = await fetch(`${baseUrl}/dairies`);//相対パス
      // if(!res.ok) {
      //   throw new Error(/**エラー */)
      // }
      // const data = await res.json()
      // setDiaries(data);

      const res = await axios.get(`${baseUrl}/todos`);
      setDiaries(res.data);
    }
    fetchDiaries()
  }, []);

  return (
    <div>
      <h1>日記アプリ</h1>
      {/* <DiaryForm  />
      <DiaryList  /> */}
    </div>
  );
}

export default App;
