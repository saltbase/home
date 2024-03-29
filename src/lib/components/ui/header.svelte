<script lang="ts">
	import NavItem from './nav-item.svelte';
	import { onMount, setContext } from 'svelte';
	import { page } from '$app/stores';

	let dark: boolean;
	let hidden = true;
	let isMobileDevice: boolean;

	onMount(() => {
		isMobileDevice = /Mobi/i.test(window.navigator.userAgent);
		dark = document.documentElement.classList.contains('dark');
		hidden = false;
		const matcher = window.matchMedia('(prefers-color-scheme: dark)');
		matcher.addEventListener('change', handleChange);
		return () => matcher.removeEventListener('change', handleChange);
	});

	function handleChange({ matches: dark }: MediaQueryListEvent) {
		if (!localStorage.theme) {
			setMode(dark);
		}
	}

	function toggle() {
		setMode(!dark);
	}

	function setMode(value: boolean) {
		dark = value;
		if (dark) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
		localStorage.theme = dark ? 'dark' : 'light';
		if (window.matchMedia(`(prefers-color-scheme: ${localStorage.theme})`).matches) {
			localStorage.removeItem('theme');
		}
	}
</script>

<svelte:head>
	<script>
		if (
			localStorage.theme === 'dark' ||
			(!localStorage.theme && window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	</script>
</svelte:head>

<header class="pointer-events-none relative top-6 z-40 flex h-16 flex-col">
	<div class="w-full sm:px-8">
		<div class="mx-auto max-w-7xl lg:px-8">
			<div class="relative px-4 sm:px-8 lg:px-12">
				<div class="mx-auto max-w-2xl lg:max-w-5xl">
					<div class="relative block flex gap-4 align-middle">
						{#if !isMobileDevice}
							<div class="flex flex-1">
								<a
									href="/home"
									class="group rounded-md bg-emerald-400 px-3 py-1 text-2xl text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/10 backdrop-blur transition pointer-events-auto hover:bg-emerald-300 hover:text-zinc-700 dark:bg-indigo-700/90 dark:text-zinc-50 dark:ring-white/10 dark:hover:bg-indigo-900 dark:hover:text-zinc-300 dark:hover:ring-white/20"
									class:hidden={$page.route.id === '/'}>SALTBASE</a
								>
							</div>
							<div class="flex flex-1 justify-end md:justify-center">
								<nav
									class="pointer-events-auto block gap-x-4"
									class:hidden={$page.route.id === '/'}
								>
									<ul
										class="flex rounded-md bg-white/90 px-3 pb-1 text-2xl font-medium text-zinc-800 ring-1 ring-zinc-900/10 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10"
									>
										<NavItem href="/about">ABOUT</NavItem>
										<NavItem href="/blog">BLOG</NavItem>
										<NavItem href="/projects">PROJECTS</NavItem>
										<NavItem href="/credits">CREDITS</NavItem>
									</ul>
								</nav>
							</div>
						{:else}
							<div class="pointer-events-auto flex flex-1">
								<a
									href="/home"
									class="group rounded-md bg-white/90 bg-emerald-400 px-3 py-1 text-2xl text-zinc-800 text-zinc-50 ring-1 ring-zinc-900/10 backdrop-blur transition hover:bg-emerald-300 hover:text-zinc-700 dark:bg-indigo-700/90 dark:text-zinc-50 dark:ring-white/10 dark:hover:bg-indigo-900 dark:hover:text-zinc-300 dark:hover:ring-white/20"
									class:hidden={$page.route.id === '/'}>SB</a
								>
							</div>
							<div class="flex flex-1 justify-end md:justify-center">
								<nav
									class="pointer-events-auto block gap-x-4"
									class:hidden={$page.route.id === '/'}
								>
									<ul
										class="flex rounded-md bg-white/90 px-3 pb-1 text-2xl font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/10 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10"
									>
										<NavItem href="/about">ABOUT</NavItem>
										<NavItem href="/blog">BLOG</NavItem>
										<NavItem href="/credits">CREDITS</NavItem>
									</ul>
								</nav>
							</div>
						{/if}
						<!-- svelte-ignore a11y-click-events-have-key-events -->
						<div class="pointer-events-auto flex justify-end md:flex-1" on:click={toggle}>
							<button
								class="{dark
									? 'bg-gray-600 ring-offset-gray-700 focus:ring-gray-400'
									: 'bg-emerald-100 ring-offset-white focus:ring-emerald-400'} relative mt-2 inline-flex h-5 w-9 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2"
								class:hidden
								type="button"
								aria-checked={dark}
							>
								<span class="sr-only">Toggle Dark Mode</span>
								<span
									class="{dark
										? 'translate-x-0 bg-gray-300'
										: 'translate-x-4 bg-white'} pointer-events-none relative inline-block h-4 w-4 transform rounded-full shadow ring-0 transition duration-200 ease-in-out"
								>
									<span
										class="{dark
											? 'opacity-100 duration-200 ease-in'
											: 'opacity-0 duration-100 ease-out'} absolute inset-0 flex h-full w-full items-center justify-center transition-opacity"
										aria-hidden="true"
									>
										<!-- moon icon -->
										<svg class="h-3 w-3 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
											<path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
										</svg>
									</span>
									<span
										class="{dark
											? 'opacity-0 duration-100 ease-out'
											: 'opacity-100 duration-200 ease-in'} absolute inset-0 flex h-full w-full items-center justify-center transition-opacity"
										aria-hidden="true"
									>
										<!-- sun icon -->
										<svg class="h-3 w-3 text-emerald-400" viewBox="0 0 20 20" fill="currentColor">
											<path
												fill-rule="evenodd"
												d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
												clip-rule="evenodd"
											/>
										</svg>
									</span>
								</span>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</header>
