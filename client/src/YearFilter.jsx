import React from 'react';

const YearFilter = ({ years, selectedYear, onYearChange }) => {
    return (
        <div>
            <label htmlFor="year"></label>
            <select id="year" value={selectedYear} onChange={(e) => onYearChange(e.target.value)}>
                <option value="">全て</option>
                {years.map((year) => (
                    <option key={year} value={year}>
                        {year}
                    </option>
                ))}
            </select>
        </div>
    );
};
export default YearFilter;