<script>
	import Header from '$lib/components/header.svelte';
	import '../app.css';
</script>

<div class="fixed inset-0 -z-50 flex justify-center sm:px-8">
	<div class="flex w-full max-w-7xl lg:px-8">
		<div class="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />
	</div>
</div>

<Header />
<slot />
