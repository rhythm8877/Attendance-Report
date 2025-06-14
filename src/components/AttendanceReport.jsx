import "./AttendanceReport.css"

const AttendanceReport = () => {
  const daysData = [
    { day: 1, dayName: "Tue", in: "08:46", out: "17:08", work: "08:22" },
    { day: 2, dayName: "Wed", in: "08:11", out: "16:29", work: "08:18" },
    { day: 3, dayName: "Thu", in: "08:13", out: "17:09", work: "08:56" },
    { day: 4, dayName: "Fri", in: "09:20", out: "17:03", work: "07:43" },
    { day: 5, dayName: "Sat", in: "08:41", out: "17:35", work: "08:54" },
    { day: 6, dayName: "Sun", in: "--:--", out: "--:--", work: "00:00" },
    { day: 7, dayName: "Mon", in: "08:24", out: "17:10", work: "08:46" },
    { day: 8, dayName: "Tue", in: "08:06", out: "17:01", work: "08:55" },
    { day: 9, dayName: "Wed", in: "08:11", out: "17:16", work: "09:05" },
    { day: 10, dayName: "Thu", in: "--:--", out: "--:--", work: "00:00" },
    { day: 11, dayName: "Fri", in: "08:12", out: "17:03", work: "08:51" },
    { day: 12, dayName: "Sat", in: "--:--", out: "--:--", work: "00:00" },
    { day: 13, dayName: "Sun", in: "--:--", out: "--:--", work: "00:00" },
    { day: 14, dayName: "Mon", in: "--:--", out: "--:--", work: "00:00" },
    { day: 15, dayName: "Tue", in: "--:--", out: "--:--", work: "00:00" },
    { day: 16, dayName: "Wed", in: "--:--", out: "--:--", work: "00:00" },
    { day: 17, dayName: "Thu", in: "--:--", out: "--:--", work: "00:00" },
    { day: 18, dayName: "Fri", in: "--:--", out: "--:--", work: "00:00" },
    { day: 19, dayName: "Sat", in: "--:--", out: "--:--", work: "00:00" },
    { day: 20, dayName: "Sun", in: "--:--", out: "--:--", work: "00:00" },
    { day: 21, dayName: "Mon", in: "09:17", out: "16:59", work: "07:42" },
    { day: 22, dayName: "Tue", in: "08:40", out: "17:04", work: "08:24" },
    { day: 23, dayName: "Wed", in: "08:04", out: "17:14", work: "09:10" },
    { day: 24, dayName: "Thu", in: "07:59", out: "17:05", work: "09:06" },
    { day: 25, dayName: "Fri", in: "08:19", out: "17:07", work: "08:48" },
    { day: 26, dayName: "Sat", in: "08:02", out: "13:26", work: "05:24" },
    { day: 27, dayName: "Sun", in: "--:--", out: "--:--", work: "00:00" },
    { day: 28, dayName: "Mon", in: "08:11", out: "16:56", work: "08:45" },
    { day: 29, dayName: "Tue", in: "09:16", out: "17:03", work: "07:47" },
    { day: 30, dayName: "Wed", in: "08:04", out: "17:03", work: "08:59" },
    { day: 31, dayName: "Thu", in: "", out: "", work: "" },
  ]

  return (
    <div className="attendance-report">
      {/* Header Section */}
      <div className="header-section">
        <div className="header-row">
          <div className="header-group">
            <span className="header-label">Dept. Name</span>
            <span className="header-value">Default</span>
          </div>
          <div className="header-group center">
            <span className="header-label">CompName</span>
            <span className="header-value">LIMPL</span>
          </div>
          <div className="header-group right">
            <span className="header-label">Report Month</span>
            <span className="header-value">April-2025</span>
          </div>
        </div>

        <div className="employee-row">
          <div className="employee-info">
            <div className="emp-field">
              <span className="emp-label">Empcode</span>
            </div>
            <div className="emp-field">
              <span className="emp-value">0069</span>
            </div>
            <div className="emp-field">
              <span className="emp-label">Name</span>
            </div>
            <div className="emp-field">
              <span className="emp-value">Empname0069</span>
            </div>
          </div>

          <div className="status-summary">
            <div className="status-item">
              <span className="status-label present">Present</span>
              <span className="status-value present">18</span>
            </div>
            <div className="status-item">
              <span className="status-label wo">WO</span>
              <span className="status-value wo">0</span>
            </div>
            <div className="status-item">
              <span className="status-label hl">HL</span>
              <span className="status-value hl">0</span>
            </div>
            <div className="status-item">
              <span className="status-label lv">LV</span>
              <span className="status-value lv">0</span>
            </div>
            <div className="status-item">
              <span className="status-label absent">Absent</span>
              <span className="status-value absent">12</span>
            </div>
            <div className="status-item">
              <span className="status-label">Tot. Work+OT</span>
              <span className="status-value">151:55</span>
            </div>
            <div className="status-item">
              <span className="status-label">Total OT</span>
              <span className="status-value">11:19</span>
            </div>
          </div>
        </div>
      </div>

      {/* Calendar Table */}
      <div className="calendar-table">
        {/* Days Row */}
        <div className="calendar-row days-row">
          <div className="row-label-placeholder"></div>
          {daysData.map((dayData) => (
            <div key={dayData.day} className="day-cell">
              {dayData.day === 31 ? "" : dayData.day}
            </div>
          ))}
        </div>

        {/* Day Names Row */}
        <div className="calendar-row day-names-row">
          <div className="row-label-placeholder"></div>
          {daysData.map((dayData) => (
            <div key={`name-${dayData.day}`} className="day-name-cell">
              {dayData.day === 31 ? "" : dayData.dayName}
            </div>
          ))}
        </div>

        {/* IN Row */}
        <div className="calendar-row time-row">
          <div className="row-label">IN</div>
          {daysData.map((dayData) => (
            <div key={`in-${dayData.day}`} className="time-cell">
              {dayData.in}
            </div>
          ))}
        </div>

        {/* OUT Row */}
        <div className="calendar-row time-row">
          <div className="row-label">OUT</div>
          {daysData.map((dayData) => (
            <div key={`out-${dayData.day}`} className="time-cell">
              {dayData.out}
            </div>
          ))}
        </div>

        {/* WORK Row */}
        <div className="calendar-row time-row">
          <div className="row-label">WORK</div>
          {daysData.map((dayData) => (
            <div key={`work-${dayData.day}`} className="time-cell">
              {dayData.work}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AttendanceReport
