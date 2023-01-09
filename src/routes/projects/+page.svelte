<script lang="ts">
	const projects = [
		{
			name: 'Ansong Law',
			description: `
				Provided technical consulting, web hosting, network configuration and site building
				services. Design by Jenn Styrcula.
			`,
			link: { href: 'https://ansonglaw.com', label: 'ansonglaw.com' }
		}
	];
</script>

<svelte:head>
	<title>Projects - Saltbase</title>
</svelte:head>

<div class="mt-4 h-screen sm:px-8">
	<div class="mx-auto max-w-7xl">
		<div class="mx-auto mt-16 px-2 sm:mt-32 lg:max-w-5xl">
			<header class="max-w-2xl">
				<h1 class="text-5xl text-zinc-800 dark:text-zinc-100">
					Look upon my Works, ye Mighty, and despair!
				</h1>
				<p class="mt-6 text-3xl font-thin text-zinc-600 dark:text-zinc-400">
					Nothing beside Javascript remains. Round the decay<br />Of that Uncaught TypeError
				</p>
			</header>
			<div class="mt-16 sm:mt-20">
				<div class="flex max-w-3xl flex-col space-y-16">
					<ul class="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
						{#each projects as { ...props }}
							<li class="group relative flex flex-col items-start">
								<div
									class="absolute -inset-y-4 -inset-x-4 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl"
								/>
								<h2 class="mt-6 text-xl text-zinc-800 dark:text-zinc-100">
									<a href={props.link.href}>
										<span class="relative z-10">{props.name}</span>
									</a>
								</h2>

								<p class="relative z-10 mt-2 text-lg text-zinc-600 dark:text-zinc-400">
									{props.description}
								</p>
								<p
									class="text-md relative z-10 mt-6 flex font-medium text-zinc-400 transition group-hover:text-emerald-500 dark:text-zinc-200 dark:group-hover:text-indigo-500"
								>
									<a href={props.link.href}>{props.link.href}</a>
								</p>
							</li>
						{/each}
					</ul>
				</div>
			</div>
		</div>
	</div>
</div>
