<script>
	import Header from '$lib/header/Header.svelte';
	import '../app.css';
	import { page } from '$app/stores'
</script>

<Header />

<main>
	{#if $page.url.pathname === '/login'}
		<div class="fancy-layout">
			<slot />
		</div>
	{:else}
		<slot />
	{/if}
</main>

<footer id="footer"
		class=" bg-color-dark-scale-2 border border-end-0 border-start-0 border-bottom-0 border-color-light-3 mt-3 mt-auto fixed-bottom">
	<div class="copyright bg-dark py-4">
		<div class="container text-center py-2">
			<p class="mb-0 text-2">Copyright 2022 - CargoLedger - All Rights Reserved</p>
		</div>
	</div>
</footer>

<style>

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 1024px;
		margin: 0 auto;
		height: 100%;
		box-sizing: border-box;
	}

	footer {
		position: fixed;
		height: 100px;
		bottom: 0;
		width: 100%;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 40px 0;
		}
	}
</style>
