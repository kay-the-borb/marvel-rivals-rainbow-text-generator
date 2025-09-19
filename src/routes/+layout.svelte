<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/kaydev.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Kay's Marvel Rivals Rainbow Text Generator</title>
	<meta
		name="description"
		content="A quick tool to copy rainbow-ified text into Marvel Rival's game chat."
	/>
</svelte:head>

{@render children?.()}
