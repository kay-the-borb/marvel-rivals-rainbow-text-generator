<script>
	import CopyButton from '$lib/components/copy-button/CopyButton.svelte';
	import ModeSelector from '$lib/components/mode-selector/ModeSelector.svelte';
	import TextArea from '$lib/components/text-area/TextArea.svelte';
	import svg from '$lib/assets/kaydev.svg';
</script>

<div class="mx-auto mt-8 flex min-h-screen max-w-lg flex-col items-center justify-center gap-4 p-4">
	<div class="flex flex-row items-center justify-center gap-4">
		<a href="https://kaydev.io" target="_blank" class="transition-transform hover:scale-105">
			<img src={svg} class="h-12 rounded-full border-2 border-primary bg-base-300" />
		</a>
		<h1 class="text-xl font-black">Kay's Marvel Rivals Rainbow Text Gen</h1>
	</div>
	<div class="h-[1px] w-full bg-primary"></div>

	<div class="flex flex-col items-stretch justify-stretch gap-4 text-sm">
		<p>
			A mid september '25 Rivals update introduced the ability to change text colors in the rivals
			game chat. This is a quick n' dirty tool I threw together quick to rainbowify text.
		</p>
		<p>
			This works by prefixing the letters / words with a hashtag, then one of the color codes, ex
			'#R' to make everything after it red.
		</p>
		<p>
			However, each one of these also counts as text within the window, so rainbow-ified text is
			usually only about 1/3rd of the total text limit (100 characters, usually ~33 rainbowified,
			skipping spaces)
		</p>
		<p>
			Select a mode below (letter does a color change per letter, word does color change per word)
			and hit copy to copy it to your clipboard. Then just open the chat window and press CTRL+V to
			paste it in.
		</p>
		<p>Also if you see kaytheborb in-game, say hi! :3</p>
	</div>
	<div class="h-[1px] w-full bg-primary"></div>

	<ModeSelector />
	<TextArea />
	<CopyButton />
	<div class="flex-1"></div>
</div>
