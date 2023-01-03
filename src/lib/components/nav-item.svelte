<script lang="ts">
	export let href: string;
</script>

<a {href} class="relative block px-3 py-1 transition">
	<span class="hover:text-yellow-400 dark:hover:text-indigo-400">
		<slot />
	</span>
</a>
