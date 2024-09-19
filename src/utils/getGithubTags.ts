export async function getLatestTag(): Promise<string> {
	const apiUrl = `https://api.github.com/repos/nikitapashinsky/nkta.me/tags`;

	try {
		const response = await fetch(apiUrl);
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}
		const tags = await response.json();
		return tags.length > 0 ? tags[0].name.replace('v', '') : 'No tags found';
	} catch (error) {
		console.error('Error fetching tags:', error);
		return 'Error fetching tag';
	}
}
