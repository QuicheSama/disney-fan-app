<script lang="ts">
	import { createQuery } from '@tanstack/svelte-query';
	import type { PageData } from './$types';
	import CharacterProfile from '$lib/components/CharacterProfile.svelte';

	export let data: PageData;

	const query = createQuery({
		queryKey: ['character', data.id],
		queryFn: async () => (await fetch(`https://api.disneyapi.dev/character/${data.id}`)).json()
	});
</script>

<div class="container">
	{#if $query.isLoading}
		<p>Loading...</p>
	{:else if $query.isError}
		<p>Error: {$query.error.message}</p>
	{:else if $query.isSuccess}
		<CharacterProfile
			name={$query.data.data.name}
			updatedAt={$query.data.data.updatedAt}
			imageUrl={$query.data.data.imageUrl}
			films={$query.data.data.films}
			shorts={$query.data.data.shortFilms}
			shows={$query.data.data.tvShows}
			infoUrl={$query.data.data.sourceUrl}
		/>
	{/if}
</div>

<style>
	.container {
		display: flex;
		justify-content: center;
	}
</style>
