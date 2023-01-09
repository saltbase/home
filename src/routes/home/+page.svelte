<script lang="ts">
	import Newsletter from "./newsletter.svelte";
	import BriefcaseIcon from "./briefcase-icon.svelte";

	const currentYear = new Date().getFullYear();
	let resume = [
    {
      id: 1,	
      company: 'Saltbase',
      title: 'Founder',
      start: '2022',
      end: 'Present',
    },
    {
      id: 2,
      company: 'Maven Wave Partners',
      title: 'Senior Consultant',
      start: '2020',
      end: 'Present',
    },
    {
      id: 3,
      company: 'BMW Technology Corp.',
      title: 'Software Engineer',
      start: '2019',
      end: '2020',
    },
    {
      id: 4,
      company: 'JPMorgan Chase & Co.',
      title: 'Software Developer',
      start: '2018',
      end: '2019',
    },
  ]

</script>

<svelte:head>
	<title>Home - Saltbase</title>
</svelte:head>

<main>
	<!-- Landing area -->
	<div class="mt-12 sm:px-8">
		<div class="mx-auto max-w-7xl lg:px-8">
			<div class="relative px-4 px-2 lg:px-12">
				<div class="mx-auto max-w-2xl columns-1 lg:max-w-5xl">
					<div class="container relative top-16 text-zinc-900 dark:text-zinc-50">
						<h1 class="max-w-2xl text-4xl md:text-6xl">
							Tank main, aspiring producer, and part time racer
						</h1>
						<p
							class="mt-6 max-w-2xl text-2xl leading-6 text-zinc-700 dark:text-zinc-300/50 sm:text-3xl"
						>
							I'm Henry, a freelancer based in Chicago. I'm a full-stack developer by trade and indie
							dev by night. I'm passionate about music, gaming, free and open source software, and
							anything that goes fast!
						</p>
					</div>

				</div>
			</div>
		</div>
	</div>
	
	<div class="sm:px-8 mt-24 lg:mt-48">
		<div class="mx-auto max-w-7xl lg:px-8">
			<div class="relative px-4 sm:px-8 lg:px-12">
				<div class="mx-auto max-w-2xl lg:max-w-5xl">
					<div class="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
						<div class="flex flex-col gap-16 border border-zinc-100 dark:border-zinc-700/80 rounded-xl">
							<div class="mt-16 sm:mt-20 lg:mt-32">
								<div class="mx-auto max-w-7xl lg:px-8">
									<div class="relative px-4 px-2 lg:px-12">
										<div class="mx-auto h-32 md:h-64 md:w-64 lg:h-96 lg:w-96 flex brightness-75 hover:brightness-0 dark:hover:brightness-150">
											<span class="mx-auto text-lg md:text-2xl text-zinc-500 dark:text-zinc-50 mt-8 sm:mt-16 md:mt-32 lg:mt-48">UNDER CONSTRUCTION! Coming Soon<span class="text-xl">&trade;</span></span>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="space-y-10 lg:pl-16 xl:pl-24">
							<Newsletter />
							<div class="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
						      <h2 class="flex text-xl text-zinc-900 dark:text-zinc-100">
						        <div class="h-8 w-8"><BriefcaseIcon /></div>
						        <span class="ml-3 md:text-2xl">Work</span>
						      </h2>
						      <ol class="mt-6 space-y-4">
						        {#each resume as role (role.id)}
						          <li class="flex gap-4">
						            <dl class="flex flex-auto flex-wrap gap-x-2">
						              <dt class="sr-only">Company</dt>
						              <dd class="w-full flex-none text-xl text-zinc-900 dark:text-zinc-100">
						                {role.company}
						              </dd>
						              <dt class="sr-only">Role</dt>
						              <dd class="text-lg text-zinc-500 dark:text-zinc-400">
						                {role.title}
						              </dd>
						              <dt class="sr-only">Date</dt>
						              <dd
						                class="ml-auto text-lg text-zinc-400 dark:text-zinc-500"
						                
						              >
						              	<time dateTime={role.start}>
						                  {role.start}
						                </time>
						                <span aria-hidden="true">—</span>{' '}
						                <time dateTime={role.end}>
						                  {role.end}
						                </time>  
						              </dd>
						            </dl>
						          </li>
						        {/each}
						      </ol>
						    </div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</main>
