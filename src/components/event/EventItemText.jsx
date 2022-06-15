const EventItemText = ({ title, time, date }) => {
  return (
    <div style={{ marginBottom: "10px" }}>
      <h4>{title}</h4>
      <div>
        <span>{time}</span>
      </div>
      <div>
        <span>{date}</span>
      </div>
    </div>
  );
};

export default EventItemText;
