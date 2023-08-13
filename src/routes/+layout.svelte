<!-- Layout file for the entire app -->
<script>
	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';
</script>

<!-- Navbar -->
<Navbar />

<!-- Main Content -->
<main class="relative flex flex-col items-center justify-start text-onBg bg-bg">
	<slot />
</main>
