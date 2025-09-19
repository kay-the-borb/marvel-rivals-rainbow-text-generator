<script lang="ts" module>
	export const colorModes = {
		rainbowLetter: 'Rainbow Letters',
		rainbowWords: 'Rainbow Words'
	};
	const colorModeList = Object.values(colorModes);
	type ColorMode = (typeof colorModeList)[number];
	class ColorModeState {
		value = $state<ColorMode>(colorModeList[0]);
		updateValue(newValue: ColorMode) {
			this.value = newValue;
		}
	}
	export const colorModeState = new ColorModeState();
</script>

<script lang="ts">
	const fieldId = 'color-mode-switcher';
</script>

<div class="align-center flex w-full flex-col items-stretch justify-stretch">
	<label class="label" for={fieldId}>Color Mode</label>
	<select class="select w-full" id={fieldId} bind:value={colorModeState.value}>
		{#each colorModeList as mode}
			<option value={mode}>{mode}</option>
		{/each}
	</select>
</div>
