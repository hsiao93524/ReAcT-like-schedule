import ScheduleCard from './ScheduleCard';

export default function ScheduleSection({ section }) {
  return (
    <section className="date-section">
      <div className="date-header">
        <div className="date-tag">
          <span className="date-tag-month">{section.month}</span>
          <span className="date-tag-day">{section.day}</span>
          <span className="date-tag-week">{section.weekday}</span>
        </div>
        <div className="date-line"></div>
        <span className="date-count">{section.items.length} 場</span>
      </div>
      <div className="card-grid">
        {section.items.map((item) => (
          <ScheduleCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
