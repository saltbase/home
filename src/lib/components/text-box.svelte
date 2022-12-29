<script lang="ts">
	import Typewriter from './typewriter.svelte';

	export let name: string;
	export let dialog: string;
</script>

<div class="frame justify-self-stretch">
	<header>{name.toUpperCase()}</header>
	<div class="text-area">
		<Typewriter textContent={dialog} />
		<i class="continue fas fa-caret-down hvr-icon hvr-hang" />
	</div>
</div>

<style>
	.frame {
		border-style: solid;
		border-width: 0.2em;
		border-radius: 8px;

		background: linear-gradient(to bottom, #323232 0%, #3f3f3f 40%, #1c1c1c 150%),
			linear-gradient(to top, rgba(255, 255, 255, 0.4) 0%, rgba(0, 0, 0, 0.25) 200%);
		background-blend-mode: multiply;
	}

	.text-area {
		padding: 2px 20px;
	}

	@keyframes hvr-hang {
		0% {
			-webkit-transform: translateY(8px);
			transform: translateY(8px);
		}
		50% {
			-webkit-transform: translateY(4px);
			transform: translateY(4px);
		}
		100% {
			-webkit-transform: translateY(8px);
			transform: translateY(8px);
		}
	}

	.hvr-hang {
		display: inline-block;
		-webkit-transform: perspective(1px) translateZ(0);
		transform: perspective(1px) translateZ(0);
		box-shadow: 0 0 1px rgba(0, 0, 0, 0);

		-webkit-animation-name: hvr-hang-sink, hvr-hang;
		animation-name: hvr-hang-sink, hvr-hang;
		-webkit-animation-duration: 0.3s, 1.5s;
		animation-duration: 0.3s, 1.5s;
		-webkit-animation-delay: 0s, 0.3s;
		animation-delay: 0s, 0.3s;
		-webkit-animation-timing-function: ease-out, ease-in-out;
		animation-timing-function: ease-out, ease-in-out;
		-webkit-animation-iteration-count: 1, infinite;
		animation-iteration-count: 1, infinite;
		-webkit-animation-fill-mode: forwards;
		animation-fill-mode: forwards;
		-webkit-animation-direction: normal, alternate;
		animation-direction: normal, alternate;
	}

	.continue {
		margin-left: 100%;
		padding-bottom: var(--global-space);
	}
</style>
