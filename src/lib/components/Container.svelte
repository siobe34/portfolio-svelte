<script lang="ts">
	let props = { ...$$restProps };
	export let classOverrides = '';
</script>

<article
	class={`${classOverrides} flex flex-col gap-4 justify-center items-center w-11/12 md:w-4/5 lg:w-3/5 my-4`}
	{...props}
>
	<slot />
</article>
