<!-- Layout file for the entire app -->
<script>
	import Navbar from '$lib/components/Navbar.svelte';
</script>

<!-- Navbar -->
<Navbar />

<!-- Main Content -->
<main class="relative flex flex-col items-center justify-start">
	<slot />
</main>

<style>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>
