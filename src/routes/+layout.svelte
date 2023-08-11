<!-- Layout file for the entire app -->
<script>
	import Navbar from '$lib/components/Navbar.svelte';
</script>

<!-- Navbar -->
<Navbar />
	<slot />

<style>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>
