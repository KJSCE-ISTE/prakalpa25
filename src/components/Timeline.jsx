import React from "react";
import "../styles/Timeline.css"; 

const events = [
    { time: "10:00 AM", date: "February 18, 2025", title: "Registration Starts", desc: "Register Now & Level Up! 🚀" },
    { time: "4:30 PM", date: "March 26, 2025", title: "Pre Event", desc: "Think Sprint - Analyze. Solve. Innovate 🧠" },
    { time: "11:59 PM", date: "March 31, 2025", title: "Registration Ends", desc: "Last Chance! Register Before It's Too Late! ⏳" },
    { time: "9:30 AM", date: "April 4, 2025", title: "Event Begins", desc: "PRAKALPA Begins! Let the Innovation Unfold!💡" },
    { time: "1:00 PM - 2:00 PM", date: "April 4, 2025", title: "Time For A Break", desc: "Pause. Recharge. Resume. ☕" },
    { time: "4:00 PM", date: "April 4, 2025", title: "Prize Distribution", desc: "Rewarding Excellence. 🏆" },
    { time: "5:00 PM", date: "April 4, 2025", title: "Event Ends", desc: "That’s a Wrap! Until Next Time!✨" },
];

export default function Timeline() {
  return (
    <div className="timeline-container">
      <h2 className="text-center">Event Timeline ⚙️</h2>
      <div className="timeline">
        {events.map((event, index) => (
          <div key={index} className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}>
            <div className="timeline-content">
              <h3>{event.title}</h3>
              <p>{event.desc}</p>
              <span className="timeline-date">{event.date} | {event.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
