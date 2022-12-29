<script lang="ts">
	import NavItem from '$lib/components/nav-item.svelte';
</script>

<header class="pointer-events-none relative top-6 z-50 flex flex-col">
	<div class="w-full sm:px-8">
		<div class="mx-auto max-w-7xl lg:px-8">
			<div class="relative px-4 sm:px-8 lg:px-12">
				<div class="mx-auto max-w-2xl lg:max-w-5xl">
					<div class="relative flex gap-4">
						<div class="flex flex-1" />
						<div class="flex flex-1 justify-end md:justify-center">
							<nav class="pointer-events-auto block gap-x-4">
								<ul
									class="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10"
								>
									<NavItem href="/about">About</NavItem>
									<NavItem href="/articles">Articles</NavItem>
									<NavItem href="/projects">Projects</NavItem>
									<NavItem href="/speaking">Speaking</NavItem>
									<NavItem href="/uses">Uses</NavItem>
								</ul>
							</nav>
						</div>
						<div class="flex justify-end md:flex-1">
							<button
								class="group rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20"
							>
								<span class="text-zinc-50">:D</span>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</header>
