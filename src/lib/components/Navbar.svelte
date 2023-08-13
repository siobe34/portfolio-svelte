<script lang="ts">
	import { slide } from 'svelte/transition';
	import { ROUTES } from '$lib/constants/ROUTES';

	// * Whether to show the mobile menu or hide it
	let showMenu = false;

	// * Dark mode status
	let darkMode = false;

	// * Func to add/remove '.dark' class
	const toggleTheme = () => {
		darkMode = !darkMode;

		const appDiv = document.getElementsByClassName('app')[0];
		appDiv?.classList.toggle('dark');
	};
</script>

<nav
	class="relative flex gap-4 items-center justify-end py-4 border-b-4 border-blue-400 bg-slate-200 md:justify-center"
>
	<a href="https://github.com/siobe34" class="text-3xl ml-4 hover:opacity-80 hover:text-secondary">
		<i class="fab fa-github" />
	</a>
	<a
		href="https://www.linkedin.com/in/ibadrashid/"
		class="text-3xl mr-auto hover:opacity-80 hover:text-secondary"
	>
		<i class="fab fa-linkedin" />
	</a>
	{#key showMenu}
		<ul
			transition:slide
			class="absolute top-full flex-col gap-4 items-center justify-center pb-4 w-full z-50 border-b-4 border-blue-500 bg-inherit md:static md:flex md:flex-row md:p-0 md:border-none"
			class:flex={showMenu}
			class:hidden={!showMenu}
		>
			{#each ROUTES as route}
				<li>
					<a href={route.url}>{route.name}</a>
				</li>
			{/each}
		</ul>
	{/key}
	<span class="flex items-center justify-center gap-2 h-full mr-4">
		<i class="far fa-moon" />
		<button
			class="relative flex flex-col justify-center w-14 h-full rounded-full border border-border"
			on:click={toggleTheme}
		>
			<span
				class="absolute w-[20px] h-[20px] mx-1 rounded-full bg-primary transition-all"
				class:left-[28px]={darkMode}
				class:left-[0px]={!darkMode}
			/>
		</button>
		<i class="far fa-sun" />
	</span>
	<button
		class="flex items-center px-4 py-2 justify-center md:hidden"
		on:click={() => (showMenu = !showMenu)}
	>
		<i class="fa-solid fa-bars" />
	</button>
</nav>
