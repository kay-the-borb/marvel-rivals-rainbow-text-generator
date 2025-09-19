import { colorModes, colorModeState } from '../mode-selector/ModeSelector.svelte';
import { textAreaState } from '../text-area/TextArea.svelte';

const colors = {
	yellow: 'Y',
	orange: 'O',
	red: 'R',
	pink: 'P',
	magenta: 'M',
	ultraviolet: 'U',
	blue: 'B',
	indigo: 'I',
	aquamarine: 'A',
	turquoise: 'T',
	green: 'G',
	emerald: 'E',
	khaki: 'K',
	white: 'W'
};
const colorList = Object.entries(colors)
	.filter(([k]) => k !== 'white')
	.map(([, v]) => v);

const whitespaceRegexp = new RegExp(/\s/);
export const process = () => {
	if (!textAreaState.value || !colorModeState.value) return;

	if (colorModeState.value === colorModes.rainbowLetter) {
		let finalString = '';
		let startingIndex = 0;
		for (const letter of textAreaState.value) {
			console.log(startingIndex);
			if (whitespaceRegexp.test(letter)) {
				finalString += letter;
			} else {
				finalString += `#${colorList[startingIndex % colorList.length]}${letter}`;
				startingIndex += 1;
			}
		}
		navigator.clipboard.writeText(finalString);
	} else if (colorModeState.value === colorModes.rainbowWords) {
		const sections: string[] = [];
		let startingIndex = 0;
		for (const word of textAreaState.value?.split(' ') ?? []) {
			console.log(startingIndex);
			if (!whitespaceRegexp.test(word)) {
				sections.push(`#${colorList[startingIndex % colorList.length]}${word}`);
				startingIndex += 1;
			}
		}
		const finalString = sections.join(' ');
		navigator.clipboard.writeText(finalString);
	}
};
