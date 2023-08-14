<script lang="ts">
	import { PROJECTS, brandInfo } from '$lib/constants/PROJECTS';
	import { scale } from 'svelte/transition';

	// * Index of the currently shown project
	let activeProjectIdx = 0;

	// * Func to show the next project
	const nextProject = () => {
		// * If the current project is the last one in the list then show the first project in the list
		// * Otherwise show the next project in the list
		if (activeProjectIdx === PROJECTS.length - 1) {
			activeProjectIdx = 0;
		} else {
			activeProjectIdx += 1;
		}
	};

	// * Func to show the previous project
	const previousProject = () => {
		// * If the current project is the first one in the list then show the last project in the list
		// * Otherwise show the previous project in the list
		if (activeProjectIdx === 0) {
			activeProjectIdx = PROJECTS.length - 1;
		} else {
			activeProjectIdx -= 1;
		}
	};
</script>

<svelte:head>
	{#each PROJECTS as project}
		<link rel="preload" as="image" href={project.imgSrc} />
	{/each}
</svelte:head>

<section
	class="flex flex-col items-center justify-center gap-4 p-4 border rounded-lg border-border/10 shadow-[0_0_45px_-20px_rgb(var(--primary))]"
>
	<h3 class="font-semibold text-lg text-secondary uppercase">
		{PROJECTS[activeProjectIdx].name}
	</h3>

	<p>
		{PROJECTS[activeProjectIdx].description}
	</p>
	<a
		href={PROJECTS[activeProjectIdx].url}
		class="flex items-center justify-center px-4 py-2 text-lg rounded bg-primary text-onPrim hover:opacity-80"
	>
		{PROJECTS[activeProjectIdx].action}
	</a>
	{#key activeProjectIdx}
		<div class="relative flex items-center justify-center">
			<button
				class="absolute top-[50%] left-0 md:static flex items-center justify-center mr-2 p-2 text-2xl rounded bg-gradient-to-r from-primary/90 via-primary/60 to-primary/30 hover:opacity-80 active:opacity-60"
				on:click={previousProject}
			>
				<i class="fas fa-arrow-left" />
			</button>
			<a
				in:scale={{ start: 0.85 }}
				class="max-w-[85%] rounded border border-border/40"
				href={PROJECTS[activeProjectIdx].imgSrc}
				target="_blank"
			>
				<img src={PROJECTS[activeProjectIdx].imgSrc} alt="project screenshot" />
			</a>
			<button
				class="absolute top-[50%] right-0 md:static flex items-center justify-center ml-2 p-2 text-2xl rounded bg-gradient-to-r from-primary/30 via-primary/60 to-primary/90 hover:opacity-80 active:opacity-60"
				on:click={nextProject}
			>
				<i class="fas fa-arrow-right" />
			</button>
		</div>
	{/key}
	<ul class="flex flex-wrap items-center justify-center gap-2">
		{#each PROJECTS[activeProjectIdx].stack as technology}
			<li
				class="flex items-center justify-center px-4 py-1 rounded capitalize cursor-default hover:opacity-70 active:opacity-25"
				style:color={brandInfo[technology].color}
				style:background-color={brandInfo[technology].backgroundColor}
			>
				{brandInfo[technology].name}
			</li>
		{/each}
	</ul>
	<div class="flex gap-2">
		{#each PROJECTS as project, i}
			<button
				class="cursor-default text-sm hover:text-secondary"
				on:click={() => (activeProjectIdx = i)}
			>
				{#if activeProjectIdx === i}
					<i class="fas fa-circle text-primary" />
				{:else}
					<i class="fas fa-circle" />
				{/if}
			</button>
		{/each}
	</div>
</section>
