<script lang="ts">
	let showMenu = false;
</script>

<nav
	class="relative flex gap-4 items-center justify-end py-4 border-b-4 border-blue-400 bg-slate-200 md:justify-center"
>
	{#if showMenu}
		<ul
			class="absolute top-full flex flex-col gap-4 items-center justify-center pb-4 w-full z-50 border-b-4 border-blue-500 bg-inherit md:static md:flex-row md:p-0 md:border-none"
		>
			<li>
				<a href="#top">About Me</a>
			</li>
			<li>
				<a href="#top">Projects</a>
			</li>
			<li>
				<a href="#top">Technical Skills</a>
			</li>
			<li>
				<a href="#top">Resume</a>
			</li>
		</ul>
	{/if}
	<button
		class="flex items-center px-4 py-2 justify-center md:hidden"
		on:click={() => (showMenu = !showMenu)}>Menu</button
	>
</nav>
<main class="">
	<slot />
</main>

<style>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>
