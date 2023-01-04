<script lang="ts">
	export let href: string;
</script>

<li>
	<a {href} class="relative block px-3 py-1 transition">
		<span class="hover:text-emerald-400 dark:hover:text-indigo-400">
			<slot />
		</span>
	</a>
</li>
