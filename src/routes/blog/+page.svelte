<script lang="ts">
	import Article from './article.svelte';
	import Section from '$lib/components/ui/section.svelte';

	const articles = [
		{
			title: 'Hello World',
			date: new Date(2023, 0, 1)
		}
	];
</script>

<svelte:head>
	<title>Blog - Saltbase</title>
</svelte:head>

<div class="mt-4 h-screen sm:px-8">
	<div class="mx-auto max-w-7xl">
		<div class="mx-auto mt-16 px-2 sm:mt-32 lg:max-w-5xl">
			<header class="max-w-2xl lg:max-w-5xl">
				<h1 class="text-5xl text-zinc-800 dark:text-zinc-100">Sometimes, the Void yells back</h1>
				<p class="mt-6 text-3xl font-thin text-zinc-600 dark:text-zinc-400">
					Usually in English. Read at your own peril!
				</p>
			</header>
			<div class="mt-16 sm:mt-20">
				<div
					class="flex max-w-3xl flex-col space-y-16 md:border-l md:border-zinc-200/70 md:pl-6 md:dark:border-zinc-700/40"
				>
					{#each articles as { ...props }}
						<Article title={props.title} date={props.date} />
					{/each}
				</div>
			</div>
		</div>
	</div>
</div>
