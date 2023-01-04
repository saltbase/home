<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import '../app.css';
	import { active } from '$lib/stores';
	import Typewriter from '$lib/components/typewriter.svelte';

	let motd = 'secure, lean apps made from scratch';

	function handleFocus() {
		active.set(true);
	}
</script>

<svelte:body on:click={handleFocus} on:keypress={handleFocus} />

<div
	class="grid h-screen grid-flow-col grid-rows-2 place-content-center dark:text-zinc-300"
	transition:fade
>
	<div class="col-span-full mt-8 text-center md:mt-60">
		<h1 id="title" class="py-8 text-8xl tracking-wide">SALTBASE</h1>
		<span class="my-2 text-2xl sm:text-3xl"
			>{#if $active}{#key motd} <Typewriter textContent={motd} />{/key}{/if}</span
		>
	</div>
	<div
		in:fly={{ y: 200, duration: 2500 }}
		class="top-24 col-span-1 space-y-24 text-center md:my-20"
	>
		{#if !$active}
			<span class="text-3xl">Click anywhere to begin</span>
		{:else}
			<ul transition:fade id="menu-select" class="list-outside text-2xl">
				<li id="home" class="menu-option mb-4">
					<a
						href="/home"
						class="px-4 hover:text-zinc-600/80 hover:underline hover:decoration-dotted hover:underline-offset-8 dark:hover:text-zinc-50"
						>Enter</a
					>
				</li>
				<li id="credits" class="menu-option my-4">
					<a
						href="/credits"
						class="px-4 hover:text-zinc-600/80 hover:underline hover:decoration-dotted hover:underline-offset-8 dark:hover:text-zinc-50"
						>Credits</a
					>
				</li>
			</ul>
		{/if}
	</div>
</div>
