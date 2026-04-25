import { noop } from '../utils/events';

export default function FilterBar({ section }) {
  return (
    <div className="filter-bar">
      <span className="filter-label">藝人</span>
      <button className="filter-chip active" onClick={noop}>
        全部
      </button>
      <button className="filter-chip" onClick={noop}>
        一期生
      </button>
      <button className="filter-chip" onClick={noop}>
        二期生
      </button>
      <button className="filter-chip" onClick={noop}>
        三期生
      </button>
      <button className="filter-chip" onClick={noop}>
        聯動
      </button>
      <div className="filter-divider"></div>
      <span className="filter-label">時間</span>
      <button className="filter-chip" onClick={noop}>
        今天以後
      </button>
      <button className="filter-chip" onClick={noop}>
        3天
      </button>
      <button className="filter-chip" onClick={noop}>
        一周
      </button>
      <button className="filter-chip" onClick={noop}>
        兩周
      </button>
      <button className="filter-chip" onClick={noop}>
        一個月
      </button>
    </div>
  );
}
