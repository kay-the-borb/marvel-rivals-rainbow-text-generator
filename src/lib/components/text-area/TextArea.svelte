<script lang="ts" module>
	class TextAreaState {
		value = $state<string>();
		updateValue(newValue: string) {
			this.value = newValue;
		}
	}
	export const textAreaState = new TextAreaState();
</script>

<script>
	import { colorModes, colorModeState } from '../mode-selector/ModeSelector.svelte';

	const fieldId = 'text-input';
	const clearOnFocusId = 'clear-on-focus';
	let fieldRef = $state<HTMLTextAreaElement>();
	let shouldClearOnFocus = $state<boolean>(false);

	const letterRawCharacterLength = $derived(
		(textAreaState?.value?.replaceAll(/[^\S]/gi, '')?.length ?? 0) * 3 +
			(textAreaState?.value?.replaceAll(/\S/gi, '')?.length ?? 0)
	);
	const wordRawCharacterLength = $derived(
		(textAreaState?.value?.split(' ').filter(Boolean).length ?? 0) * 2 +
			(textAreaState?.value?.split(' ').filter(Boolean).join('').length ?? 0) +
			(textAreaState?.value?.replaceAll(/\S/gi, '')?.length ?? 0)
	);

	const handleClear = () => {
		textAreaState.updateValue('');
		fieldRef?.focus();
	};
	const handleOnFocus = () => {
		if (shouldClearOnFocus) {
			handleClear();
		}
	};
</script>

<div class="w-full">
	<div class="mb-2 flex flex-row items-center justify-between gap-2 text-sm">
		<button onclick={handleClear} class="btn btn-outline btn-sm btn-primary">Clear</button>

		<label class="label" for={fieldId}
			>Text Entry

			{#if colorModeState.value === colorModes.rainbowLetter}
				({letterRawCharacterLength ?? 0} chars used)
			{:else if colorModeState.value === colorModes.rainbowWords}
				({wordRawCharacterLength ?? 0} chars used)
			{/if}
		</label>
		<div class="flex-1"></div>
		<div class="flex flex-row items-center justify-center gap-2">
			<label for={clearOnFocusId}>Clear on focus?</label>
			<input
				class="checkbox checkbox-sm checkbox-primary"
				type="checkbox"
				bind:checked={shouldClearOnFocus}
				id={clearOnFocusId}
			/>
		</div>
	</div>
	<textarea
		bind:this={fieldRef}
		onfocus={handleOnFocus}
		class="textarea w-full"
		id={fieldId}
		bind:value={textAreaState.value}
		placeholder="put your salt / ggs / here"
	></textarea>
	{#if colorModeState.value === colorModes.rainbowLetter && letterRawCharacterLength > 100}
		<span class="text-error">Over 100 characters - text will be cut off.</span>
	{/if}
	{#if colorModeState.value === colorModes.rainbowWords && wordRawCharacterLength > 100}
		<span class="text-error">Over 100 characters - text will be cut off.</span>
	{/if}
</div>
