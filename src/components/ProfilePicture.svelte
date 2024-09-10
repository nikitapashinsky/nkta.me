<script>
	let count = $state(0);
	function onclick() {
		count++;
	}
</script>

<button
	{onclick}
	class="flex h-6 w-6 items-center justify-center rounded-full bg-neutral-200 text-xs"
>
	{count}
</button>
