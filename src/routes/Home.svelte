<svelte:head>
	<title>Home</title>
</svelte:head>

<script>
 
	let name = 'world';
</script>

<style lang="postcss">
  @import 'tailwindcss/base';
  @import 'tailwindcss/components';
  @import 'tailwindcss/utilities';
</style>


<h1 class="text-6xl text-red-400">Guten Abend {name}!</h1>
