export default function ScheduleCard({ item }) {
  return (
    <div className="card">
      <div className="card-thumb-img" style={{ background: item.thumbStyle }}>
        <span className="card-time-badge">{item.time}</span>
      </div>
      <div className="card-body">
        <div className="card-talent">
          <div
            className="avatar-placeholder"
            style={{
              background: item.avatarColor.bg,
              color: item.avatarColor.color,
            }}
          >
            {item.initial}
          </div>
          <div className="talent-info">
            <span className="talent-name">{item.talentName}</span>
            <span className="talent-group">{item.group}</span>
          </div>
        </div>
        <div className="card-title">{item.title}</div>
        <div className="card-desc">{item.description}</div>
        <span className={`card-tag tag-${item.tag}`}>{item.group}</span>
      </div>
    </div>
  );
}
