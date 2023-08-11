<script lang="ts">
	import { slide } from 'svelte/transition';

	// * Whether to show the mobile menu or hide it
	let showMenu = false;
</script>

<nav
	class="relative flex gap-4 items-center justify-end py-4 border-b-4 border-blue-400 bg-slate-200 md:justify-center"
>
	{#key showMenu}
		<ul
			transition:slide
			class="absolute top-full flex-col gap-4 items-center justify-center pb-4 w-full z-50 border-b-4 border-blue-500 bg-inherit md:static md:flex md:flex-row md:p-0 md:border-none"
			class:flex={showMenu}
			class:hidden={!showMenu}
		>
		</ul>
	{/key}
	<button
		class="flex items-center px-4 py-2 justify-center md:hidden"
		on:click={() => (showMenu = !showMenu)}
	>
		<i class="fa-solid fa-bars" />
	</button>
</nav>
