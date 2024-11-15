import React from "react";

export default function DiaryList ({ entries,onDeleteEntry }) {
    return (
        <div className="diaryList">
            <h3 className="diarylist-title">日記一覧</h3>
            <ul>
                {entries.length > 0 ? (
                    entries.map((entry) => (
                        <li key={entry.id} className="diary-entry">
                            <div className="diary-date-circle">
                            {new Date(entry.created_at).getMonth() + 1}/{new Date(entry.created_at).getDate()}
                            </div>
                            <span className="diary-content">{entry.content}</span>
                            <button
                                className="delete-button"
                                onClick={() => onDeleteEntry(entry.id)}
                            >
                                削除
                            </button>
                        </li>
                    ))
                ) : (
                    <li>No entries found.</li>
                )}
            </ul>
        </div>
    );
};
