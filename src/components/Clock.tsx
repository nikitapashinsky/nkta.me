import { useEffect, useState } from 'react';

export function Clock() {
  const [{ hours, minutes }, setTime] = useState(() => formatTime('Europe/Amsterdam'));

  useEffect(() => {
    const id = setInterval(() => setTime(formatTime('Europe/Amsterdam')), 10_000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className={'flex items-center select-none'}>
      <div className={'tabular-nums'}>{hours}</div>
      <div className={'animate-blink'}>:</div>
      <div className={'tabular-nums'}>{minutes}</div>
    </div>
  );
}

function formatTime(timeZone: string) {
  const parts = new Intl.DateTimeFormat('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
    timeZone,
    hour12: false,
  })
    .format(new Date())
    .split(':');
  return { hours: parts[0], minutes: parts[1] };
}
