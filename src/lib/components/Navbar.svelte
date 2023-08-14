<script lang="ts">
	import { browser } from '$app/environment';
	import { slide } from 'svelte/transition';
	import { ROUTES } from '$lib/constants/ROUTES';

	// * Whether to show the mobile menu or hide it
	let showMenu = false;

	// * Dark mode status
	let darkMode = false;

	// * Set user's theme preference
	if (browser) {
		// * Check if user prefers dark mode
		const userPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

		const appDiv = document.getElementsByClassName('app')[0];

		// * Set user's theme preference
		if (userPrefersDark) {
			appDiv?.classList.add('dark');
			darkMode = true;
		} else {
			appDiv?.classList.remove('dark');
			darkMode = false;
		}
	}

	// * Func to add/remove '.dark' class
	const toggleTheme = () => {
		darkMode = !darkMode;

		const appDiv = document.getElementsByClassName('app')[0];
		appDiv?.classList.toggle('dark');
	};
</script>

<nav
	class="sticky top-0 flex gap-4 items-center justify-end py-4 z-50 text-onBg bg-bg border-b-2 border-border md:justify-center"
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
			class="absolute top-full flex-col gap-4 items-center justify-center pb-4 w-full bg-inherit border-b-4 border-primary md:static md:flex md:flex-row md:p-0 md:border-none"
			class:flex={showMenu}
			class:hidden={!showMenu}
		>
			{#each ROUTES as route}
				<li
					class="relative flex flex-col items-center justify-center px-2 py-1 w-full hover:opacity-80 md:w-auto after:hidden md:after:flex after:absolute after:bottom-0 after:h-[1px] after:w-[1rem] after:rounded after:border after:border-primary after:pointer-events-none after:transition-all after:hover:w-full after:hover:h-full after:hover:-z-10 after:hover:bg-primary"
				>
					<a
						class="flex items-center justify-center w-full"
						href={route.url}
						on:click={() => (showMenu = false)}>{route.name}</a
					>
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
				class:left-[25px]={!darkMode}
				class:left-[0px]={darkMode}
			/>
		</button>
		<i class="far fa-sun" />
	</span>
	<button
		class="flex items-center px-4 py-2 justify-center md:hidden"
		on:click={() => (showMenu = !showMenu)}
	>
		<i class="fas fa-bars" />
	</button>
</nav>
