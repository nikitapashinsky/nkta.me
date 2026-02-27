import { useEffect, useState } from 'react';
import { formatTime } from '../lib/time';

export function useTime(timeZone: string) {
	const [{ hours, minutes }, setTime] = useState(() => formatTime(timeZone));

	useEffect(() => {
		const id = setInterval(() => setTime(formatTime(timeZone)), 10_000);
		return () => clearInterval(id);
	}, [timeZone]);

	return { hours, minutes };
}
