import './App.css';
import FilterBar from './components/FilterBar';
import Header from './components/Header';
import ScheduleSection from './components/ScheduleSection';
import { schedules } from './data/schedules';

function App() {
  return (
    <div className="app">
      <Header />
      <FilterBar />
      {schedules.map((section) => (
        <ScheduleSection key={section.date} section={section} />
      ))}
    </div>
  );
}

export default App;
