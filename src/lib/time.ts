export function formatTime(timeZone: string) {
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
