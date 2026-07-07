<script lang="ts">
	import { ROUTES } from '$lib/constants/ROUTES';
	import Container from '$lib/components/Container.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import profilePic from '$lib/images/profile.png';
	import Typescript from '$lib/components/icons/typescript.svelte';
	import Javascript from '$lib/components/icons/javascript.svelte';
	import Csharp from '$lib/components/icons/csharp.svelte';
	import Python from '$lib/components/icons/python.svelte';
	import Golang from '$lib/components/icons/golang.svelte';
	import Html from '$lib/components/icons/html.svelte';
	import Css from '$lib/components/icons/css.svelte';
	import Dotnet from '$lib/components/icons/dotnet.svelte';
	import React from '$lib/components/icons/react.svelte';
	import Astro from '$lib/components/icons/astro.svelte';
	import Node from '$lib/components/icons/node.svelte';
	import Flask from '$lib/components/icons/flask.svelte';
	import Nextjs from '$lib/components/icons/nextjs.svelte';
	import Sveltejs from '$lib/components/icons/sveltejs.svelte';
	import Flutter from '$lib/components/icons/flutter.svelte';
	import Mysql from '$lib/components/icons/mysql.svelte';
	import Sqlite from '$lib/components/icons/sqlite.svelte';
	import Git from '$lib/components/icons/git.svelte';
	import Nginx from '$lib/components/icons/nginx.svelte';
	import Traefik from '$lib/components/icons/traefik.svelte';
	import Terraform from '$lib/components/icons/terraform.svelte';
	import Docker from '$lib/components/icons/docker.svelte';
	import Postgres from '$lib/components/icons/postgres.svelte';
</script>

<br />
<Container id="about-me" classOverrides="-mt-20 pt-20">
	<img
		src={profilePic}
		alt="Pic of me"
		class="border border-primary rounded-full relative w-[200px] h-[200px] min-w-[200px] min-h-[200px] object-cover"
	/>
	<div class="flex flex-col items-center justify-center">
		<h1 class="text-3xl">Ibad Rashid</h1>
		<span>Toronto Metropolitan University</span>
		<span class="font-semibold">BEng</span>
	</div>
	<p class="text-center">
		Hi, my name's Ibad, I'm a Senior Software Engineer with full-stack experience architecting and
		delivering enterprise-scale software. My main motivator for software development is producing
		high-quality software to improve the lives of the people using it.
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
			target="_blank"
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
		<div class="flex flex-col items-center justify-center gap-2">
			<h3 class="font-semibold text-lg text-secondary uppercase">Languages</h3>
			<ul
				class="flex flex-col items-start justify-center gap-4 p-4 border rounded border-border text-center shadow-[0_0_45px_-20px_rgb(var(--primary))]"
			>
				<li class="flex items-center gap-2"><Csharp /> C#</li>
				<li class="flex items-center gap-2"><Typescript /> TypeScript</li>
				<li class="flex items-center gap-2"><Javascript /> JavaScript</li>
				<li class="flex items-center gap-2"><Python /> Python</li>
				<li class="flex items-center gap-2"><Golang /> Go</li>
				<li class="flex items-center gap-2"><Html /> HTML</li>
				<li class="flex items-center gap-2"><Css /> CSS</li>
			</ul>
		</div>
		<div class="flex flex-col items-center justify-center gap-2">
			<h3 class="font-semibold text-lg text-secondary uppercase">Frameworks</h3>
			<ul
				class="flex flex-col items-start justify-center gap-4 p-4 border rounded border-border text-center shadow-[0_0_45px_-20px_rgb(var(--primary))]"
			>
				<li class="flex items-center gap-2"><Dotnet /> .NET</li>
				<li class="flex items-center gap-2"><React /> React</li>
				<li class="flex items-center gap-2"><Node /> Node Express</li>
				<li class="flex items-center gap-2"><Flask /> Flask</li>
				<li class="flex items-center gap-2"><Astro /> Astro</li>
				<li class="flex items-center gap-2"><Nextjs /> Next.js</li>
				<li class="flex items-center gap-2"><Sveltejs /> Svelte</li>
				<li class="flex items-center gap-2"><React /> React Native</li>
				<li class="flex items-center gap-2"><Flutter /> Flutter</li>
			</ul>
		</div>
		<div class="flex flex-col items-center justify-center gap-2">
			<h3 class="font-semibold text-lg text-secondary uppercase">Other</h3>
			<ul
				class="flex flex-col items-start justify-center gap-4 p-4 border rounded border-border text-center shadow-[0_0_45px_-20px_rgb(var(--primary))]"
			>
				<li class="flex items-center gap-2"><Postgres /> Postgres</li>
				<li class="flex items-center gap-2"><Mysql /> MySQL</li>
				<li class="flex items-center gap-2"><Sqlite /> MongoDB</li>
				<li class="flex items-center gap-2"><Docker /> Docker</li>
				<li class="flex items-center gap-2"><Terraform /> Terraform</li>
				<li class="flex items-center gap-2"><Traefik /> Traefik</li>
				<li class="flex items-center gap-2"><Nginx /> NGINX</li>
				<li class="flex items-center gap-2"><Git /> Git</li>
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
