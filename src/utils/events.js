// src/utils/events.js
export const noop = () => {};

// ques-0x02
export const preventDefault = (event) => {
  event.preventDefault();
};

// ques-0x03
export const preventDefaultAndStop = (event) => {
  event.preventDefault();
  event.stopPropagation();
};
