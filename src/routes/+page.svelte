<script lang="ts">
	import { ROUTES } from '$lib/constants/ROUTES';
	import Container from '$lib/components/Container.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import profilePic from '$lib/images/profile.png';
</script>

<Container id="about-me" classOverrides="-mt-20 pt-20">
	<img
		src={profilePic}
		alt="Pic of me"
		class="rounded-full w-[200px] h-[200px] min-w-[200px] min-h-[200px] object-cover"
	/>
	<h1 class="text-3xl">Ibad Rashid</h1>
	<p class="text-center">
		Hi, my name's Ibad. I'm an engineer with strong work experience in various fields of Intelligent
		Transportation Systems (ITS). My work with ITS has exposed me to several web applications
		related to Traffic Management/Safety Systems and that's how I discovered my passion for Software
		Development.
	</p>
	<span class="flex flex-wrap items-center justify-center gap-2">
		<a
			href={ROUTES[1].url}
			class="flex items-center justify-center px-4 py-2 text-lg rounded bg-primary text-onPrim hover:opacity-80"
		>
			Projects
		</a>
		<a
			href={ROUTES[3].url}
			class="flex items-center justify-center px-4 py-2 text-lg rounded border border-primary hover:opacity-80 hover:border-secondary hover:shadow-[0_0_45px_-20px_rgb(var(--secondary))]"
		>
			View my Resume
		</a>
	</span>
</Container>
<span
	class="bg-gradient-to-r from-transparent via-primary/10 to-transparent w-full h-4 skew-y-3 mt-24"
/>
<span
	class="bg-gradient-to-r from-transparent via-primary/10 to-transparent w-full h-4 -skew-y-6 mb-24"
/>
<Container id="technical-skills" classOverrides="-mt-20 pt-20">
	<h2 class="text-2xl">Technical Skills</h2>
	<section
		class="flex flex-col items-center justify-center gap-8 md:flex-row md:items-start md:gap-16"
	>
		<div class="flex flex-col items-center justify-center gap-2 bg-bg">
			<h3 class="font-semibold text-lg text-secondary uppercase">Languages</h3>
			<ul
				class="flex flex-col items-center justify-center gap-4 p-4 border rounded border-border text-center shadow-[0_0_45px_-20px_rgb(var(--primary))]"
			>
				<li>Typescript</li>
				<li>Javascript</li>
				<li>Python</li>
				<li>Dart</li>
				<li>HTML</li>
				<li>CSS</li>
				<li>SQL</li>
			</ul>
		</div>
		<div class="flex flex-col items-center justify-center gap-2 bg-bg">
			<h3 class="font-semibold text-lg text-secondary uppercase">Frameworks</h3>
			<ul
				class="flex flex-col items-center justify-center gap-4 p-4 border rounded border-border text-center shadow-[0_0_45px_-20px_rgb(var(--primary))]"
			>
				<li>React</li>
				<li>Next.js</li>
				<li>SvelteKit</li>
				<li>Node Express</li>
				<li>Flask</li>
				<li>React Native</li>
				<li>Flutter</li>
				<li>Supabase<br />(Firebase alternative)</li>
			</ul>
		</div>
		<div class="flex flex-col items-center justify-center gap-2 bg-bg">
			<h3 class="font-semibold text-lg text-secondary uppercase">Other</h3>
			<ul
				class="flex flex-col items-center justify-center gap-4 p-4 border rounded border-border text-center shadow-[0_0_45px_-20px_rgb(var(--primary))]"
			>
				<li>Git</li>
				<li>MySQL/MariaDB</li>
				<li>Postgres</li>
				<li>MongoDB</li>
				<li>Docker</li>
				<li>Traefik/NGINX</li>
			</ul>
		</div>
	</section>
</Container>
<span
	class="w-full
	my-24
	before:flex
	before:bg-gradient-to-r
	before:from-primary/20
	before:to-transparent
	before:w-full
	before:h-4
	before:-skew-y-1
	after:flex
	after:bg-gradient-to-r
	after:from-primary/20
	after:to-transparent
	after:w-full
	after:h-4
	after:skew-y-3
	"
/>
<Container id="projects" classOverrides="-mt-20 pt-20 mb-16">
	<h2 class="text-2xl">Projects</h2>
	<Projects />
</Container>
