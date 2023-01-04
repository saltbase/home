<script lang="ts">
	import { page } from '$app/stores';
</script>

<footer class="mt-12" class:hidden={$page.route.id === '/'}>
	<div class="sm:px-8">
		<div class="relative inset-x-0 bottom-0 mx-auto max-w-7xl lg:px-8">
			<div class="pt-10 pb-16">
				<div class="relative px-4 sm:px-8 lg:px-12">
					<div class="mx-auto max-w-2xl lg:max-w-5xl">
						<div class="flex flex-col items-center justify-between gap-6 sm:flex-row">
							<div class="flex gap-10 text-2xl font-medium text-zinc-800 dark:text-zinc-200 ">
								<a href="/about" class="hover:text-yellow-400 dark:hover:text-indigo-400">About</a>
								<a href="/speaking" class="hover:text-yellow-400 dark:hover:text-indigo-400"
									>Projects</a
								>
								<a href="/uses" class="hover:text-yellow-400 dark:hover:text-indigo-400"
									>Contact Me</a
								>
							</div>
							<p class="text-lg text-zinc-400 dark:text-zinc-500">
								&copy; {new Date().getFullYear()} Saltbase LLC. All rights reserved.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</footer>
