

<script>
	export let active;
	$: isActive = str => active === str ? 'selected' : '';
</script>

<nav class="bg-black text-white block">
	<ul>
		<li><a class="{ isActive('home') }" href="/">home</a></li>
		<li><a class="{ isActive('about') }" href="/about">about</a></li>
	</ul>
</nav>