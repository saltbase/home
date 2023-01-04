<script lang="ts">
	export let title: string;
	export let date: Date;
	const options = { year: 'numeric', month: 'long', day: 'numeric' };
</script>

<article class="md:grid md:grid-cols-4 md:items-baseline">
	<div class="group relative flex flex-col items-start md:col-span-3">
		<h2 class="text-xl text-zinc-800 dark:text-zinc-100">
			<div
				class="absolute -inset-y-6 -inset-x-4 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl"
			/>
			<a href={''}>
				<span class="sm:rounded-2x absolute inset-y-6 -inset-x-4 z-20 sm:-inset-x-6" />
				<span class="relative z-10 dark:text-zinc-200">{title}</span>
			</a>
		</h2>
		<p class="relative z-10 mt-2 truncate text-sm text-zinc-600 dark:text-zinc-400">lorem ipsum</p>
		<div
			class="relative z-10 mt-4 flex items-center text-sm font-medium text-emerald-500 dark:text-indigo-500"
		>
			Read article >
		</div>
	</div>
	<time
		class="relative z-10 order-first mt-1 mb-3 flex hidden items-center text-xl text-zinc-400 dark:text-zinc-500 md:block"
		>{date.toLocaleDateString(date, options)}</time
	>
</article>
