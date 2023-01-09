<script lang="ts">
  import MailIcon from './mail-icon.svelte'
</script>

<form
  action="/thank-you"
  class="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
>
  <h2 class="align-top flex text-xl text-zinc-900 dark:text-zinc-100">
    <div class="h-8 w-8">
      <MailIcon />
    </div>
    
    <span class="ml-3 align-text-top">Follow the dev logs</span>
  </h2>
  <p class="mt-2 text-xl text-zinc-600 dark:text-zinc-400">
    Get notified when I publish something new, and unsubscribe at any time.
  </p>
  <div class="mt-6 flex">
    <input
      type="email"
      placeholder="Email address"
      aria-label="Email address"
      required
      class="text-lg min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-emerald-500 focus:outline-none focus:ring-4 focus:ring-emerald-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-indigo-400 dark:focus:ring-indigo-400/10"
    />
    <button type="submit" class="ml-4 inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-md outline-offset-2 transition active:transition-none bg-emerald-400 text-zinc-800 hover:bg-emerald-300 hover:text-zinc-700 active:bg-zinc-800 active:text-zinc-100/70 dark:bg-zinc-700 dark:hover:bg-indigo-600 dark:active:bg-zinc-700 dark:active:text-zinc-100/70">
      Join
    </button>
  </div>
</form>