import React,{useState,useEffect} from "react";
import YearFilter from "./YearFilter";


export default function DiaryList ({ entries,onDeleteEntry }) {
    const [filteredEntries, setFilteredEntries] = useState(entries);
    const [selectedYear, setSelectedYear] = useState("");

    const getUniqueYears = (entries) => {

        const years = entries.map(entry => new Date(entry.created_at).getFullYear());
        return [...new Set(years)];
    };

    const handleYearChange = (year) => {
        console.log(year);
        setSelectedYear(year);
        if (year) {
            const filtered = entries.filter(entry => new Date(entry.created_at).getFullYear().toString() === year);
            setFilteredEntries(filtered);
            console.log(filtered);
        } else {
            setFilteredEntries(entries);
        }
    };

    useEffect(() => {
        setFilteredEntries(entries);
    }, [entries]);

    useEffect(() => {
        handleYearChange(selectedYear);
    }, [selectedYear]);

    const uniqueYears = getUniqueYears(entries);

    return (
        <div className="diaryList">
            <h3 className="diarylist-title">日記一覧</h3>
            <YearFilter years={uniqueYears} selectedYear={selectedYear} onYearChange={handleYearChange} />
            <ul>
            {filteredEntries.length > 0 ? (
                    filteredEntries.map((entry) => {
                        const date = new Date(entry.created_at);
                        console.log(date);
                        return (
                            <li key={entry.id} className="diary-entry">
                                <div className="diary-date-circle">
                                    {isNaN(date.getTime())
                                        ? `${new Date().getMonth() + 1}/${new Date().getDate()}`
                                        : `${date.getMonth() + 1}/${date.getDate()}`} {/* 有効な日付のみ表示 */}
                                </div>
                                <span className="diary-content">{entry.content}</span>
                                <button
                                    className="delete-button"
                                    onClick={() => onDeleteEntry(entry.id)}
                                >
                                    削除
                                </button>
                            </li>
                        );
                    })
                ) : (
                    <p>まだ日記がないよ！投稿してみよう〜</p>
                )}
            </ul>
        </div>
    );
};
