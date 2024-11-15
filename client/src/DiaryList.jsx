import React from "react";

export default function DiaryList ({ entries }) {

    return (
        <div>
          <h1>Diary Entries</h1>
          <ul>
            {entries.length > 0 ? (
              entries.map(entry => (
                <li key={entry.id}>{entry.content}</li> // データをリスト表示
              ))
            ) : (
              <li>No entries found.</li> // データがなかった場合
            )}
          </ul>
        </div>
      );
};
