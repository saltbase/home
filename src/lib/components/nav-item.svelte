<script lang="ts">
	export let href: string;
</script>

<li>
	<a {href} class="relative block px-3 py-2 transition">
		<span class="hover:text-teal-500 dark:hover:text-teal-400">
			<slot />
		</span>
	</a>
</li>
