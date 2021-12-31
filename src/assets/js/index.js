$(document).ready(() => {
  const now = getNow();
  // console.log(now);
  const newYear = new Date('2021-12-31T17:00:00.0000z');
  // console.log(newYear);
  if (now < newYear)
    window.location.href = 'count-down.html';
  else
    window.location.href = 'happy-new-year.html';
});