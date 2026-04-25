import { preventDefault } from '../utils/events';

export default function Header({ section }) {
  return (
    <header className="header">
      <div className="header-logo">
        <span></span>
        Re:AcT Schedule
      </div>
      <a className="header-link" href="#" onClick={preventDefault}>
        原站 ↗
      </a>
    </header>
  );
}
