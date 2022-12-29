<script>
	export let textContent;
	export let speedVal = 1.15;

	function typewriter(node, { speed = speedVal }) {
		const text = textContent;
		const duration = text.length / (speed * 0.01);

		return {
			duration,
			tick: (t) => {
				const i = Math.trunc(text.length * t);
				node.textContent = text.slice(0, i);
			}
		};
	}
</script>

<p in:typewriter>
	{textContent}
</p>
