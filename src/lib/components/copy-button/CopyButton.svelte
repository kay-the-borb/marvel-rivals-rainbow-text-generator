<script lang="ts">
	import { colorModeState } from '../mode-selector/ModeSelector.svelte';
	import { textAreaState } from '../text-area/TextArea.svelte';
	import { process } from './color-processor.svelte';

	let hasCopied = $state<boolean>(false);
	let copiedTimeout = $state<NodeJS.Timeout>();

	const handleClick = () => {
		try {
			process();
			hasCopied = true;
			if (copiedTimeout) clearTimeout(copiedTimeout);
			copiedTimeout = setTimeout(() => {
				hasCopied = false;
			}, 2000);
		} catch (e) {
			console.error(e);
		}
	};
</script>

<button
	disabled={!textAreaState.value}
	class={['btn btn-primary', { 'btn-success': hasCopied }]}
	onclick={handleClick}>{hasCopied ? 'Copied!' : 'Copy!'}</button
>
