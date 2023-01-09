<script lang="ts">
	import Section from './section.svelte';

	const workspace = [
		{
			title: '14" MacBook Pro (16GB, M1 Pro)',
			description: `
                The heart of the operation here. I considered the M1 Max upgrade but with the smaller
                footprint, I opted for the Pro chip and have no regrets.
            `
		},
		{
			title: '12.9" iPad Pro (2020) & Apple Pencil',
			description: `
                For a complement to a MacBook Pro it has a lot of potential.
                As a daily driver, I think iPadOS is still a bit half-baked.
            `
		},
		{
			title: 'Western Digital Elements HDD (8TB)',
			description: `
                A simple USB-based external hard drive. Configured for automatic, weekly backups via Time Machine. 
                And of course, this backup has backups.
            `
		},
		{
			title: 'ZSA Moonlander Mk1 Ergonomic Keyboard',
			description: `
                The split ortholinear mechanical keyboard of my dreams. 
                Currently equipped with Kailh Box Jade switches.
            `
		},
		{
			title: 'Apple Magic Trackpad',
			description: `
                Honestly, I thought this was overkill at first but now with it comfortably placed between
                the split keyboard halves I can't seem to work without it.
            `
		},
		{
			title: 'Flexispot 42" Standing Desk',
			description: `
                Another home office purchase I rolled the dice on. I have to admit I don't stand as much as I 
                probably should, but as a desk it does the job perfectly.
            `
		}
	];

	const devTools = [
		{
			title: 'Sublime Text 4',
			description: `
                Am I a poser or am I just one of those hipster coders? Yes.
            `
		},
		{
			title: 'Oh My Zsh',
			description: `
                Do I need the supercharged terminal? Probably not. Do I want the pretty colors? Absolutely.
            `
		}
	];

	const design = [
		{
			title: 'Concepts',
			description: `
                As a complete beginner to the art game, the sheer array of options can feel
                overwhelming. Still, my sketches have never looked so pretty.
            `
		}
	];

	const productivity = [
		{
			title: 'Obsidian',
			description: `
                I love the linking feature Obsidian uses to show relationships between my notes. For someone who
                struggles to tame my brainstorming, it is such a helpful tool for plotting out my game plan.
            `
		},
		{
			title: 'Moleskine Weekly Planner',
			description: `
                Pen and paper might be old school, but it sure does the trick. Plus, who doesn't like stickers??
            `
		}
	];

	const heart = [
		{
			title: 'My Lovely Partner',
			description: `
				ily <3
			`
		},
		{
			title: 'Iggy',
			description: `
				Cat. The floofiest boi there ever was :3
			`
		},
		{
			title: 'Kira',
			description: `
				Cat. Can be found eating, napping or eating.
			`
		}
	];
</script>

<svelte:head>
	<title>Credits - Saltbase</title>
</svelte:head>

<div class="mt-4 h-full sm:px-8">
	<div class="mx-auto max-w-7xl">
		<div class="mx-auto mt-16 sm:mt-32 sm:px-2 lg:max-w-5xl">
			<header class="max-w-2xl">
				<h1 class="text-5xl text-zinc-800 dark:text-zinc-100">What's In My Stack?</h1>
				<p class="mt-6 text-2xl font-thin text-zinc-600 dark:text-zinc-400 sm:text-3xl">
					A (non-exhaustive) list of the tools, software and gizmos I've accumulated in my quest to
					achieve Peak Performance<span class="text-xl">&trade;</span>
				</p>
			</header>
			<div class="mt-16 sm:mt-20">
				<div class="space-y-20">
					<Section id="wrk" title="Workstation">
						<div class="md:col-span-3">
							<ul class="space-y-16">
								{#each workspace as { title, description }}
									<li class="group relative flex flex-col items-start">
										<h3 class="text-2xl tracking-wide text-zinc-800 dark:text-zinc-100">{title}</h3>
										<p class="relative z-10 mt-2 text-xl text-zinc-600 dark:text-zinc-400">
											{description}
										</p>
									</li>
								{/each}
							</ul>
						</div>
					</Section>
					<Section id="wrk" title="Dev Tools">
						<div class="md:col-span-3">
							<ul class="space-y-16">
								{#each devTools as { title, description }}
									<li class="group relative flex flex-col items-start">
										<h3 class="text-2xl tracking-wide text-zinc-800 dark:text-zinc-100">{title}</h3>
										<p class="relative z-10 mt-2 text-xl text-zinc-600 dark:text-zinc-400">
											{description}
										</p>
									</li>
								{/each}
							</ul>
						</div>
					</Section>
					<Section id="wrk" title="Design">
						<div class="md:col-span-3">
							<ul class="space-y-16">
								{#each design as { title, description }}
									<li class="group relative flex flex-col items-start">
										<h3 class="text-2xl tracking-wide text-zinc-800 dark:text-zinc-100">{title}</h3>
										<p class="relative z-10 mt-2 text-xl text-zinc-600 dark:text-zinc-400">
											{description}
										</p>
									</li>
								{/each}
							</ul>
						</div>
					</Section>
					<Section id="wrk" title="Productivity">
						<div class="md:col-span-3">
							<ul class="space-y-16">
								{#each productivity as { title, description }}
									<li class="group relative flex flex-col items-start">
										<h3 class="text-2xl tracking-wide text-zinc-800 dark:text-zinc-100">{title}</h3>
										<p class="relative z-10 mt-2 text-xl text-zinc-600 dark:text-zinc-400">
											{description}
										</p>
									</li>
								{/each}
							</ul>
						</div>
					</Section>
					<Section id="wrk" title="Sanity">
						<div class="md:col-span-3">
							<ul class="space-y-16">
								{#each heart as { title, description }}
									<li class="group relative flex flex-col items-start">
										<h3 class="text-2xl tracking-wide text-zinc-800 dark:text-zinc-100">{title}</h3>
										<p class="relative z-10 mt-2 text-xl text-zinc-600 dark:text-zinc-400">
											{description}
										</p>
									</li>
								{/each}
							</ul>
						</div>
					</Section>
				</div>
			</div>
		</div>
	</div>
</div>
